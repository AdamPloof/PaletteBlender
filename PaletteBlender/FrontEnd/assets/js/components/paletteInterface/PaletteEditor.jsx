import React, { useState, useContext } from 'react';
import { basePalette } from '../basePalette';

import { PaletteContext } from '../PaletteContext';
import ColorPicker from './ColorPicker';

function capitalizeWord(word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1);
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
                        props.setSelectedSubPalette([...props.colorPalette[selectedPaletteName]]);
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
    const [selectedColor, setSelectedColor] = useState(null);
    const [lockedColors, setLockedColors] = useState([]);

    const getLockIcon = (color) => {
        let lockIcon = null;
        if (lockedColors.includes(color)) {
            lockIcon = (
                <i className='material-icon-outline'>lock</i>
            );
        }

        return lockIcon;
    };

    const getGridItemClass = (color) => {
        let gridItemClass = 'color-grid-item';
        if (color == selectedColor) {
            gridItemClass += ' selected';
        }

        if (color.includes('Light')) {
            gridItemClass += ' grid-item-light';
        }

        return gridItemClass;
    };

    const makeColorGrid = () => {
        return props.selectedSubPalette.map(color => (
            <div 
                key={color.name}
                id={'grid_' + color.name}
                className={getGridItemClass(color.name)}
                style={{backgroundColor: color.color}}
                onClick={(e) => {
                    const color = e.target.id.replace('grid_', '');
                    setSelectedColor(color);
                }}
            >
                {/* {color.name} */}
                {getLockIcon(color.name)}
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

    const addLockedColor = () => {
        setLockedColors([...lockedColors, selectedColor]);
    };

    const removeLockedColor = () => {
        setLockedColors(lockedColors.filter(color => color != selectedColor));
    };

    return (
        <div className={getPaletteViewerClass()}>
            <div className="viewer-section-top">
                <div className="color-info">
                    <div className="info-title">
                        <h2 className='color-info-title'>{capitalizeWord(props.selectedPaletteName)}</h2>

                    </div>
                    <div className="selection-info">
                        <div className="selection-info-item">
                            <strong className='color-info-label'>Selected: </strong> primary-dark
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
                            } else if (lockedColors.includes(selectedColor)) {
                                removeLockedColor(selectedColor);
                            } else {
                                addLockedColor(selectedColor);
                            }
                        }}
                    >
                        <i className='material-icon-outline'>{lockedColors.includes(selectedColor) ? 'lock' : 'lock_open'}</i>
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
    const [ selectedSubPalette, setSelectedSubPalette ] = useState(colorPalette.primary);

    const subPaletteNames = Object.keys(colorPalette);
    const [ selectedPaletteName, setSelectedPaletteName ] = useState(subPaletteNames[0]);

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
                            setSelectedSubPalette={setSelectedSubPalette}
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
                            selectedSubPalette={selectedSubPalette}
                        />
                    </div>
                    <div className="editor-section">
                        <div className={getPalettePickerClass()}>
                            <ColorPicker 
                                visibility={visibility}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaletteEditor;
