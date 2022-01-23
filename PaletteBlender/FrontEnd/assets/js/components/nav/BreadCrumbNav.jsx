import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarBreadCrumb: {
        backgroundColor: (colorPalette) => colorPalette.greys[6].color,
        borderBottomColor: (colorPalette) => colorPalette.greys[4].color,
    },
    navLinkBreadCrumb: {
        color: (colorPalette) => colorPalette.primary[2].color,
        '&:hover': {color: (colorPalette) => colorPalette.primary[3].color},
        '&:after': {
            content: '" / "',
            color: (colorPalette) => colorPalette.primary[2].color,
        }
    },
    navLinkActive: {
        color: (colorPalette) => colorPalette.primary[3].color,
        '&:hover': {color: (colorPalette) => colorPalette.primary[4].color},

    }
});

function BreadCrumbNav(props) {
    const classes = useStyles(props.colorPalette);

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
