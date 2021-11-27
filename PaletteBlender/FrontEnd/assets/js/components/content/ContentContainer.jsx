import React, { Component } from 'react';
import { createUseStyles } from 'react-jss';
import { basePalette } from '../basePalette';

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
});

function ContentContainer(props) {
    const linkClasses = props.useLinkStyle();
    const classes = useStyles();

    return (
        <div className="content">
            <div className="content-section two-col">
                <div className="col">
                    <h1>A Story for Reading</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <a href="#" className={linkClasses.linkStd}> Quisque dictum</a> neque in magna laoreet molestie. Quisque ut orci elit. 
                        Quisque posuere ligula quis sapien ultrices, eget auctor 
                        dolor lobortis. 
                        <br/>
                        <small className={classes.muted}>Duis sed eros faucibus, pretium ligula id, vehicula sem.</small>
                    </p>
                    <p>
                        Aenean et ante dui. Nullam sed quam nisi. Vestibulum felis neque, 
                        tincidunt maximus <a href="#" className={linkClasses.linkStd}>malesuada vitae</a>, mollis quis felis. In orci enim, pharetra 
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
            
        </div>
    )
}

export default ContentContainer;
