import React, { Component, createRef } from 'react';
import iro from '@jaames/iro';

import { basePalette } from '../basePalette';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgbString: 'rgb(255, 255, 255)',
            hexString: '#ffffff',
            widgetType: 'wheel',
        };

        this.colorPickerContainer = React.createRef();
        this.colorPicker = null;
        this.setWidgetType = this.setWidgetType.bind(this);
        this.manuallyUpdateColor = this.manuallyUpdateColor.bind(this);
    }

    componentDidMount() {
        this.setColorPicker();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedColor.name !== prevProps.selectedColor.name) {
            this.colorPicker.color.hexString = this.props.selectedColor.color;
        }

        if (this.props.selectedColor.color !== prevProps.selectedColor.color) {
            this.colorPicker.color.hexString = this.props.selectedColor.color;
        }

        if (this.state.widgetType !== prevState.widgetType) {
            this.removeColorPicker();
            this.setColorPicker();
        }
    }

    removeColorPicker() {
        while (this.colorPickerContainer.current.lastChild) {
            this.colorPickerContainer.current.removeChild(this.colorPickerContainer.current.lastChild);
        }
    }

    setColorPicker() {
        this.colorPicker = new iro.ColorPicker(this.colorPickerContainer.current, {
            // Setting initial color to white for now, should probably set it to whatever primary is though
            color: this.props.selectedColor.color,
            width: this.state.widgetType === 'hsv' ? 200 : 130,
            borderColor: basePalette.greys[4].color,
            layout: this.getColorPickerWidget(),
        }); 

        this.colorPicker.on(['color:init', 'color:change'], (color) => {
            this.updateColor(color);
        });

        // NOTE: if color updating is slow or clunky on input:change we can try input:end to reduce the amount of updates.
        this.colorPicker.on('input:change', (color) => {
            this.updateSelectedColor(color.hexString);
        });
    }
    
    updateSelectedColor(hexString) {
        if (this.props.selectedColor.locked === true) {
            return;
        }
        
        const subPalette = this.props.colorPalette[this.props.selectedPaletteName].map(colorObj => {
            if (colorObj.name === this.props.selectedColor.name) {
                colorObj.color = hexString;
                this.props.setSelectedColor({...colorObj});
            }
    
            return colorObj;
        });
    
        const updatedPalette = {...this.props.colorPalette};
        updatedPalette[this.props.selectedPaletteName] = subPalette;
        this.props.setColorPalette(updatedPalette);
    }

    setWidgetType(e) {
        this.setState({
            widgetType: e.target.value,
        });
    }

    getColorPickerWidget() {
        let widget;
        switch (this.state.widgetType) {
            case 'wheel':
                widget = [
                    {
                        component: iro.ui.Wheel,
                        options: {}
                    },
                    { 
                        component: iro.ui.Slider,
                        options: {
                          sliderType: 'value'
                        }
                    },
                ];
                break;
            case 'box':
                widget = [
                    {
                        component: iro.ui.Box,
                        options: {}
                    },
                    { 
                        component: iro.ui.Slider,
                        options: {
                          sliderType: 'value'
                        }
                    },
                ];
                break;
            case 'hsv':
                widget = [
                    { 
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'hue'
                        }
                    },
                    { 
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'saturation'
                        }
                    },
                    { 
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'value'
                        }
                    },
                ];
                break;
            default:
                widget = widget = [
                    {
                        component: iro.ui.Wheel,
                        options: {}
                    },
                    { 
                        component: iro.ui.Slider,
                        options: {
                          sliderType: 'value'
                        }
                    },
                ];
        }

        return widget;
    }

    manuallyUpdateColor(e) {
        let regex;
        let hexString;
        if (e.target.id === 'hexInput') {
            hexString = e.target.value
            this.setState({ hexString });
            // Hex string pattern
            regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        } else {
            // Since updateSelectedColor only takes a hex string, we need to convert the rgb value to hex
            hexString = new iro.Color(e.target.value).hexString;
            this.setState({
                rgbString: e.target.value,
            });
            // RGB string pattern
            regex = /^(rgb\()([0-9]{1,3}, ){2}([0-9]{1,3}\))$/;
        }

        if (null !== e.target.value.match(regex)) {
            this.updateSelectedColor(hexString);
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
                    <div className="picker-options">
                        <div className="form-group">
                            <label htmlFor="pickerType">Widget Type</label>
                            <select name="pickerType" id="pickerType" value={this.state.widgetType} onChange={this.setWidgetType}>
                                <option value="wheel">Wheel</option>
                                <option value="box">Box</option>
                                <option value="hsv">HSV</option>
                            </select>
                        </div>
                        {/* TODO: this should use selectedColor or default instead of the hex string */}
                        <div id="color-selection-blot" style={{backgroundColor: this.state.hexString}}></div>
                    </div>
                    <div className="color-values-container">
                        <div className="color-value-display">
                            {/* <strong className="color-value-label">HEX:</strong> {this.state.hexString} */}
                            <div className="form-group form-inline color-picker-form">
                                <label htmlFor="hexInput">HEX:</label>
                                <input 
                                    id="hexInput"
                                    name="hexInput"
                                    type="text"
                                    value={this.state.hexString}
                                    onChange={this.manuallyUpdateColor}
                                />
                            </div>
                        </div>
                        <div className="color-value-display">
                        {/* <strong className="color-value-label">RGB:</strong> {this.state.rgbString} */}
                            <div className="form-group form-inline color-picker-form">
                                <label htmlFor="rgbInput">RGB:</label>
                                <input 
                                    id="rgbInput"
                                    name="rgbInput"
                                    type="text"
                                    value={this.state.rgbString}
                                    onChange={this.manuallyUpdateColor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="color-picker" ref={this.colorPickerContainer} className={this.props.visibility == "show" ? "expanded" : "collapse"}></div>
            </div>
        );
    }
}
 
export default ColorPicker;
