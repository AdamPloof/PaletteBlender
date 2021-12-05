import React, { Component } from 'react';
import iro from '@jaames/iro';

function PaletteEditor() {
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
                        <div className="btn btn-sm btn-editor-control">
                            Hide
                        </div>
                    </div>
                </div>
                <div className="editor-body">
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
                            <div id="iro-picker"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaletteEditor;
