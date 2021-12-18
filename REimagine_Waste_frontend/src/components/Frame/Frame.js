import React from "react";
import "./frame.css";
// import "../css/index.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Frame = (props) => {
  useEffect(() => {
    {
    }
  }, []);
  return (
    <div className="mainframe">
      <div className="frame">
        <div className="title">{props.title}</div>
        <div className="text"> {props.text} </div>
      </div>
    </div>
  );
};

export default Frame;
