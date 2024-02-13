import React from "react";
import "./Card.css";
function Card(props) {
  const { className, children } = props;
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
}

export default Card;
