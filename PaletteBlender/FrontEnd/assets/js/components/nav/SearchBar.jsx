import React, { Component } from 'react';
import { basePalette } from '../basePalette';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarMain: {
        backgroundColor: basePalette.primary[0].color,
        borderBottomColor: basePalette.greys[3].color,
    },

    navLinkMain: {
        color: basePalette.primary[6].color,
        '&:hover': {color: basePalette.primary[5].color},
    },
    navLogoMain: {
        color: basePalette.primary[6].color,
    }
});

function SearchBar() {
    const classes = useStyles();

    return (
        <div className="nav-container">
            <div className={"navbar nav-first " + classes.navbarMain}>
                <div className="nav-left">
                    
                </div>
                <div className="nav-center">
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <li>
                                <a className={"nav-link " + classes.navLinkMain} href="#">Logout</a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SearchBar;
