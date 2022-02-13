import React from "react";
import { generateUID } from "../uidGenerator";

const rainbowListItems = [
    {
        title: 'Relevant Info Report',
        details: 'T. Fergusson - 172 Views',
        logoClass: 'danger',
    },
    {
        title: 'Goodbye Presentation',
        details: 'Emmanuel Lasker - 12k Views',
        logoClass: 'success',
    },
    {
        title: 'Tour Dates by City',
        details: 'David St. Nubbins - 5 Views',
        logoClass: 'primary',
    },
    {
        title: 'Marching Band Expenses',
        details: 'B.D. Tubatone - 245 Views',
        logoClass: 'warning',
    },
    {
        title: 'Collect Call Policy',
        details: 'AT-5000 Auto-Dialer - 17m Views',
        logoClass: 'danger',
    },
    {
        title: 'Old Timey Maps',
        details: 'Daniel Kern - 1.5k Views',
        logoClass: 'primary',
    },
    {
        title: 'Figments of Imagination',
        details: 'Tracy Waterville - 458 Views',
        logoClass: 'success',
    },
    {
        title: 'Get Outdoors Study',
        details: 'Tina - 12b Views',
        logoClass: 'success',
    },
    {
        title: 'Next Tuesday',
        details: 'Wednesday Topper - 11 Views',
        logoClass: 'warning',
    },
];

const primaryListItems = [
    {
        title: 'Solar Eclipse BBBQ',
        details: "The extra 'b' is for BYOBB. What's that extra...",
        logoClass: 'primary-dark',
    },
    {
        title: 'Collective Cooperation Conference',
        details: 'Register in advance to be entered into a raffle to win...',
        logoClass: 'primary-dark',
    },
    {
        title: 'WoM OT PA FWIW Meeting',
        details: 'Little of significance will be discussed, attendance mandatory...',
        logoClass: 'primary-dark',
    },
    {
        title: 'Color Palette Creation Workshop',
        details: 'No longer needed thanks to an awesome new...',
        logoClass: 'primary-dark',
    },
];

const makeListItem = (title, details, logoClass) => {
    const uid = generateUID();

    return (
        <div key={uid} className="list-item">
            <div className={"list-item-logo logo-" + logoClass}></div>
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
    return (
        <div className="sidebar-container">
            {/* Primary-dark cards */}
            <div className="sidebar-card">
                <div className="card-header">
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
                <div className="card-header">
                    <div className="card-logo">&amp;</div>
                    <div className="card-title"><h3>FARCICAL READING</h3></div>
                </div>
                <div className="card-toolbar">
                    <div className="toolbar-input">
                        <input type="text" placeholder="Search for stuff..." onClick={(e) => {e.preventDefault()}} />
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
