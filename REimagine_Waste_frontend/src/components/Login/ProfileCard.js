import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./ProfileCard.css";



const ProfileCard = (props) => {

  return (
    <Link to={props.to} className="MainContainerCard">
          <img className='user image' src={props.imgsrc} alt=''/>
          
      
        <div className="title profile">{props.name}</div>
    </Link>
  );
};

export default ProfileCard;
