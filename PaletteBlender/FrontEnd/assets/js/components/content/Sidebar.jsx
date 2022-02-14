import React from "react";
import { createUseStyles } from 'react-jss';
import { generateUID } from "../uidGenerator";

const baseLogoStyle = {
    borderRadius: '50%',
    textAlign: 'center',
    padding: '.5rem',
    minHeight: '20px',
    minWidth: '20px',
    lineHeight: '20px',
    alignSelf: 'center',
};

const usesidebarClasses = createUseStyles({
    sidebarHeader: {
        backgroundColor: (colorPalette) => colorPalette.primary[2].color,
        color: (colorPalette) => colorPalette.greys[8].color,
    },
    sidebarInput : {
        "&:active": {
            borderColor: (colorPalette) => colorPalette.primary[5].color,
        },
        "&:focus": {
            borderColor: (colorPalette) => colorPalette.primary[5].color,
            // TODO: Figure out why this doesn't update on palette changes!
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.primary[6].color,
        }
    },
    logoPrimaryDark: {
        backgroundColor: (colorPalette) => colorPalette.primary[2].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,        
    },
    logoPrimary: {
        backgroundColor: (colorPalette) => colorPalette.primary[3].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,
    },
    logoSuccess: {
        backgroundColor: (colorPalette) => colorPalette.success[2].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,
    },
    logoWarning: {
        backgroundColor: (colorPalette) => colorPalette.warning[2].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,
    },
    logoInfo: {
        backgroundColor: (colorPalette) => colorPalette.info[3].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,
    },
    logoDanger: {
        backgroundColor: (colorPalette) => colorPalette.danger[2].color,
        color: (colorPalette) => colorPalette.greys[8].color,
        ...baseLogoStyle,
    },
});

const makeListItem = (title, details, logoClass) => {
    const uid = generateUID();

    return (
        <div key={uid} className="list-item">
            <div className={logoClass}>&amp;</div>
            <div className="list-item-details">
                <div className="detail-title">
                    {title}
                </div>
                <div className="detail-context">
                    {details}
                </div>
            </div>
        </div>
    );
}

function Sidebar(props) {
    const sidebarClasses = usesidebarClasses(props.colorPalette);

    const rainbowListItems = [
        {
            title: 'Relevant Info Report',
            details: 'T. Fergusson - 172 Views',
            logoClass: sidebarClasses.logoPrimary,
        },
        {
            title: 'Goodbye Presentation',
            details: 'Emmanuel Lasker - 12k Views',
            logoClass: sidebarClasses.logoSuccess,
        },
        {
            title: 'Tour Dates by City',
            details: 'David St. Nubbins - 5 Views',
            logoClass: sidebarClasses.logoPrimary,
        },
        {
            title: 'Marching Band Expenses',
            details: 'B.D. Tubatone - 245 Views',
            logoClass: sidebarClasses.logoWarning,
        },
        {
            title: 'Collect Call Policy',
            details: 'AT-5000 Auto-Dialer - 17m Views',
            logoClass: sidebarClasses.logoInfo,
        },
        {
            title: 'Old Timey Maps',
            details: 'Daniel Kern - 1.5k Views',
            logoClass: sidebarClasses.logoDanger,
        },
        {
            title: 'Figments of Imagination',
            details: 'Tracy Waterville - 458 Views',
            logoClass: sidebarClasses.logoDanger,
        },
        {
            title: 'Get Outdoors Study',
            details: 'Tina - 12b Views',
            logoClass: sidebarClasses.logoSuccess,
        },
        {
            title: 'Next Tuesday',
            details: 'Wednesday Topper - 11 Views',
            logoClass: sidebarClasses.logoPrimary,
        },
    ];
    
    const primaryListItems = [
        {
            title: 'Solar Eclipse BBBQ',
            details: "The extra 'b' is for BYOBB. What's that extra...",
            logoClass: sidebarClasses.logoPrimaryDark,
        },
        {
            title: 'Collective Cooperation Conference',
            details: 'Register in advance to be entered into a raffle to win...',
            logoClass: sidebarClasses.logoPrimaryDark,
        },
        {
            title: 'WoM OT PA FWIW Meeting',
            details: 'Little of significance will be discussed, attendance mandatory...',
            logoClass: sidebarClasses.logoPrimaryDark,
        },
        {
            title: 'Color Palette Creation Workshop',
            details: 'No longer needed thanks to an awesome new...',
            logoClass: sidebarClasses.logoPrimaryDark,
        },
    ];

    return (
        <div className="sidebar-container">
            {/* Primary-dark cards */}
            <div className="sidebar-card">
                <div className={sidebarClasses.sidebarHeader + " card-header"}>
                    <div className="card-logo">&amp;</div>
                    <div className="card-title"><h3>UPCOMMING EVENTS</h3></div>
                </div>
                <div className="card-body">
                    <div className="card-list">
                        {primaryListItems.map(li => makeListItem(...Object.values(li)))}
                    </div>
                </div>
            </div>

            {/* Rainbow Cards */}
            <div className="sidebar-card">
                <div className={sidebarClasses.sidebarHeader + " card-header"}>
                    <div className="card-logo">&amp;</div>
                    <div className="card-title"><h3>FARCICAL READING</h3></div>
                </div>
                <div className="card-toolbar">
                    <div className="toolbar-input">
                        <input class={sidebarClasses.sidebarInput} type="text" placeholder="Search for stuff..." onClick={(e) => {e.preventDefault()}} />
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-list">
                        {rainbowListItems.map(li => makeListItem(...Object.values(li)))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
