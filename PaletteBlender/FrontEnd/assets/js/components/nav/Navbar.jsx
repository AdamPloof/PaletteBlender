import React, { Component } from 'react';
import { basePalette } from '../basePalette';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarMain: {
        backgroundColor: basePalette.primary[1].color,
        borderBottomColor: basePalette.greys[4].color,
    },

    navLinkMain: {
        color: basePalette.primary[6].color,
        '&:hover': {color: basePalette.primary[5].color},
    },
    navLogoMain: {
        color: basePalette.primary[6].color,
    }
});

function Navbar() {
    const classes = useStyles();

    return (
        <div className="nav-container">
            <div className={"navbar nav-second " + classes.navbarMain}>
                <div className="nav-left">
                    <div className={"nav-logo " + classes.navLogoMain}>
                        ~ PaletteBlender ~
                    </div>
                </div>
                <div className="nav-center">
                    <div className="nav-list">
                        <ul>
                            <li>
                                <a className={"nav-link " + classes.navLinkMain} href="#">Home</a>
                            </li>
                            <li>
                                <a className={"nav-link " + classes.navLinkMain} href="#">Docs</a>
                            </li>
                            <li>
                                <a className={"nav-link " + classes.navLinkMain} href="#">Explore</a>
                            </li>
                        </ul>    
                    </div>
                </div>
                <div className="nav-right">
                    
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;
