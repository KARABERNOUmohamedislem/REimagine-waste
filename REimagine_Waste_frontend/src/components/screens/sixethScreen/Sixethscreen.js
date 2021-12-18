import React from "react";
import "./sixethscreen.css";
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
import LargeCardSearch2 from "../../LargeCardSearch2/LargeCardSearch2";
const Sixethscreen = (props) => {
  return (
    <div
      className="fourthscreen"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className="f_header">
        <div className="f_header_1">
          <p className="text">Learning mode</p>
        </div>
        <div className="f_header_2">
          <Button to="/function" name="Home" />
        </div>
      </div>

      {/* dddddddddddddddddd */}
      <div className="f_core">
        <div className="f_core_12">
          <LargeCardSearch2 />
        </div>
      </div>
    </div>
  );
};

export default Sixethscreen;
