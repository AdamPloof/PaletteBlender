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
        const { props } = this;
        this.colorPicker = new iro.ColorPicker(document.getElementById('color-picker'), {
            // Setting initial color to white for now, should probably set it to whatever primary is though
            color: "#fff",
            width: 130,
            borderColor: basePalette.greys[4].color
        }); 

        this.colorPicker.on(['color:init', 'color:change'], (color) => {
            this.updateColor(color);
        });
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
