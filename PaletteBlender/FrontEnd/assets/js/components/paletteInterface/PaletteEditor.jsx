import React, { useState } from 'react';

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

function PaletteEditor() {
    const [visibility, setVisibility] = useState('hide');

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
                        />
                    </div>
                    <div className="editor-section">
                        <div className="palette-viewer">

                        </div>
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
