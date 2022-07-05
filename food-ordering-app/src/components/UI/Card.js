import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
    // const classes = props + " classes"
    return(
        <div className={classes.card}>{props.children}</div>
);
};

export default Card;