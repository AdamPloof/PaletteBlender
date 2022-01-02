import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';

import { basePalette } from './basePalette';
import { PalletteProvider } from './PaletteContext';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';
import PaletteEditor from './paletteInterface/PaletteEditor';

const bgColor = basePalette.greys[8].color;

function App() {
    document.body.style.backgroundColor = bgColor;
    
    return (
        <PalletteProvider>
            <SearchBar />
            <Navbar />
            <SubNav />
            <BreadCrumbNav />
            <ContentContainer />
            <PaletteEditor />
        </PalletteProvider>
    );
};

export { bgColor };
export default App;
