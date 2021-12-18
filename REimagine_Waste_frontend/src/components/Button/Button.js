import React from "react";
import "./button.css";
// import "../css/index.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Button = (props) => {
  useEffect(() => {
    {
    }
  }, []);
  return (
    <Link to={props.to} className="mainbutton">
      <div className="buttonshadow"></div>
      <a href="#" className="mButton">
        <p> {props.name} </p>
      </a>
    </Link>
  );
};

export default Button;
