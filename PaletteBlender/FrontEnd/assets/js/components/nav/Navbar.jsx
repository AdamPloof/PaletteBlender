import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarMain: {
        backgroundColor: (colorPalette) => colorPalette.primary[1].color,
        borderBottomColor: (colorPalette) => colorPalette.greys[4].color,
    },

    navLinkMain: {
        color: (colorPalette) => colorPalette.primary[6].color,
        '&:hover': {color: (colorPalette) => colorPalette.primary[5].color},
    },
    navLogoMain: {
        color: (colorPalette) => colorPalette.primary[6].color,
    }
});

function Navbar(props) {
    const classes = useStyles(props.colorPalette);

    return (
        <div className="nav-container">
            <div className={"navbar nav-second " + classes.navbarMain}>
                <div className={"nav-logo " + classes.navLogoMain}>
                    ~ PaletteBlender ~
                </div>
                <div className="nav-center">
                    <div className="nav-list">
                        <ul>
                            <li>
                                <a
                                    className={"nav-link " + classes.navLinkMain}
                                    href="#"
                                    onClick={() => {props.setCurrentPage('main')}}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={"nav-link " + classes.navLinkMain}
                                    href="#"
                                    onClick={() => {props.setCurrentPage('documentation')}}
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    className={"nav-link " + classes.navLinkMain}
                                    href="#"
                                    onClick={() => {props.setCurrentPage('guide')}}
                                >
                                    Guide
                                </a>
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
