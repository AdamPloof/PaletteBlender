import React, { Component } from 'react';
import { basePalette } from '../basePalette';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarBreadCrumb: {
        backgroundColor: basePalette.greys[6].color,
        borderBottomColor: basePalette.greys[4].color,
    },
    navLinkBreadCrumb: {
        color: basePalette.primary[2].color,
        '&:hover': {color: basePalette.primary[3].color},
        '&:after': {
            content: '" / "',
            color: basePalette.primary[2].color,
        }
    },
    navLinkActive: {
        color: basePalette.primary[3].color,
        '&:hover': {color: basePalette.primary[4].color},

    }
});

function BreadCrumbNav() {
    const classes = useStyles();

    return (
        <div className="nav-container">
            <div className={"navbar nav-fourth " + classes.navbarBreadCrumb}>
                <div className="nav-left">
                </div>
                <div className="nav-right">
                    <div className="nav-list breadcrumbs">
                        <ul>
                            <li>
                                <a className={"nav-link " + classes.navLinkBreadCrumb} href="#">Home</a>
                            </li>
                            <li>
                                <a className={"nav-link " + classes.navLinkActive} href="#">Share</a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BreadCrumbNav;
