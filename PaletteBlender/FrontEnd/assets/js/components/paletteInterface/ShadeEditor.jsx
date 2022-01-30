import React, { useState, useContext, useEffect } from "react";
import iro from '@jaames/iro';

import { PaletteContext } from "../PaletteContext";

// Take the average hue and saturation for the selected palette
// Only count colors that aren't locked.
function getAverageHueAndSaturation(palette) {
    const unlockedColors = palette.map(color => {
        if (!color.locked) {
            return color.color;
        }
    });

    const avgHue = unlockedColors.reduce((prevVal, currentVal) => {
        const currentColor = new iro.Color(currentVal);
        return currentColor.hsl.h + prevVal;
    }, 0) / unlockedColors.length;

    const avgSaturation = unlockedColors.reduce((prevVal, currentVal) => {
        const currentColor = new iro.Color(currentVal);
        return currentColor.hsl.s + prevVal;
    }, 0) / unlockedColors.length;

    const avgLightness = unlockedColors.reduce((prevVal, currentVal) => {
        const currentColor = new iro.Color(currentVal);
        return currentColor.hsl.l + prevVal;
    }, 0) / unlockedColors.length;

    return [Math.round(avgHue), Math.round(avgSaturation), Math.round(avgLightness)];
}

export default function ShadeEditor(props) {
    const [colorPalette, setColorPalette] = useContext(PaletteContext);
    const selectedPalette = colorPalette[props.selectedPaletteName];

    const [avgHue, avgSat, avgLight] = getAverageHueAndSaturation(selectedPalette);

    const [hue, setHue] = useState(avgHue);
    const [saturation, setSaturation] = useState(avgSat);
    const [lightness, setLightness] = useState(avgLight);

    useEffect(() => {
        const [avgHue, avgSat, avgLight] = getAverageHueAndSaturation(colorPalette[props.selectedPaletteName]);
        setHue(avgHue);
        setSaturation(avgSat);
        setLightness(avgLight);
    }, [props.selectedPaletteName, colorPalette]);

    return (
        <div className="shade-editor">
            <div className="hsl-editor">
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="hue">Hue:&nbsp;</label>
                            <div className="hsl-input-value">{hue}</div>
                        </div>
                        <div className="hsl-input">
                            <input
                                type="range"
                                id="hue"
                                name="hue"
                                min="0"
                                max="360"
                                value={hue}
                                onChange={(e) => {
                                    setHue(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="saturation">Saturation:&nbsp;</label>
                            <div className="hsl-input-value">{saturation}</div>
                        </div>
                        <div className="hsl-input">
                            <input
                                type="range"
                                id="saturation"
                                name="saturation"
                                min="0"
                                max="100"
                                value={saturation}
                                onChange={(e) => {
                                    setSaturation(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group form-inline">
                        <div className="hsl-slider-info">
                            <label htmlFor="lightness">Lightness:&nbsp;</label>
                            <div className="hsl-input-value">{lightness}</div>
                        </div>
                        <div className="hsl-input">
                            <input
                                type="range"
                                id="lightness"
                                name="lightness"
                                min="0"
                                max="100"
                                value={lightness}
                                onChange={(e) => {
                                    setLightness(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
