import React from "react";
import "./fifthscreen.css";
// import "../css/index.css";
import { useEffect } from "react";
// import Card2 from "../../Card2/Card2";
import Button from "../../Button/Button";
import HugeCard from "../../HugeCard/HugeCard";
import carrots from "../../../img/fourthscreen/carrots.png";
import meat from "../../../img/fourthscreen/meat.png";
import apple from "../../../img/fourthscreen/apple.png";
import tomato from "../../../img/fourthscreen/tomato.png";
import WideCard from "../../WideCard/WideCard";
import LargeCard from "../../LargeCard/LargeCard";
import Delete from "../../../img/3rdscreen/trash_full.png";
import LargeCardSearch from "../../LargeCardSearch/LargeCardSearch";
const Fifthscreen = (props) => {
  return (
    <div
      className="fourthscreen"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className="f_header">
        <div className="f_header_1">
          <p className="text">Smart Weighing</p>
        </div>
        <div className="f_header_2">
          <Button to="/waste" name="Automatic Mode" />
        </div>
      </div>

      {/* dddddddddddddddddd */}
      <div className="f_core">
        <div className="f_core_1">
          <LargeCardSearch />
        </div>
        <div className="f_core_2">
          <div className="f_core_inside1">
            <div className="inside_p1">
              <LargeCard
                imgsrc={tomato}
                weight="1.53Kg"
                name="Tomato"
                price="84"
                color="white"
              />
              <LargeCard
                imgsrc={meat}
                weight="2.3Kg"
                name="Red Meat"
                price="3200"
                color="white"
              />

              <LargeCard
                active={false}
                imgsrc={apple}
                weight="7.3Kg"
                name="Apples"
                price="780"
                color="white"
              />
              {/* <div className="selectedcard"></div> */}
              <LargeCard
                // className="selectedprop"
                active={true}
                imgsrc={carrots}
                weight="2.5Kg"
                name="Carrots"
                price="250"
                color=""
              />
            </div>

            <div className="inside_p2">
              <div className="Deletecard">
                <img className="carbage" src={Delete} alt="Delete" />
              </div>
              <div className="Deletecard">
                <img className="carbage" src={Delete} alt="Delete" />
              </div>
              <div className="Deletecard">
                <img className="carbage" src={Delete} alt="Delete" />
              </div>
              <div className="Deletecard">
                <img className="carbage" src={Delete} alt="Delete" />
              </div>
            </div>
          </div>
          <div className="f_core_inside2">
            <div className="inside_p2_1">
              <div className="text2">Total Weight :</div>
              <div className="title2">4.53 kg</div>
              <div className="text2">Total Price :</div>
              <div className="title2">4500 Da</div>
            </div>
            <div className="inside_p2_2">
              <a href="/function" className="Complete">
                Complete
              </a>
              <a href="/function" className="Cancel">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthscreen;
