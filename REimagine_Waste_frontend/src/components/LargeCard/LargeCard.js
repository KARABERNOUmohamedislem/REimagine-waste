import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./LargeCard.css";
// import carrots from "../../img/fourthscreen/carrots.png";

// const style = {
//   backgroundColor: this.props.color,
// };
const LargeCard = (props) => {
  const style = {
    backgroundColor: props.color,
  };

  return (
    <div
      style={style}
      className={"largecard " + (props.active == true ? "largecard2" : "")}
    >
      <div className="large_part1">
        <img className="largecardimg" src={props.imgsrc} alt="??" />
        <div className="ll">
          <div className="namecardtitle">{props.name}</div>
          <div className="weightcardtitle">{props.weight}</div>
        </div>
      </div>
      <div className="Price">{props.price + "Da"}</div>

      {/* <div className="largecardweight">{props.weight}</div> */}
    </div>
  );
};

export default LargeCard;
