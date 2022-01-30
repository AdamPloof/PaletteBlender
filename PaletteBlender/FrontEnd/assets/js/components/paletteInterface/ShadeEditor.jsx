import React from "react";

export default function ShadeEditor() {
    return (
        <div className="shade-editor">
            <div className="hsl-editor">
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="hue">Hue:&nbsp;</label>
                            <div className="hsl-input-value">24</div>
                        </div>
                        <div className="hsl-input">
                            <input type="range" id="hue" name="hue" min="0" max="360" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="saturation">Saturation:&nbsp;</label>
                            <div className="hsl-input-value">120</div>
                        </div>
                        <div className="hsl-input">
                            <input type="range" id="saturation" name="saturation" min="0" max="100" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="lightness">Lightness:&nbsp;</label>
                            <div className="hsl-input-value">45</div>
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
