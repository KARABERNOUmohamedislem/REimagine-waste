import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WideCard from "./components/WideCard/WideCard";

import Firstscreen from "./components/screens/first_screen/Firstscreen";
import Thirdscreen from "./components/screens/3rd_screen/thirdscreen";
import Login from "./components/Login/login";
import Fourthscreen from "./components/screens/FourthScreen/Fourthscreen";
// import LargeCardSearch from "./components/LargeCardSearch/LargeCardSearch";
import Fifthscreen from "./components/screens/FifthScreen/Fifthscreen";
import Sixethscreen from "./components/screens/sixethScreen/Sixethscreen";
import Seventhscreen from "./components/screens/SeventhScreen/Seventhscreen";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path="/" element={<Firstscreen />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/function" element={<Thirdscreen />}></Route>
          <Route exact path="/waste" element={<Fourthscreen />}></Route>
          <Route exact path="/automatic" element={<Fifthscreen />}></Route>
          <Route exact path="/learn" element={<Sixethscreen />}></Route>
          <Route exact path="/tomate" element={<Seventhscreen />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
    // <body>
    //   {/* <Firstscreen /> */}
    //   {/* <Login /> */}
    //   {/* <Thirdscreen /> */}
    //   {/* <Fourthscreen /> */}
    //   {/* <LargeCardSearch

    //   /> */}
    //   {/* <Fifthscreen /> */}
    //   {/* <Sixethscreen /> */}
    //   <Seventhscreen />
    // </body>
  );
}

export default App;
