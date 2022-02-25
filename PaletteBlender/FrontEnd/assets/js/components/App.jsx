import React, { useContext, useState } from 'react';

import { PalletteProvider, PaletteContext } from './PaletteContext';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';
import Sidebar from './content/Sidebar';
import PaletteEditor from './paletteInterface/PaletteEditor';
import Toolbox from './paletteInterface/Toolbox';

const ThemedContent = () => {
    const [ colorPalette ] = useContext(PaletteContext);

    const bgColor = colorPalette.greys[8].color;
    document.body.style.backgroundColor = bgColor;

    return (
        <React.Fragment>
            <SearchBar colorPalette={colorPalette} />
            <Navbar colorPalette={colorPalette} />
            <SubNav colorPalette={colorPalette} />
            <BreadCrumbNav colorPalette={colorPalette} />
            <div className="content-wrapper">
                <ContentContainer colorPalette={colorPalette} />
                <Sidebar colorPalette={colorPalette} />
            </div>
        </React.Fragment>
    );
}

function App() {
    const [ showToolbox, setShowToolbox ] = useState(false);

    return (
        <PalletteProvider>
            <ThemedContent />
            <PaletteEditor setShowToolbox={setShowToolbox} />
            <Toolbox showToolbox={showToolbox} setShowToolbox={setShowToolbox} />
        </PalletteProvider>
    );
};

export default App;
