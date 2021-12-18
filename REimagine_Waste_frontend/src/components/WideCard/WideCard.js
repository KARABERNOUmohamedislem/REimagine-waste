import React from 'react'
import './wideCard.css'
import img from '../../image/user1.png';


function WideCard(props) {
    return (
        <div className='widecard maincontainer'>
            <div className='imginfo'>
                <img className='image widecard' src={img} alt=''/>
                <div className='infocontainer'>
                <div className="text product">{props.product}</div>
                <div className="text weight">{props.weight}</div>
                </div>
            </div>
            <div className="text price">{props.price}</div>

        </div>
    )
}

export default WideCard;
