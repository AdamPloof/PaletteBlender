import React, { Component } from 'react';
import { basePalette } from '../basePalette';
import { createUseStyles } from 'react-jss';

const borderStyle = '1px solid ' + basePalette.primary[2].color;

const useStyles = createUseStyles({
    navbarSecondary: {
        backgroundColor: basePalette.primary[3].color,
        borderBottomColor: basePalette.greys[5].color,
    },
    navLinkSecondary: {
        color: basePalette.primary[6].color,
        '&:hover': {color: basePalette.primary[5].color},
    },
    navItemSecondary: {
        borderRight: borderStyle,
    },
    navItemActive: {
        "& .nav-link": {
            color: basePalette.greys[7].color,
        },
        backgroundColor: basePalette.primary[2].color,
        borderRight: borderStyle,
    }
});

function SubNav() {
    const classes = useStyles();

    return (
        <div className="nav-container">
            <div className={"navbar nav-third " + classes.navbarSecondary}>
                <div className="nav-left">
                    <div className="nav-list sub-nav-list">
                        <div className={"nav-item " + classes.navItemSecondary} style={{borderLeft: borderStyle}}>
                            <a className={"nav-link " + classes.navLinkSecondary} href="#">Make</a>
                        </div>
                        <div className={"nav-item " + classes.navItemActive}>
                            <a className={"nav-link " + classes.navLinkSecondary} href="#">Share</a>
                        </div>
                        <div className={"nav-item " + classes.navItemSecondary}>
                            <a className={"nav-link " + classes.navLinkSecondary} href="#">Advance</a>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    
                </div>
            </div>
        </div>
    );
}
 
export default SubNav;
