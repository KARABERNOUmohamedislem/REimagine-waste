import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Card2.css";

// const style = {
//   backgroundColor: this.props.color,
// };
const Card2 = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div style={style} className="card2MainContainerCard">
      <img className="card2img" src={props.imgsrc} alt="" />
    </div>
  );
};

export default Card2;
