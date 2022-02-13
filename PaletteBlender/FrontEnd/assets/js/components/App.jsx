import React, { useContext } from 'react';

import { PalletteProvider, PaletteContext } from './PaletteContext';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';
import Sidebar from './content/Sidebar';
import PaletteEditor from './paletteInterface/PaletteEditor';

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
    return (
        <PalletteProvider>
            <ThemedContent />
            <PaletteEditor />
        </PalletteProvider>
    );
};

export default App;
