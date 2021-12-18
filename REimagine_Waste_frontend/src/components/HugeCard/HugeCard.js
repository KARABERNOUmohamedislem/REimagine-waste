import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./HugeCard.css";

// const style = {
//   backgroundColor: this.props.color,
// };
const HugeCard = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div style={style} className="hugecardMainContainerCard">
      <img className="hugecardimg" src={props.imgsrc} alt="" />

      <div className="hugecardtitle profile">{props.name}</div>
      <div className="hugecardweight">{props.weight}</div>
    </div>
  );
};

export default HugeCard;
