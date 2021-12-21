import React, { useState } from 'react';
import { basePalette } from '../basePalette';

import ColorPicker from './ColorPicker';

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

    return (
        <div className={getPaletteSelectorClass()}>
            <div className="selector-input">
                <label htmlFor="palette-select">Select Sub-Palette</label>
                <select name="palette-select" id="palette-select">
                    <option value="test1">Primary</option>
                    <option value="test2">Secondary</option>
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
    const makeColorGrid = () => {
        return props.selectedSubPalette.map(color => (
            <div key={color.name} className="color-grid-item" style={{backgroundColor: color.color}}>
                {/* {color.name} */}
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

    return (
        <div className={getPaletteViewerClass()}>
            <div className="viewer-section-top">
                <div className="color-info">
                    <div className="info-title">
                        <h2 className='color-info-title'>Primary</h2>

                    </div>
                    <div className="selection-info">
                        <div className="selection-info-item">
                            <strong className='color-info-label'>Selected color: </strong> primary-dark
                        </div>
                        <div className="selection-info-item">
                            <strong className="color-info-label">HEX: </strong> #a3af3a
                        </div>
                    </div>
                </div>
                <div className="color-options">
                    {/* <div className="btn-btn-info"></div> */}
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
    const [visibility, setVisibility] = useState('hide');
    const [selectedSubPalette, setSelectedSubPalette] = useState(basePalette.primary);

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
                            selectedSubPalette={setSelectedSubPalette}
                        />
                    </div>
                    <div className="editor-section">
                        <PaletteViewer
                            visibility={visibility}
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
