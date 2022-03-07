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

async function copyCssToClipboard(css) {
    let copyStatus = await navigator.clipboard.writeText(css).then(() => {
        return true;
    }, () => {
        return false;
    });
    
    return copyStatus;
}

export default function Toolbox(props) {
    const [ colorPalette ] = useContext(PaletteContext);

    const hideToolbox = () => {
        props.toolboxModal.current.classList.remove('show');

        if (!props.toolboxModal.current.classList.contains('hide')) {
            props.toolboxModal.current.classList.add('hide');
        }
    };

    const copyCss = async () => {
        const css = props.toolboxModal.current.querySelector('.stylesheet-output').querySelector('code').textContent;
        const copyStatus = await copyCssToClipboard(css);
        console.log(copyStatus);
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
                        <div className="toolbox-options">
                            <div className="btn btn-sm btn-info" onClick={copyCss}>
                                {/* Manually postioning the text and the icon is annoying, but the icon seems to offset the text and vice versa and so just going with this for now */}
                                <span className="material-icon-outline" style={{position: "relative", top: "3px"}}>content_copy</span><span style={{position: "relative", top: "-3px"}}>Copy</span>
                            </div>
                        </div>
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
