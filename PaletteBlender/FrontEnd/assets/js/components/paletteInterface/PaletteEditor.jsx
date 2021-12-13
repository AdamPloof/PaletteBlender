import React, { useState } from 'react';

import ColorPicker from './ColorPicker';

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
                        <div className="palette-selector">

                        </div>
                    </div>
                    <div className="editor-section">
                        <div className="palette-viewer">

                        </div>
                    </div>
                    <div className="editor-section">
                        <div className="palette-picker">
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
