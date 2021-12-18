import React from "react";
import "./Seventhscreen.css";
import { useState } from "react";
// import "../css/index.css";
import { useEffect } from "react";
// import Card2 from "../../Card2/Card2";
import Button from "../../Button/Button";
import HugeCard from "../../HugeCard/HugeCard";
import carrots from "../../../img/fourthscreen/carrots.png";
// import meat from "../../../img/sevent/meat.png";
import tomato1 from "../../../img/sevent/tt.png";
import ttt from "../../../img/sevent/ttt.png";
import tttt from "../../../img/sevent/tttt.png";
import t from "../../../img/sevent/t.png";
import vide from "../../../img/sevent/vide.png";
import LargeCard from "../../LargeCard/LargeCard";
import Delete from "../../../img/3rdscreen/trash_full.png";

const Seventhscreen = (props) => {
  const [state, setstate] = useState(false)
  return (
    <div
      className="fourthscreen"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className="f_header">
        <div className="f_header_1">
          <p className="text">Learning Mode</p>
        </div>
        <div className="f_header_2">
          <Button to="/function" name="Home" />
        </div>
      </div>

      {/* dddddddddddddddddd */}
      <div className="f_core">
        <div className="f_core_1" onClick={() => setstate(!state)}>
          <HugeCard
            // name="Carrots"
            imgsrc={tomato1}
            color="#EEEEEE"
            // weight="01.57kg"
          />
          <div className="sevenbuttons">
            <div className="Complete2">Complete</div>
            <div className="Cancel23">Take a Pic</div>
            <div className="Cancel2">Cancel</div>
          </div>
        </div>
        <div className="f_core_2_2">
          <div className="f_core_inside1">
            <div className="em1">
              <img className="hugecardimg" src={vide} alt="" />
              <img
                className="hugecardimg"
                src={tttt}
                alt=""
                // onClick={modelaffich()}
              />

              {/* <img className="hugecardimg" src={} alt="" /> */}
            </div>

            <div className="em2">
              <img className="hugecardimg" src={ttt} alt="" />
              <img className="hugecardimg" src={t} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={"bluredblack " + (state ? "bluredblackanim" : "")}
        onClick={() => setstate(!state)}
      ></div>
      <div className={"Model " + (state ? "Modelanim" : "")}>
        <div className="mainmodel">
          <img className="modelimg" src={tomato1} alt="" />
          {/* <div className="sevenbuttons"> */}
          <div className="Complete3" onClick={() => setstate(!state)}>
            Return
          </div>
          <div className="Cancel23"></div>
          <div className="Cancel3" onClick={() => setstate(!state)}>
            Remove
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Seventhscreen;
