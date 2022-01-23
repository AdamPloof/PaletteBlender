import React, { Component } from 'react';
import iro from '@jaames/iro';

import { basePalette } from '../basePalette';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgbString: null,
            hexString: null,
        };

        this.colorPicker = null;
    }

    componentDidMount() {
        this.colorPicker = new iro.ColorPicker(document.getElementById('color-picker'), {
            // Setting initial color to white for now, should probably set it to whatever primary is though
            color: this.props.selectedColor.color,
            width: 130,
            borderColor: basePalette.greys[4].color
        }); 

        this.colorPicker.on(['color:init', 'color:change'], (color) => {
            this.updateColor(color);
        });

        // NOTE: if color updating is slow or clunky on input:change we can try input:end to reduce the amount of updates.
        this.colorPicker.on('input:change', (color) => {
            if (this.props.selectedColor.locked === true) {
                return;
            }
            
            const subPalette = this.props.colorPalette[this.props.selectedPaletteName].map(colorObj => {
                if (colorObj.name === this.props.selectedColor.name) {
                    colorObj.color = color.hexString;
                    this.props.setSelectedColor({...colorObj});
                }

                return colorObj;
            });

            const updatedPalette = {...this.props.colorPalette};
            updatedPalette[this.props.selectedPaletteName] = subPalette;
            this.props.setColorPalette(updatedPalette);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedColor.name !== prevProps.selectedColor.name) {
            this.colorPicker.color.hexString = this.props.selectedColor.color;
        }

        if (this.props.selectedColor.color !== prevProps.selectedColor.color) {
            this.colorPicker.color.hexString = this.props.selectedColor.color;
        }
    }

    updateColor(color) {
        this.setState({
            hexString: color.hexString,
            rgbString: color.rgbString,
        });
    }

    render() { 
        return (
            <div className="color-picker-widget">
                <div className="color-selection-info">
                    <div id="color-selection-blot" style={{backgroundColor: this.state.hexString}}></div>
                    <div className="color-values-container">
                        <div className="color-value-display">
                            <strong className="color-value-label">HEX:</strong> {this.state.hexString}
                        </div>
                        <div className="color-value-display">
                        <strong className="color-value-label">RGB:</strong> {this.state.rgbString}
                        </div>
                    </div>
                </div>
                <div id="color-picker" className={this.props.visibility == "show" ? "expanded" : "collapse"}></div>
            </div>
        );
    }
}
 
export default ColorPicker;
