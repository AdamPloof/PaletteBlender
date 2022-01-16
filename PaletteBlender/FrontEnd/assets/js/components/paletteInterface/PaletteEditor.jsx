import React, { useState, useContext, useEffect } from 'react';
import { basePalette } from '../basePalette';

import { PaletteContext } from '../PaletteContext';
import ColorPicker from './ColorPicker';

const COLOR_WHITE = '#fff';

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
    const getPaletteSelectorClass = () => {
        let pickerClass = "palette-selector";
        if (props.visibility === 'hide') {
            pickerClass += ' collapse';
        } else {
            pickerClass += ' expanded';
        }

        return pickerClass;
    }

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
        <div className={getPaletteSelectorClass()}>
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
                    <div className="btn btn-info">View CSS</div>
                    <div className="btn btn-light">Reset</div>
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
                                props.setSelectedColor(COLOR_WHITE);
                            } else {
                                colorObj.selected = true;
                                props.setSelectedColor(colorObj.color);
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

    const getPaletteViewerClass = () => {
        let pickerClass = "palette-viewer";
        if (props.visibility === 'hide') {
            pickerClass += ' collapse';
        } else {
            pickerClass += ' expanded';
        }

        return pickerClass;
    };

    const toggleColorLock = () => {
        const subPalette = colorPalette[props.selectedPaletteName].map(colorObj => {
            if (colorObj.selected === true) {
                colorObj.locked = colorObj.locked === false;
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
    
    return (
        <div className={getPaletteViewerClass()}>
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
                    <div className="btn btn-outline-info">Fill Shades</div>
                    <div className="btn btn-outline-info">Reset Color</div>
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
    const [selectedColor, setSelectedColor] = useState(COLOR_WHITE);

    useEffect(() => {
        deselectAllColors();
        setSelectedColor(COLOR_WHITE);
    }, [selectedPaletteName]);

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

    const getPalettePickerClass = () => {
        let pickerClass = "palette-picker";
        if (visibility === 'hide') {
            pickerClass += ' collapse';
        } else {
            pickerClass += ' expanded';
        }

        return pickerClass;
    }

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

    return (
        <div className="footer-container">
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
                            visibility={visibility}
                            subPaletteNames={subPaletteNames}
                            selectedPaletteName={selectedPaletteName}
                            setSelectedPaletteName={setSelectedPaletteName}
                            colorPalette={colorPalette}
                        />
                    </div>
                    <div className="editor-section">
                        <PaletteViewer
                            visibility={visibility}
                            selectedPaletteName={selectedPaletteName}
                            setSelectedColor={setSelectedColor}
                        />
                    </div>
                    <div className="editor-section">
                        <div className={getPalettePickerClass()}>
                            <ColorPicker 
                                visibility={visibility}
                                selectedColor={selectedColor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaletteEditor;
