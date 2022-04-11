import React from "react";

export default function Documentation(props) {
    return (
        <div className="content doc-content">
            <h1>Palette Blender Docs</h1>
            <p>
            Palette Blender is a tool to help you quickly design color schemes for your project. As you edit the colors in your palette the changes are reflected in real time in the app itself so that you can get a sense of how your color scheme will work in an actual web site.
            </p>
            <p>
                Color palettes in Palette Blender follow the common pattern of being made up of a primary color (and sometimes a secondary color) along with a set grays and contextual colors to provide visual cues. To learn more about this approach, check out the guide section. 
            </p>
            <h2>The Palette Editor</h2>
            <p>
                The Palette Editor is where you can make changes to the color scheme as well as export the palette to CSS/SASS. To open it up, click the show/hide button in the bottom right corner.
            </p>
            <h3>Sub-Palette Selector</h3>
            <p>
                The left section of the Palette Editor is where you can select the sub-palette that you would like to edit. A sub-palette is a set of all shades of a given color.
            </p>
            <p>
                The Export CSS button will open up the CSS Toolbox where you can export the color palette as either CSS, SCSS, or SASS variables. Currently there's only the option for copying the code so that it can be pasted into your project. Exporting directly to a file is planned for a future version.
            </p>
            <p>
                The Reset button will reset all shades in the currently selected sub-palette back to the original values.
            </p>
            <h3>Color Selector</h3>
            <p>
                The middle section is the Color Selector and is used to make changes to a single color within the selected sub-palette.
            </p>
            <p>
                Locking a color prevents that color from being modified. This can be useful when you've set a shade in the sub-palette to a color you like, but then want to make broad stroke changes to the rest of the sub-palette without affecting that one color. To lock a color, select a color and click the lock icon. Unlock it by clicking the lock icon again.
            </p>
            <p>
                The undo button will reset the selected color to its original value.
            </p>
            <p>
                The explode button will take the selected color and extrapolate all of the other shades for the sub-palette. It is a great way to quickly build a set of shades from a single color that you like.
            </p>
            <p>
                The Shades button will toggle the Editor tools into shades mode. This allows you to adjust the hue, saturation and lightness of the entire sub-palette all at once. When you click the Shades button, the sliders will be set to the average HSL values of the selected sub-palette, excluding any locked colors. Adjusting the sliders will change the HSL value of each color proportionally.
            </p>
            <p>
                When in shades mode, clicking the Color button will toggle the editor back to the color picker widget which is used to modify the currently selected color.
            </p>
            <h3>Color Picker</h3>
            <p>
                The color picker provides a few useful widgets for editing the currently selected color. Use the dropdown to choose between the Wheel, Box, and HSV widgets. As you manipulate the color picker, the selected color will be updated in real time.
            </p>
            <p>
                Besides displaying the current HEX and RGB value of the selected color, you can also set the selected color to a specific value by entering a valid HEX or RGB value into the appropriate field.
            </p>
        </div>
    );
}