import React, { useEffect } from "react";

export default function Toolbox(props) {
    useEffect(() => {
        if (props.showToolbox) {
            if (!document.body.classList.contains('noscroll')) {
                document.body.classList.add('noscroll');
            }
        } else {
            document.body.classList.remove('noscroll');
        }
    }, [props.showToolbox]);

    return (
        <div id="toolbox-modal" className={props.showToolbox ? "modal show" : "modal"}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-close">&times;</span>
                </div>
                <div className="modal-body">
                    <p>Modal test</p>
                </div>
            </div>
        </div>
    );
};
