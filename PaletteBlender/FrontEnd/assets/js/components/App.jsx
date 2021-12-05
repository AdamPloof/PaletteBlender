import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';

import { basePalette } from './basePalette';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';
import PaletteEditor from './paletteInterface/PaletteEditor';

const bgColor = basePalette.greys[8].color;

const useThemeStyle = createUseStyles({
    linkStd: {
        color: basePalette.primary[3].color,
        '&:hover': {color: basePalette.primary[2].color},
    },
});

const ThemeContext = React.createContext({});

function App() {
    document.body.style.backgroundColor = bgColor;
    const theme = useThemeStyle();
    
    return (
        <ThemeContext.Provider value={theme}>
            <SearchBar />
            <Navbar />
            <SubNav />
            <BreadCrumbNav />
            <ContentContainer />
            <PaletteEditor />
        </ThemeContext.Provider>
    );
};

export { ThemeContext, bgColor };
export default App;
