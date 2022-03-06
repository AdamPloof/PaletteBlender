import React, { useContext } from "react";
import { PaletteContext } from "../PaletteContext";

function formatColorName(colorName) {
    let formattedColorName = '';
    for (let i = 0; i < colorName.length; i++){
        if (colorName[i] === colorName[i].toUpperCase()) {
            formattedColorName += ('-' + colorName[i].toLowerCase());
        } else {
            formattedColorName += colorName[i];
        }
    }

    return formattedColorName;
}

function convertPaletteToCSS(colorPalette) {
    let css = ':root {\n';
    for (const [ subPaletteName, colors] of Object.entries(colorPalette)) {
        css += `\t// ${subPaletteName}\n`;
        for (const color of colors) {
            css += `\t--${formatColorName(color.name)}: ${color.color};`;

            if (color != color[colors.length - 1]) {
                css += '\n';
            }
        }

        if (subPaletteName !== Object.keys(colorPalette)[Object.keys(colorPalette).length - 1]) {
            css += '\n';
        }
    }
    css += '}\n';

    return css;
}

export default function Toolbox(props) {
    const [ colorPalette ] = useContext(PaletteContext);

    const hideToolbox = () => {
        props.toolboxModal.current.classList.remove('show');

        if (!props.toolboxModal.current.classList.contains('hide')) {
            props.toolboxModal.current.classList.add('hide');
        }
    };

    const getOutputSheet = () => {
        return (
            <div className="stylesheet-output">
                <pre>
                    <code>
                        {convertPaletteToCSS(colorPalette)}
                    </code>
                </pre>

            </div>
        );
    };

    return (
        <div id="toolbox-modal" className="modal hide" ref={props.toolboxModal}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title"><h3>CSS Toolbox</h3></div>
                        <span className="modal-close" onClick={hideToolbox}>&times;</span>
                    </div>
                    <div className="modal-body">
                        {getOutputSheet()}
                    </div>
                    <div className="modal-footer">
                        <div className="btn btn-dark" onClick={hideToolbox}>Close</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
