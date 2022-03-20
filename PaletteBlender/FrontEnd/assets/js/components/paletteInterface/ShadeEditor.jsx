import React, { useState, useContext, useEffect } from "react";
import iro from '@jaames/iro';

import { PaletteContext } from "../PaletteContext";

const MAX_HSL_VALUES = {h: 360, s: 100, l: 100};

// Take the average hue and saturation for the selected palette
// Only count colors that aren't locked.
function getAverageHueAndSaturation(palette) {
    let unlockedColors = palette.filter(color => {
        if (!color.locked) {
            return color.color;
        }
    });
    unlockedColors = unlockedColors.map(color => color.color);

    if (unlockedColors.length === 0) {
        return [180, 50, 50];
    }

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

// Create an iro color object from the current color, update the hsl property with the new value and convert back to hex string
function adjustColorHSL(color, baseColor, hslProp, percentChange) {
    const iroColor = new iro.Color(color.color);
    const hsl = {...iroColor.hsl};
    
    // Set the hsl property back to the starting point for the property being edited so that we change it relative to its starting value
    iroColor.set(baseColor.color);
    hsl[hslProp] = iroColor.hsl[hslProp];

    if (percentChange > 0) {
        hsl[hslProp] = Math.round(hsl[hslProp] + ((MAX_HSL_VALUES[hslProp] - hsl[hslProp]) * percentChange));
    } else {
        hsl[hslProp] = Math.round(hsl[hslProp] + (hsl[hslProp] * percentChange));
    }

    iroColor.set(hsl);

    const updatedColor = {...color};
    updatedColor.color = iroColor.hexString;

    return updatedColor;
};

export default function ShadeEditor(props) {
    const [colorPalette, setColorPalette] = useContext(PaletteContext);

    const [userHasModifiedHSL, setUserHasModifiedHSL] = useState(false);
    const [initialPalette, setInitialPalette] = useState(JSON.parse(JSON.stringify(colorPalette[props.selectedPaletteName])));
    const [startingHSL, setStartingHSL] = useState({h: 0, s: 0, l: 0});

    const [avgHue, avgSat, avgLight] = getAverageHueAndSaturation(colorPalette[props.selectedPaletteName]);
    const [hue, setHue] = useState(avgHue);
    const [saturation, setSaturation] = useState(avgSat);
    const [lightness, setLightness] = useState(avgLight);

    useEffect(() => {
        setSlidersToAverageHSL();
        setUserHasModifiedHSL(false);
        setInitialPalette(JSON.parse(JSON.stringify(colorPalette[props.selectedPaletteName])));
    }, [props.selectedPaletteName, props.hslResetCounter]);

    // TODO: In order to prevent unnecessary rerender, infinite loops, etc. We should only update the sliders to avg when either:
    // 2. a locked color status changed, 3. a color was reset, 4. entire sub palette reset
    // Most important is to update sliders avg on sub palette reset. The rest is probably overkill.
    useEffect(() => {
        if (!userHasModifiedHSL) {
            setSlidersToAverageHSL();
            setInitialPalette(JSON.parse(JSON.stringify(colorPalette[props.selectedPaletteName])));
        } else {
            updateSelectedColor();
        }
    }, [colorPalette]);

    const setSlidersToAverageHSL = () => {
        const [avgHue, avgSat, avgLight] = getAverageHueAndSaturation(colorPalette[props.selectedPaletteName]);
        setHue(avgHue);
        setSaturation(avgSat);
        setLightness(avgLight);

        setStartingHSL({
            h: avgHue,
            s: avgSat,
            l: avgLight,
        });
    };

    const beginUserEditing = () => {
        if (userHasModifiedHSL) {
            return;
        }

        setUserHasModifiedHSL(true);
        setInitialPalette(JSON.parse(JSON.stringify(colorPalette[props.selectedPaletteName])));
    };

    const updateSelectedColor = () => {
        if (!props.selectedColor) {
            return;
        }

        const updatedSelectedColor = colorPalette[props.selectedPaletteName].find(color => color.name === props.selectedColor.name);
        props.setSelectedColor(updatedSelectedColor);
    };

    const adjustPaletteHSL = (e) => {
        // Get HSL val for each color in palette
        let hslProp;
        switch (e.target.id) {
            case 'hue':
                hslProp = 'h';
                break;
            case 'saturation':
                hslProp = 's';
                break;
            case 'lightness':
                hslProp = 'l';
                break;
            default:
                console.log('HSL slider not adjusted!');
        }

        let percentChange;
        if (e.target.value > startingHSL[hslProp]) {
            // Value has increased
            percentChange = (e.target.value - startingHSL[hslProp]) / (MAX_HSL_VALUES[hslProp] - startingHSL[hslProp]);
        } else {
            // Value has decreased
            percentChange = ((startingHSL[hslProp] - e.target.value) / startingHSL[hslProp]) * -1;
        }

        const updatedSubpalette = colorPalette[props.selectedPaletteName].map(color => {
            if (color.locked === true) {
                return color;
            }

            const baseColor = initialPalette.find(c => c.name === color.name);
            return adjustColorHSL(color, baseColor, hslProp, percentChange);
        });
        
        const updatedPalette = {...colorPalette};
        updatedPalette[props.selectedPaletteName] = updatedSubpalette;

        setColorPalette(updatedPalette);
    };

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
                                    beginUserEditing();
                                    setHue(e.target.value)
                                    adjustPaletteHSL(e);
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
                                    beginUserEditing();
                                    setSaturation(e.target.value)
                                    adjustPaletteHSL(e);
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
                                    beginUserEditing();
                                    setLightness(e.target.value)
                                    adjustPaletteHSL(e);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
