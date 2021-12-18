import React from "react";
import "./firstscreen.css";
// import "../css/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../../Button/Button";
import Frame from "../../Frame/Frame";
import mainpng from "../../../img/firstscreen/main.png";
import cornerpng from "../../../img/firstscreen/corner.png";

const Firstscreen = (props) => {
  useEffect(() => {
    {
    }
  }, []);
  return (
    <div className="Full screen">
      <img className="cornerpng" src={cornerpng} alt="corner" />
      <div className="part1">
        <div className="frameimg">
          <div className="Glass">
            <Frame
              title="Control your food waste smartly"
              text="Control your food waste smartly with our smart scale"
            />
          </div>
          <img className="mainpng" src={mainpng} alt="Main" />
        </div>
      </div>
      <div className="part2">
        <Button to="/login" name="Start" />
      </div>
    </div>
    //  <div className="title">{props.title}</div>
    //  <div className="text"> {props.text} </div>
  );
};

export default Firstscreen;
