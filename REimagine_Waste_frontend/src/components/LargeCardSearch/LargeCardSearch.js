import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./LargeCardSearch.css";
import Card from "../Card/Card";
import carrots from "../../img/fourthscreen/carrots.png";
// import meat from "../../img/fourthscreen/meat.png";
import apple from "../../img/fourthscreen/apple.png";
import tomato from "../../img/fourthscreen/tomato.png";
import redapple from "../../img/fourthscreen/redapple.png";
import jmeat from "../../img/fourthscreen/meat.png";
import lbgri from "../../img/fourthscreen/lbgri.png";
import kkmbr from "../../img/fourthscreen/kkmbr.png";
import bsla from "../../img/fourthscreen/bsla.png";
import jelbana from "../../img/fourthscreen/jelbana.png";
import banane from "../../img/fourthscreen/banana.png";
import CardBlack from "../CardBlack/CardBlack";

// const style = {
//   backgroundColor: this.props.color,
// };
const LargeCardSearch = () => {
  // const style = {
  //   backgroundColor: props.color,
  // };
  return (
    <div className="largecardsearch">
      <input className="searchbar" placeholder="Search..."></input>
      <div className="Bigcontainer">
        <div className="Smallcontainer">
          <CardBlack name="Tomate" imgsrc={tomato} color="white" />
          <CardBlack name="Apple" imgsrc={redapple} color="white" />
          <CardBlack name="Meat" imgsrc={jmeat} color="white" />
        </div>
        <div className="Smallcontainer">
          <CardBlack name="Meat2" imgsrc={lbgri} color="white" />
          <CardBlack name="veg3" imgsrc={kkmbr} color="white" />
          <CardBlack name="veg2" imgsrc={jelbana} color="white" />
        </div>
        <div className="Smallcontainer">
          <CardBlack name="Banana" imgsrc={banane} color="white" />
          <CardBlack name="Carrots" imgsrc={carrots} color="white" />
          <CardBlack name="Onion" imgsrc={bsla} color="white" />
        </div>
      </div>
    </div>
  );
};

export default LargeCardSearch;
