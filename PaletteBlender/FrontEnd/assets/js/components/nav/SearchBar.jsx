import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarMain: {
        backgroundColor: (colorPalette) => colorPalette.primary[0].color,
        borderBottomColor: (colorPalette) => colorPalette.greys[3].color,
    },

    navLinkMain: {
        color: (colorPalette) => colorPalette.primary[6].color,
        '&:hover': {color: (colorPalette) => colorPalette.primary[5].color},
    },
    navLogoMain: {
        color: (colorPalette) => colorPalette.primary[6].color,
    }
});

function SearchBar(props) {
    const classes = useStyles(props.colorPalette);

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
                                <a className={"nav-link " + classes.navLinkMain} href="#">Login</a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SearchBar;
