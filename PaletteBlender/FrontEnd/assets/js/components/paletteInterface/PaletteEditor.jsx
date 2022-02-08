import React, { useState, useContext, useEffect } from 'react';
import { basePalette } from '../basePalette';

import { PaletteContext } from '../PaletteContext';
import ColorPicker from './ColorPicker';
import ShadeEditor from './ShadeEditor';

const DEFAULT_COLOR = {
    name: null,
    color: '#fff',
    locked: false,
    selected: false,
};

function capitalizeWord(word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1);
}

function formatColorNameForCss(colorName) {
    if (!colorName) {
        return null;
    }

    let colorNameCenter = colorName.indexOf('Light');
    if (colorNameCenter === -1) {
        colorNameCenter = colorName.indexOf('Dark');
    }

    let cssColorName;
    if (colorNameCenter === -1) {
        cssColorName = colorName;
    } else {
        cssColorName = colorName.slice(0, colorNameCenter) + "-" + colorName.slice(colorNameCenter);
    }

    return cssColorName.toLowerCase();
}

function SubPaletteSelector(props) {
    const getColorOptions = () => {
        return (
            <React.Fragment>
                {props.subPaletteNames.map(paletteName => {
                    // Capitalize the first letter of the sub palette name
                    const paletteTitle = capitalizeWord(paletteName);

                    return (
                        <option key={paletteName} value={paletteName}>
                            {paletteTitle}
                        </option>
                    );
                })}
            </React.Fragment>
        );
    }

    return (
        <div className="palette-selector">
            <div className="selector-input">
                <label htmlFor="palette-select">Select Sub-Palette</label>
                <select 
                    name="palette-select"
                    id="palette-select"
                    value={props.selectedSubPalette}
                    onChange={(e) => {
                        const selectedPaletteName = e.target.value;
                        props.setSelectedPaletteName(selectedPaletteName);
                    }}
                >
                    {getColorOptions()}
                </select>
                <div className="section-options">
                    <div className="btn btn-info">CSS Tools</div>
                    <div className="btn btn-light" onClick={props.resetSelectedSubPalette}>
                        Reset
                    </div>
                </div>
            </div>
        </div>
    );
}

function PaletteViewer(props) {
    const [ colorPalette, setColorPalette ] = useContext(PaletteContext);

    const getLockIcon = (color) => {
        let lockIcon = null;
        if (color.locked === true) {
            lockIcon = (
                <i className='material-icon-outline'>lock</i>
            );
        }

        return lockIcon;
    };

    const getGridItemClass = (color) => {
        let gridItemClass = 'color-grid-item';
        if (color.selected === true) {
            gridItemClass += ' selected';
        }

        if (color.name.includes('Light')) {
            gridItemClass += ' grid-item-light';
        }

        return gridItemClass;
    };

    const makeColorGrid = () => {
        return colorPalette[props.selectedPaletteName].map(color => (
            <div 
                key={color.name}
                id={'grid_' + color.name}
                className={getGridItemClass(color)}
                style={{backgroundColor: color.color}}
                onClick={(e) => {
                    const color = e.target.id.replace('grid_', '');

                    // Toggle Selected state
                    const subPalette = colorPalette[props.selectedPaletteName].map(colorObj => {
                        if (colorObj.name === color) {
                            // Deselect color if it's already selected
                            if (colorObj.selected === true) {
                                colorObj.selected = false;
                                props.setSelectedColor(DEFAULT_COLOR);
                            } else {
                                colorObj.selected = true;
                                props.setSelectedColor({...colorObj});
                            }
                        } else {
                            colorObj.selected = false;
                        }

                        return colorObj;
                    });

                    const updatedPalette = {...colorPalette};
                    updatedPalette[props.selectedPaletteName] = subPalette;
                    setColorPalette(updatedPalette);
                }}
            >
                {getLockIcon(color)}
            </div>
        ));
    };

    const toggleColorLock = () => {
        const subPalette = colorPalette[props.selectedPaletteName].map(colorObj => {
            if (colorObj.selected === true) {
                colorObj.locked = colorObj.locked === false;

                // Reset selected color so that changes to the locked status get passed on to the color picker
                props.setSelectedColor({...colorObj})
            }
            
            return colorObj;
        });
        
        const updatedPalette = {...colorPalette};
        updatedPalette[props.selectedPaletteName] = subPalette;
        setColorPalette(updatedPalette);
    };
    
    const selectedColor = colorPalette[props.selectedPaletteName].find(colorObj => colorObj.selected === true);

    const getLockBtnIcon = () => {
        if (!selectedColor) {
            return 'lock_open';
        }

        return selectedColor.locked ? 'lock' : 'lock_open'
    };

    const getSelectedColorName = () => {
        if (!selectedColor) {
            return null;
        }

        return formatColorNameForCss(selectedColor.name);
    }

    const getEditorModeBtn = () => {
        let editorBtn;
        if (props.editorMode === 'color') {
            editorBtn = (
                <div 
                    className="btn btn-outline-info"
                    onClick={() => {
                        props.setEditorMode('shades');
                    }}
                >
                    Shades...
                </div>
            );
        } else {
            editorBtn = (
                <div
                    className="btn btn-outline-info"
                    onClick={() => {
                        props.setEditorMode('color');
                    }}
                >
                    Color...
                </div>
            );
        }

        return editorBtn;
    };
    
    return (
        <div className="palette-viewer">
            <div className="viewer-section-top">
                <div className="color-info">
                    <div className="info-title">
                        <h2 className='color-info-title'>{capitalizeWord(props.selectedPaletteName)}</h2>

                    </div>
                    <div className="selection-info">
                        <div className="selection-info-item">
                            <strong className='color-info-label'>Selected: </strong> {getSelectedColorName()}
                        </div>
                    </div>
                </div>
                <div className="color-options">
                    {/* <div className="btn-btn-info"></div> */}
                    <div 
                        className="btn btn-outline-light"
                        onClick={() => {
                            if (!selectedColor) {
                                return;
                            } else {
                                toggleColorLock();
                            }
                        }}
                    >
                        <i className='material-icon-outline'>{getLockBtnIcon()}</i>
                    </div>
                    <div className="btn btn-outline-light" 
                        onClick={props.resetSelectedColor}
                        style={{display: 'flex'}}
                    >
                        <span className="material-icon-outline">
                            undo
                        </span>
                    </div>
                    <div className="btn btn-outline-info">
                        Explode
                    </div>
                    {getEditorModeBtn()}
                </div>

            </div>
            <div className="view-section-bottom">
                <div className="color-grid">
                    {makeColorGrid()}
                </div>
            </div>
        </div>
    );
}

function PaletteEditor() {
    const [ visibility, setVisibility ] = useState('hide');
    const [ colorPalette, setColorPalette ] = useContext(PaletteContext);

    const subPaletteNames = Object.keys(colorPalette);
    const [ selectedPaletteName, setSelectedPaletteName ] = useState(subPaletteNames[0]);
    const [ selectedColor, setSelectedColor ] = useState(DEFAULT_COLOR);

    // Available color modes: color & shades
    const [ editorMode, setEditorMode ] = useState('color');

    useEffect(() => {
        deselectAllColors();
        setSelectedColor(DEFAULT_COLOR);
    }, [selectedPaletteName]);

    // hslResetCounter is used to force updates of the hsl slider when a sub palette is reset.
    // This is approach is probably frowned upon, but it's very simple, and since it only triggers a rerender on
    // resetting a color palette (very occasionally) this seems like a fine approach.
    const [hslResetCounter, resetHslEditor] = useState(0);
    const resetSelectedSubPalette = () => {
        const updatedSubpalette = colorPalette[selectedPaletteName].map(color => {
            if (color.locked === true) {
                return color;
            } else {
                return {...basePalette[selectedPaletteName].find(baseColor => baseColor.name === color.name)}
            }
        });
        
        const updatedPalette = {...colorPalette};
        updatedPalette[selectedPaletteName] = updatedSubpalette;

        setColorPalette(updatedPalette);
        
        // Just unsetting the selected color on full sub palette refresh -- might be nice to find out previously selected color
        // and set that in the updatedPalette instead.
        setSelectedColor(DEFAULT_COLOR);
        resetHslEditor(prevCount => prevCount + 1);
    }

    const resetSelectedColor = () => {
        if (selectedColor.name === null || selectedColor.locked === true) {
            return;
        }
        
        const baseColor = {...basePalette[selectedPaletteName].find(color => color.name === selectedColor.name)};
        const subPalette = colorPalette[selectedPaletteName].map(colorObj => {
            if (colorObj.name === selectedColor.name) {
                colorObj.color = baseColor.color;
            }

            return colorObj;
        });

        const updatedPalette = {...colorPalette};
        updatedPalette[selectedPaletteName] = subPalette;
        setColorPalette(updatedPalette);

        // Refresh selected color so that the changes are passed to the color picker
        setSelectedColor({...updatedPalette[selectedPaletteName].find(colorObj => colorObj.selected === true)});
    }

    const deselectAllColors = () => {
        let updatedPalette = {};
        for (const [key, val] of Object.entries(colorPalette)) {
            updatedPalette[key] = val.map(color => {
                color.selected = false;
                return color;
            });
        }

        setColorPalette(updatedPalette);
    };

    const getBodyClass = () => {
        let bodyClass = "editor-body";
        if (visibility === 'hide') {
            bodyClass += ' collapse';
        } else {
            bodyClass += ' expanded';
        }

        return bodyClass;
    };

    const getContainerClass = () => {
        let containerClass = "footer-container";
        if (visibility === 'hide') {
            containerClass += ' collapse';
        } else {
            containerClass += ' expanded';
        }

        return containerClass;
    };

    const expandPaletteEditor = () => {
        const content = document.getElementsByClassName('content')[0];

        // If current visibility is 'hide' then we are about to expand the editor -- add margin.
        if (visibility === 'hide') {
            content.style.marginBottom = "195px";
        } else {
            content.style.marginBottom = "0";
        }

        setVisibility(visibility === 'hide' ? 'show' : 'hide');
    };

    const getEditorTool = () => {
        let tool;
        if (editorMode === 'color')     {
            tool = (
                <ColorPicker 
                    visibility={visibility}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    selectedPaletteName={selectedPaletteName}
                    colorPalette={colorPalette}
                    setColorPalette={setColorPalette}
                />
            );
        } else {
            tool = (
                <ShadeEditor 
                    selectedPaletteName={selectedPaletteName}
                    hslResetCounter={hslResetCounter}
                />
            );
        }

        return tool;
    };

    return (
        <div className={getContainerClass()}>
            <div id="palette-editor">
                <div className="editor-header">
                    <div className="header-left">
                        <div className="header-title">
                            {/* TODO: Let's throw a cool icon here : ) */}
                            Palette Editor
                        </div>
                    </div>
                    <div className="header-right">
                        {/* TODO: Change arrow on hide button to up arrow when it's a "show" button */}
                        <div 
                            className="btn btn-sm btn-editor-control"
                            tabIndex="1"
                            onClick={expandPaletteEditor}
                        >
                            {visibility == 'hide' ? 'Show' : 'Hide'}
                        </div>
                    </div>
                </div>
                <div className={getBodyClass()}>
                    <div className="editor-section">
                        <SubPaletteSelector 
                            subPaletteNames={subPaletteNames}
                            selectedPaletteName={selectedPaletteName}
                            setSelectedPaletteName={setSelectedPaletteName}
                            resetSelectedSubPalette={resetSelectedSubPalette}
                            colorPalette={colorPalette}
                        />
                    </div>
                    <div className="editor-section">
                        <PaletteViewer
                            selectedPaletteName={selectedPaletteName}
                            setSelectedColor={setSelectedColor}
                            resetSelectedColor={resetSelectedColor}
                            editorMode={editorMode}
                            setEditorMode={setEditorMode}
                        />
                    </div>
                    <div className="editor-section">
                        <div className="palette-picker">
                            {getEditorTool()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaletteEditor;
