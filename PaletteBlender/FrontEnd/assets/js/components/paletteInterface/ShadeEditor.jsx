import React from "react";

export default function ShadeEditor() {
    return (
        <div className="shade-editor">
            <div className="hsl-editor">
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-label">
                            <label htmlFor="hue">Hue</label>
                        </div>
                        <div className="hsl-input">
                            <input type="range" id="hue" name="hue" min="0" max="360" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-label">
                            <label htmlFor="saturation">Saturation</label>
                        </div>
                        <div className="hsl-input">
                            <input type="range" id="saturation" name="saturation" min="0" max="100" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-label">
                            <label htmlFor="lightness">Lightness</label>
                        </div>
                        <div className="hsl-input">
                            <input type="range" id="lightness" name="lightness" min="0" max="100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
