import React from "react";
import { useEffect, useState } from "react";
import "./login.css";
import "../Frame/frame.css";
import ProfileCard from "./ProfileCard";
import img1 from "../../image/user1.png";
import img2 from "../../image/user2.png";
import img3 from "../../image/user3.png";

const Login = (props) => {
  const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await fetch(
  //       "http://127.0.0.1:8000/employees/"
  //     );
  //     const resJson = await response.json();
  //     setEmployees(resJson);
  //     console.log(employees[0])
  //   };
  //   fetchApi();
  // }, []);
  return (
    <div className="maincontainer">
      <img className="corner" src={require("../../image/loginframe.png")}></img>
      <div className="titlecontainer">
        <div className="title login">Welcome!</div>
        <div className="text login">select your profile to continue.</div>
      </div>
      
        <div className="cardcontainer">
          <ProfileCard to="/function" name="angela" imgsrc={img3} />
          <ProfileCard to="/function" name="ala eddine nasri" imgsrc={img1} />
          <ProfileCard to="/function" name="akram noui" imgsrc={img2} />
        </div>
      
    </div>
  );
};

export default Login;
