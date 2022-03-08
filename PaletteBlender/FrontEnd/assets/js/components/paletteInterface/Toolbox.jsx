import React, { useContext, useEffect, useState } from "react";
import { PaletteContext } from "../PaletteContext";
import { usePopper } from 'react-popper';
import { popper } from "@popperjs/core";

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

    const [ tooltipVisible, setTooltipVisible ] = useState(false);
    const [ tooltipMsg, setTooltipMsg ] = useState('Copy CSS to clipboard');
    const [ copyBtn, setCopyBtn ] = useState(null);
    const [ popperElement, setPopperElement ] = useState(null);
    const [ arrowElement, setArrowElement ] = useState(null);
    const { styles, attributes, update } = usePopper(copyBtn, popperElement, {
        placement: 'top',
        modifiers: [
            {
                name: 'arrow', 
                options: {
                    element: arrowElement,
                }
            },
            {
                name: 'offset', 
                options: {
                    offset: [0, 8]
                }
            },

        ],
    });

    const showTooltip = () => {
        setTooltipVisible(true);
        update();
    };

    const hideTooltip = () => {
        setTooltipVisible(false);
        update();
    };

    const hideToolbox = () => {
        props.toolboxModal.current.classList.remove('show');

        if (!props.toolboxModal.current.classList.contains('hide')) {
            props.toolboxModal.current.classList.add('hide');
        }
    };

    const copyCss = async () => {
        const css = props.toolboxModal.current.querySelector('.stylesheet-output').querySelector('code').textContent;
        const copyStatus = await copyCssToClipboard(css);

        // Flash a Copied message for a couple seconds after copying.
        // TOOD: Display couldn't copy message if the copy status returns a failure
        setTooltipMsg('Copied!');
        setTooltipVisible(true);
        update();
        setTimeout(() => {
            setTooltipVisible(false);
            setTooltipMsg('Copy CSS to clipboard');
        }, 1500);
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
                            <div className="btn btn-sm btn-info" 
                                onClick={copyCss}
                                ref={setCopyBtn}
                                onMouseEnter={showTooltip}
                                onFocus={showTooltip}
                                onMouseLeave={hideTooltip}
                                onBlur={hideTooltip}
                            >
                                Copy
                            </div>
                            <div className={tooltipVisible ? "tooltip show" : "tooltip"} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                                {tooltipMsg}
                                <div className="tooltip-arrow" ref={setArrowElement} style={styles.arrow} />
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
