import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Card.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const style = {
//   backgroundColor: this.props.color,
// };
const Card = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <Link to={props.to} style={style} className="cardMainContainerCard1">
      <img className="cardimg" src={props.imgsrc} alt="" />

      <div id="coloredcard" className="cardtitle profile1">
        {props.name}
      </div>
    </Link>
  );
};

export default Card;
