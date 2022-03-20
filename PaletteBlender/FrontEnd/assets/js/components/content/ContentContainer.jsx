import React, { Component, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { basePalette } from '../basePalette';

const useAlertStyles = createUseStyles({
    alertPrimary: {
        color: (colorPalette) => colorPalette.primary[1].color,
        backgroundColor: (colorPalette) => colorPalette.primary[6].color,
        borderColor: (colorPalette) => colorPalette.primary[5].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.primary[2].color,
            borderBottomColor: (colorPalette) => colorPalette.primary[5].color,
        }
    },
    alertInfo: {
        color: (colorPalette) => colorPalette.info[1].color,
        backgroundColor: (colorPalette) => colorPalette.info[6].color,
        borderColor: (colorPalette) => colorPalette.info[5].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.info[2].color,
            borderBottomColor: (colorPalette) => colorPalette.info[5].color,
        }
    },
    alertSuccess: {
        color: (colorPalette) => colorPalette.success[1].color,
        backgroundColor: (colorPalette) => colorPalette.success[6].color,
        borderColor: (colorPalette) => colorPalette.success[5].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.success[2].color,
            borderBottomColor: (colorPalette) => colorPalette.success[5].color,
        }
    },
    alertWarning: {
        color: (colorPalette) => colorPalette.warning[1].color,
        backgroundColor: (colorPalette) => colorPalette.warning[6].color,
        borderColor: (colorPalette) => colorPalette.warning[5].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.warning[2].color,
            borderBottomColor: (colorPalette) => colorPalette.warning[5].color,
        }
    },
    alertDanger: {
        color: (colorPalette) => colorPalette.danger[1].color,
        backgroundColor: (colorPalette) => colorPalette.danger[6].color,
        borderColor: (colorPalette) => colorPalette.danger[5].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.danger[2].color,
            borderBottomColor: (colorPalette) => colorPalette.danger[5].color,
        }
    },
    alertLight: {
        color: (colorPalette) => colorPalette.greys[1].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.greys[7].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[0].color,
            backgroundColor: (colorPalette) => colorPalette.greys[5].color,
            borderBottomColor: (colorPalette) => colorPalette.greys[4].color,
        }
    },
    alertDark: {
        color: (colorPalette) => colorPalette.greys[8].color,
        backgroundColor: (colorPalette) => colorPalette.greys[2].color,
        borderColor: (colorPalette) => colorPalette.greys[4].color,
        "& .alert-header": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.greys[3].color,
            borderBottomColor: (colorPalette) => colorPalette.greys[2].color,
        }
    },
});

const useStyles = createUseStyles({
    success: {
        color: (colorPalette) => colorPalette.success[2].color,
    },
    muted: {
        color: (colorPalette) => colorPalette.greys[3].color,
    },
    info: {
        color: (colorPalette) => colorPalette.info[2].color,
    },
    warning: {
        color: (colorPalette) => colorPalette.warning[2].color,
    },
    danger: {
        color: (colorPalette) => colorPalette.danger[2].color,
    },
    btnPrimary: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.primary[2].color,
        borderColor: (colorPalette) => colorPalette.primary[2].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.primary[1].color,
            borderColor: (colorPalette) => colorPalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.primary[3].color,
        },
    },
    btnSuccess: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.success[2].color,
        borderColor: (colorPalette) => colorPalette.success[2].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.success[1].color,
            borderColor: (colorPalette) => colorPalette.success[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.success[3].color,
        },
    },
    btnInfo: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.info[3].color,
        borderColor: (colorPalette) => colorPalette.info[3].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.info[2].color,
            borderColor: (colorPalette) => colorPalette.info[2].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.info[3].color,
        },
    },
    btnWarning: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.warning[2].color,
        borderColor: (colorPalette) => colorPalette.warning[2].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.warning[1].color,
            borderColor: (colorPalette) => colorPalette.warning[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.warning[3].color,
        },
    },
    btnDanger: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.danger[2].color,
        borderColor: (colorPalette) => colorPalette.danger[2].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.danger[1].color,
            borderColor: (colorPalette) => colorPalette.danger[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.danger[3].color,
        },
    },
    btnLight: {
        color: (colorPalette) => colorPalette.greys[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[6].color,
        borderColor: (colorPalette) => colorPalette.greys[6].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.greys[5].color,
            borderColor: (colorPalette) => colorPalette.greys[5].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.greys[4].color,
        },
    },
    btnDark: {
        color: "#fff",
        backgroundColor: (colorPalette) => colorPalette.greys[2].color,
        borderColor: (colorPalette) => colorPalette.greys[2].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.greys[1].color,
            borderColor: (colorPalette) => colorPalette.greys[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.greys[3].color,
        },
    },
    btnOutlinePrimary: {
        color: (colorPalette) => colorPalette.primary[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.primary[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.primary[1].color,
            borderColor: (colorPalette) => colorPalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.primary[3].color,
        },
    },
    btnOutlineSuccess: {
        color: (colorPalette) => colorPalette.success[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.success[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.success[1].color,
            borderColor: (colorPalette) => colorPalette.success[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.success[3].color,
        },
    },
    btnOutlineInfo: {
        color: (colorPalette) => colorPalette.info[3].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.info[3].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.info[2].color,
            borderColor: (colorPalette) => colorPalette.info[2].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.info[3].color,
        },
    },
    btnOutlineWarning: {
        color: (colorPalette) => colorPalette.warning[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.warning[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.warning[1].color,
            borderColor: (colorPalette) => colorPalette.warning[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.warning[3].color,
        },
    },
    btnOutlineDanger: {
        color: (colorPalette) => colorPalette.danger[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.danger[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.danger[1].color,
            borderColor: (colorPalette) => colorPalette.danger[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.danger[3].color,
        },
    },
    btnOutlineLight: {
        color: (colorPalette) => colorPalette.greys[4].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.greys[6].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.greys[5].color,
            borderColor: (colorPalette) => colorPalette.greys[5].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.greys[4].color,
        },
    },
    btnOutlineDark: {
        color: (colorPalette) => colorPalette.greys[2].color,
        backgroundColor: (colorPalette) => colorPalette.greys[8].color,
        borderColor: (colorPalette) => colorPalette.greys[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.greys[1].color,
            borderColor: (colorPalette) => colorPalette.greys[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.greys[3].color,
        },
    },
    btnPaginate: {
        color: (colorPalette) => colorPalette.greys[8].color,
        backgroundColor: (colorPalette) => colorPalette.primary[3].color,
        borderColor: (colorPalette) => colorPalette.primary[3].color,
        "&:hover": {
            backgroundColor: (colorPalette) => colorPalette.primary[2].color,
            borderColor: (colorPalette) => colorPalette.primary[2].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.primary[4].color,
        },
    },
    btnPaginateActive: {
        color: (colorPalette) => colorPalette.greys[8].color,
        backgroundColor: (colorPalette) => colorPalette.primary[2].color,
        borderColor: (colorPalette) => colorPalette.primary[2].color,
        "&:hover": {
            color: (colorPalette) => colorPalette.greys[8].color,
            backgroundColor: (colorPalette) => colorPalette.primary[1].color,
            borderColor: (colorPalette) => colorPalette.primary[1].color,
        },
        "&:focus": {
            boxShadow: (colorPalette) => "0 0 0 0.25rem " + colorPalette.primary[3].color,
        },
    },
    btnPaginateDisabled: {
        color: (colorPalette) => colorPalette.greys[3].color,
        backgroundColor: (colorPalette) => colorPalette.primary[5].color,
        borderColor: (colorPalette) => colorPalette.primary[5].color,
        cursor: "default",
    },
});

const useLinkStyles = createUseStyles({
    linkStd: {
        color: (colorPalette) => colorPalette.primary[3].color,
        '&:hover': {color: (colorPalette) => colorPalette.primary[2].color},
    },
});

function IntroSection(props) {
    const linkClasses = useLinkStyles(props.colorPalette);
    const classes = useStyles(props.colorPalette);

    return (
        <div className="content-section">
            <div className="col" style={{width: '75%'}}>
                <h1>A Practical Color Palette Generator</h1>
                <p>
                    Palette Blender is a tool for efficiently designing color palettes for use in web development. It allows you to assess colors immediately in the context of common site components and
                    export your palette directly to CSS/SASS variables for use in your project.
                </p>
            </div>
        </div>
    );
}

function ParagraphSection(props) {
    const linkClasses = useLinkStyles(props.colorPalette);
    const classes = useStyles(props.colorPalette);

    return (
        <div className="content-section two-col">
            <div className="col">
                <h2>Example Body Text</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <a href="#" className={linkClasses.linkStd}> Link: Quisque dictum</a> neque in magna laoreet molestie. Quisque ut orci elit. 
                    Quisque posuere ligula quis sapien ultrices, eget auctor 
                    dolor lobortis. 
                    <br/>
                    <small className={classes.muted}>Duis sed eros faucibus, pretium ligula id, vehicula sem.</small>
                </p>
                <blockquote>
                    Anyone who sits on top of the <a target="_blank" href="https://en.wikipedia.org/wiki/Gemini_3#/media/File:Gemini_3.jpg" className={linkClasses.linkStd}>largest hydrogen-oxygen fueled system in the world</a>, knowing they're going to light the bottom, and doesn't get a little worried, does not fully understand the situation.
                </blockquote>
                <figcaption className={classes.muted}>-- John Young, <cite>On being blasted into space</cite></figcaption>
            </div>
            <div className="col">
            <div className="col">
                <h2>Contextual Messages</h2>
                <p className={classes.muted}>Nullam sed quam nisi. Vestibulum felis neque, tincidunt maximus malesuada vitae, mollis quis felis.</p>
                <p className={classes.success}>Pellentesque tristique neque faucibus urna scelerisque cursus rhoncus ac ipsum.</p>
                <p className={classes.info}>In aliquet varius arcu, non aliquam urna.</p>
                <p className={classes.warning}>Suspendisse eget sapien eget purus iaculis lacinia et nec elit.</p>
                <p className={classes.danger}>Etiam ante odio, tempor vel cursus et, eleifend molestie quam.</p>
            </div>
            </div>
        </div>    
    )    
}

function ButtonSection(props) {
    const classes = useStyles(props.colorPalette);

    return (
        <div className="content-section">
            <div className="col">
                <h2>Buttons</h2>
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

// TODO: make alert factory function. And probably other factory functions while we're at it.
function AlertSection(props) {
    const alertClasses = useAlertStyles(props.colorPalette);
    return (
        <div className="content-section three-col">
            <div className="col">
                <div className={"alert " + alertClasses.alertPrimary}>
                    <div className="alert-header">
                        Primary Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a primary message! Lots of important information could go here.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={"alert " + alertClasses.alertInfo}>
                    <div className="alert-header">
                        Info Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is an informational message! Lots of important information could go here.
                    </div>
                </div>
            </div>           
            <div className="col">
                <div className={"alert " + alertClasses.alertSuccess}>
                    <div className="alert-header">
                        Success Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a successful message! Lots of important information could go here.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={"alert " + alertClasses.alertWarning}>
                    <div className="alert-header">
                        Warning Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a message of warning! Lots of important information could go here.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={"alert " + alertClasses.alertDanger}>
                    <div className="alert-header">
                        Danger Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a dangerous message! Lots of important information could go here.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={"alert " + alertClasses.alertLight}>
                    <div className="alert-header">
                        Light Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a light message! Lots of important information could go here.
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={"alert " + alertClasses.alertDark}>
                    <div className="alert-header">
                        Dark Alert
                    </div>
                    <div className="alert-body">
                        <div className="alert-title">
                            A Very Catchy Title.
                        </div>
                        This is a dark message! Lots of important information could go here.
                    </div>
                </div>
            </div>           
        </div>
    );
}
 
function ContentContainer(props) {
    return (
        <div className="content">
            <IntroSection colorPalette={props.colorPalette} />
            <ParagraphSection colorPalette={props.colorPalette} />
            <ButtonSection colorPalette={props.colorPalette} />
            <AlertSection colorPalette={props.colorPalette} />
        </div>
    )
}

export default ContentContainer;
