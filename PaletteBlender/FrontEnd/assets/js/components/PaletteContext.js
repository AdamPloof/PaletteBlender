import React, { useState, createContext} from "react";
import { basePalette } from "./basePalette";

export const PaletteContext = createContext();

export const PalletteProvider = (props) => {
    // Need a deep copy of basePalette so that we don't end up updating nested objects within it.
    // Supposedly this is a slow way of doing a deep clone, so if we really wanted to we could make a manual clone procedure.
    // Or use structuredClone once upgraded to Node 17+
    const deepCopyBasePalette = JSON.parse(JSON.stringify(basePalette));
    const [colorPalette, setColorPalette] = useState(deepCopyBasePalette);

    return (
        <PaletteContext.Provider value={[colorPalette, setColorPalette]}>
            {props.children}
        </PaletteContext.Provider>
    );
}
