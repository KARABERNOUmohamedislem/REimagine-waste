import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./CardBlack2.css";

// const style = {
//   backgroundColor: this.props.color,
// };
const CardBlack2 = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div style={style} className="cardMainContainerCard">
      <img className="cardimg" src={props.imgsrc} alt="" />

      <a href="/tomate" id="coloredcard" className="cardtitle profile">
        {props.name}
      </a>
    </div>
  );
};

export default CardBlack2;
