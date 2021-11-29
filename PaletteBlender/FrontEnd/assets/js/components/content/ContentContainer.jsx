import React, { Component, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { basePalette } from '../basePalette';
import { ThemeContext } from '../App';

// TODO: define background color in style context and share it between components that way.
const bgColor = basePalette.greys[8].color;

const useStyles = createUseStyles({
    success: {
        color: basePalette.success[2].color,
    },
    muted: {
        color: basePalette.greys[3].color,
    },
    info: {
        color: basePalette.info[2].color,
    },
    warning: {
        color: basePalette.warning[2].color,
    },
    danger: {
        color: basePalette.danger[2].color,
    },
    btnPrimary: {
        color: "#fff",
        backgroundColor: basePalette.primary[2].color,
        borderColor: basePalette.primary[2].color,
        "&:hover": {
            backgroundColor: basePalette.primary[1].color,
            borderColor: basePalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.primary[3].color,
        },
    },
    btnSuccess: {
        color: "#fff",
        backgroundColor: basePalette.success[2].color,
        borderColor: basePalette.success[2].color,
        "&:hover": {
            backgroundColor: basePalette.success[1].color,
            borderColor: basePalette.success[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.success[3].color,
        },
    },
    btnInfo: {
        color: "#fff",
        backgroundColor: basePalette.info[3].color,
        borderColor: basePalette.info[3].color,
        "&:hover": {
            backgroundColor: basePalette.info[2].color,
            borderColor: basePalette.info[2].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.info[3].color,
        },
    },
    btnWarning: {
        color: "#fff",
        backgroundColor: basePalette.warning[2].color,
        borderColor: basePalette.warning[2].color,
        "&:hover": {
            backgroundColor: basePalette.warning[1].color,
            borderColor: basePalette.warning[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.warning[3].color,
        },
    },
    btnDanger: {
        color: "#fff",
        backgroundColor: basePalette.danger[2].color,
        borderColor: basePalette.danger[2].color,
        "&:hover": {
            backgroundColor: basePalette.danger[1].color,
            borderColor: basePalette.danger[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.danger[3].color,
        },
    },
    btnLight: {
        color: basePalette.greys[2].color,
        backgroundColor: basePalette.greys[6].color,
        borderColor: basePalette.greys[6].color,
        "&:hover": {
            backgroundColor: basePalette.greys[5].color,
            borderColor: basePalette.greys[5].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.greys[4].color,
        },
    },
    btnDark: {
        color: "#fff",
        backgroundColor: basePalette.greys[2].color,
        borderColor: basePalette.greys[2].color,
        "&:hover": {
            backgroundColor: basePalette.greys[1].color,
            borderColor: basePalette.greys[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.greys[3].color,
        },
    },
    btnOutlinePrimary: {
        color: basePalette.primary[2].color,
        backgroundColor: bgColor,
        borderColor: basePalette.primary[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.primary[1].color,
            borderColor: basePalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.primary[3].color,
        },
    },
    btnOutlineSuccess: {
        color: basePalette.success[2].color,
        backgroundColor: bgColor,
        borderColor: basePalette.success[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.success[1].color,
            borderColor: basePalette.success[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.success[3].color,
        },
    },
    btnOutlineInfo: {
        color: basePalette.info[3].color,
        backgroundColor: bgColor,
        borderColor: basePalette.info[3].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.info[2].color,
            borderColor: basePalette.info[2].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.info[3].color,
        },
    },
    btnOutlineWarning: {
        color: basePalette.warning[2].color,
        backgroundColor: bgColor,
        borderColor: basePalette.warning[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.warning[1].color,
            borderColor: basePalette.warning[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.warning[3].color,
        },
    },
    btnOutlineDanger: {
        color: basePalette.danger[2].color,
        backgroundColor: bgColor,
        borderColor: basePalette.danger[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.danger[1].color,
            borderColor: basePalette.danger[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.danger[3].color,
        },
    },
    btnOutlineLight: {
        color: basePalette.greys[4].color,
        backgroundColor: bgColor,
        borderColor: basePalette.greys[6].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.greys[5].color,
            borderColor: basePalette.greys[5].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.greys[4].color,
        },
    },
    btnOutlineDark: {
        color: basePalette.greys[2].color,
        backgroundColor: bgColor,
        borderColor: basePalette.greys[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.greys[1].color,
            borderColor: basePalette.greys[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.greys[3].color,
        },
    },
    btnPaginate: {
        color: bgColor,
        backgroundColor: basePalette.primary[3].color,
        borderColor: basePalette.primary[3].color,
        "&:hover": {
            backgroundColor: basePalette.primary[2].color,
            borderColor: basePalette.primary[2].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.primary[4].color,
        },
    },
    btnPaginateActive: {
        color: bgColor,
        backgroundColor: basePalette.primary[2].color,
        borderColor: basePalette.primary[2].color,
        "&:hover": {
            color: bgColor,
            backgroundColor: basePalette.primary[1].color,
            borderColor: basePalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: "0 0 0 0.25rem " + basePalette.primary[3].color,
        },
    },
    btnPaginateDisabled: {
        color: basePalette.greys[2].color,
        backgroundColor: basePalette.primary[5].color,
        borderColor: basePalette.primary[5].color,
        cursor: "default",
    },
});

function ParagraphSection() {
    const theme = useContext(ThemeContext);
    const classes = useStyles();

    return (
        <div className="content-section two-col">
            <div className="col">
                <h1>A Story for Reading</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <a href="#" className={theme.linkStd}> Link: Quisque dictum</a> neque in magna laoreet molestie. Quisque ut orci elit. 
                    Quisque posuere ligula quis sapien ultrices, eget auctor 
                    dolor lobortis. 
                    <br/>
                    <small className={classes.muted}>Duis sed eros faucibus, pretium ligula id, vehicula sem.</small>
                </p>
                <p>
                    Aenean et ante dui. Nullam sed quam nisi. Vestibulum felis neque, 
                    tincidunt maximus <a href="#" className={theme.linkStd}>Link: malesuada vitae</a>, mollis quis felis. In orci enim, pharetra 
                    ut arcu et, posuere consequat ante. 
                </p>
            </div>
            <div className="col">
            <div className="col">
                <h1>Words of Info, Warning, and Danger</h1>
                <p>Phasellus ornare lacinia sollicitudin.</p>
                <p className={classes.success}>Pellentesque tristique neque faucibus urna scelerisque cursus rhoncus ac ipsum.</p>
                <p className={classes.info}>In aliquet varius arcu, non aliquam urna.</p>
                <p className={classes.warning}>Suspendisse eget sapien eget purus iaculis lacinia et nec elit.</p>
                <p className={classes.danger}>Etiam ante odio, tempor vel cursus et, eleifend molestie quam.</p>
                <p className={classes.muted}>Nullam sed quam nisi. Vestibulum felis neque, tincidunt maximus malesuada vitae, mollis quis felis.</p>
            </div>
            </div>
        </div>    
    )    
}

function ButtonSection() {
    const classes = useStyles();

    return (
        <div className="content-section">
            <div className="col">
                <h1>Buttons</h1>
                <div className="btn-container">
                    <div tabIndex={0} className={"btn " + classes.btnPrimary}>Primary</div>
                    {/* <div tabIndex={0} className={"btn " + classes.btn-secondary}>Secondary</div> */}
                    <div tabIndex={0} className={"btn " + classes.btnInfo}>Info</div>
                    <div tabIndex={0} className={"btn " + classes.btnSuccess}>Success</div>
                    <div tabIndex={0} className={"btn " + classes.btnWarning}>Warning</div>
                    <div tabIndex={0} className={"btn " + classes.btnDanger}>Danger</div>
                    <div tabIndex={0} className={"btn " + classes.btnLight}>Light</div>
                    <div tabIndex={0} className={"btn " + classes.btnDark}>Dark</div>
                    {/* Pagination buttons */}
                    {/* Note: candidates for secondary color */}
                    <div tabIndex={0} className={"btn " + classes.btnPaginateDisabled} style={{marginLeft: "3rem"}}>&lt;&lt;</div>
                    <div tabIndex={0} className={"btn " + classes.btnPaginateActive}>1</div>
                    <div tabIndex={0} className={"btn " + classes.btnPaginate}>2</div>
                    <div tabIndex={0} className={"btn " + classes.btnPaginate}>3</div>
                    <div tabIndex={0} className={"btn " + classes.btnPaginate}>&gt;&gt;</div>

                </div>
                <div className="btn-container" style={{marginTop: "1rem"}}>
                    <div tabIndex={0} className={"btn " + classes.btnOutlinePrimary}>Primary</div>
                    {/* <div tabIndex={0} className={"btn " + classes.btnOutline-secondary}>Secondary</div> */}
                    <div tabIndex={0} className={"btn " + classes.btnOutlineInfo}>Info</div>
                    <div tabIndex={0} className={"btn " + classes.btnOutlineSuccess}>Success</div>
                    <div tabIndex={0} className={"btn " + classes.btnOutlineWarning}>Warning</div>
                    <div tabIndex={0} className={"btn " + classes.btnOutlineDanger}>Danger</div>
                    <div tabIndex={0} className={"btn " + classes.btnOutlineLight}>Light</div>
                    <div tabIndex={0} className={"btn " + classes.btnOutlineDark}>Dark</div>
                </div>
            </div>
        </div>
    );
}
 
function ContentContainer() {
    const classes = useStyles();

    return (
        <div className="content">
            <ParagraphSection />
            <ButtonSection />
        </div>
    )
}

export default ContentContainer;
