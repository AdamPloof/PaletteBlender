import React, { useState, createContext} from "react";
import { basePalette } from "./basePalette";

export const PaletteContext = createContext();

export const PalletteProvider = (props) => {
    const [colorPalette, setColorPalette] = useState({...basePalette});

    return (
        <PaletteContext.Provider value={[colorPalette, setColorPalette]}>
            {props.children}
        </PaletteContext.Provider>
    );
}
