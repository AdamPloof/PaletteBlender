import React, { Component, createRef } from 'react';
import iro from '@jaames/iro';

import { basePalette } from '../basePalette';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgbString: null,
            hexString: null,
            widgetType: 'wheel',
        };

        this.colorPickerContainer = React.createRef();
        this.colorPicker = null;
        this.setWidgetType = this.setWidgetType.bind(this);
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
                        <div id="color-selection-blot" style={{backgroundColor: this.state.hexString}}></div>
                    </div>
                    <div className="color-values-container">
                        <div className="color-value-display">
                            <strong className="color-value-label">HEX:</strong> {this.state.hexString}
                        </div>
                        <div className="color-value-display">
                        <strong className="color-value-label">RGB:</strong> {this.state.rgbString}
                        </div>
                    </div>
                </div>
                <div id="color-picker" ref={this.colorPickerContainer} className={this.props.visibility == "show" ? "expanded" : "collapse"}></div>
            </div>
        );
    }
}
 
export default ColorPicker;
