import React from "react";
import "./thirdscreen.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useCallback } from "react";
// import { useHistory } from "react-router-dom";
// import "../css/index.css";
import { useEffect } from "react";
import Card from "../../Card/Card";
import Card2 from "../../Card2/Card2";
import ProfileCard from "../../Login/ProfileCard";
import trash from "../../../img/3rdscreen/trash_full.png";
import shop from "../../../img/3rdscreen/shape.png";
import learn from "../../../img/3rdscreen/Vector.png";
import dashbord from "../../../img/3rdscreen/bar_chart.png";
import logout from "../../../img/3rdscreen/log_out.png";
import img3 from "../../../image/user3.png";
import background from "../../../img/3rdscreen/bg.png";
import { useNavigate } from "react-router-dom";
// import Card2 from "../../Card2/Card2";

const thirdscreen = (props) => {
  return (
    <div
      className="thirdscreen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="cardsHeader">
        <Card2 imgsrc={img3} color="#eeeeee" />
        <div className="flexcol">
          <h1>Hello, Angela</h1>
          <p>Nice to see you again</p>
        </div>
      </div>
      <div className="cardsHeader2">
        <img className="logpng" src={logout} alt="Main" />
      </div>
      <div className="cardsdiv">
        <Card to="/waste" name="Waste mode" imgsrc={trash} color="#09B495" />

        <Card
          to="/waste"
          name="Preparation mode"
          imgsrc={shop}
          color="#8BCC01"
        />

        <Card to="/learn" name="Learning mode" imgsrc={learn} color="#00A0D2" />

        <Card to="/dashboard" name="Dashboard" imgsrc={dashbord} color="#222444" />
      </div>
    </div>
  );
};

export default thirdscreen;
