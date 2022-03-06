import React, { useEffect, useRef } from "react";

export default function Toolbox(props) {
    const hideToolbox = () => {
        props.toolboxModal.current.classList.remove('show');

        if (!props.toolboxModal.current.classList.contains('hide')) {
            props.toolboxModal.current.classList.add('hide');
        }
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
                        <p>Modal test</p>
                    </div>
                    <div className="modal-footer">
                        <div className="btn btn-dark" onClick={hideToolbox}>Close</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
