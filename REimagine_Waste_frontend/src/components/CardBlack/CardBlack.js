import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./CardBlack.css";

// const style = {
//   backgroundColor: this.props.color,
// };
const Card = (props) => {
  function MouseOver(event) {
    event.target.style.background = "#09b495";
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }
  return (
    <div
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
      className="cardMainContainerCard9"
    >
      <img className="cardimg9" src={props.imgsrc} alt="" />

      <div id="coloredcard" className="cardtitle profile9">
        {props.name}
      </div>
    </div>
  );
};

export default Card;
