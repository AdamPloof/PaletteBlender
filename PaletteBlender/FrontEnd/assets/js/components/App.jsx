import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';

import { basePalette } from './basePalette';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';
import ContentContainer from './content/ContentContainer';

const useLinkStyle = createUseStyles({
    linkStd: {
        color: basePalette.primary[3].color,
        '&:hover': {color: basePalette.primary[2].color},
    },
});

function App() {
    document.body.style.backgroundColor = basePalette.greys[8].color;

    return (
        <React.Fragment>
            <SearchBar />
            <Navbar />
            <SubNav />
            <BreadCrumbNav />
            <ContentContainer useLinkStyle={useLinkStyle} />
        </React.Fragment>
    );
};
 
export default App;
