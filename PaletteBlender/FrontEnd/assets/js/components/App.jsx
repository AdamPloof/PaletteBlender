import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';

import { basePalette } from './basePalette';

import SearchBar from './nav/SearchBar';
import Navbar from './nav/Navbar';
import SubNav from './nav/SubNav';
import BreadCrumbNav from './nav/BreadCrumbNav';

const useStyles = createUseStyles({
    content: {
        width: '100%',
    },
});

function App() {
    const classes = useStyles();
    document.body.style.backgroundColor = basePalette.greys[8].color;

    return (
        <React.Fragment>
            <SearchBar />
            <Navbar />
            <SubNav />
            <BreadCrumbNav />
            <div className={classes.content}>
                <div className="container">
                    <h1>Hello Jimbo.</h1>
                </div>
            </div>
        </React.Fragment>
    );
};
 
export default App;
