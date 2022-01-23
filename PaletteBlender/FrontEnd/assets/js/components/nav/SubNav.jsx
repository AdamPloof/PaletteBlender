import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navbarSecondary: {
        backgroundColor: (colorPalette) => colorPalette.primary[3].color,
        borderBottomColor: (colorPalette) => colorPalette.greys[5].color,
    },
    navLinkSecondary: {
        color: (colorPalette) => colorPalette.primary[6].color,
    },
    navItemSecondary: {
        borderRight: (colorPalette) => '1px solid ' + colorPalette.primary[4].color,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: (colorPalette) => colorPalette.primary[4].color,
            color: (colorPalette) => colorPalette.primary[1].color,
        }
    },
    navItemActive: {
        "& .nav-link": {
            color: (colorPalette) => colorPalette.greys[7].color,
        },
        backgroundColor: (colorPalette) => colorPalette.primary[2].color,
        borderRight: (colorPalette) => '1px solid ' + colorPalette.primary[4].color,
        '&:hover': {
            backgroundColor: (colorPalette) => colorPalette.primary[4].color,
            color: (colorPalette) => colorPalette.primary[1].color,
        }
    }
});

function SubNav(props) {
    const classes = useStyles(props.colorPalette);

    return (
        <div className="nav-container">
            <div className={"navbar nav-third " + classes.navbarSecondary}>
                <div className="nav-left">
                    <div className="nav-list sub-nav-list">
                        <div className={"nav-item " + classes.navItemSecondary} style={{borderLeft: "1px solid " + props.colorPalette.primary[4].color}}>
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
