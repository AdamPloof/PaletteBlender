import React, { Component } from 'react';
import iro from '@jaames/iro';

import { basePalette } from '../basePalette';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.colorPicker = null;
    }

    componentDidMount() {
        const { props } = this;
        this.colorPicker = new iro.ColorPicker(document.getElementById('color-picker'), {
            width: 130,
            borderColor: basePalette.greys[4].color
        }); 
    }

    render() { 
        return (
            <div id="color-picker"></div>
        );
    }
}
 
export default ColorPicker;