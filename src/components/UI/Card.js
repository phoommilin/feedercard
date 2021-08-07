import React, { useState } from 'react';
import './Card.scss';
import Star from '../../images/star.png';
import Chartjs from '../Chart/Chart';

const Card = ({title, topRightText, topRightNumber, dataTitle, dataNumber, icon}) => {

    const [active, setActive] = useState('');
    

    return (
        <div onClick={() => setActive('active')} className={`card px-5 overflow-hidden ` + active}>
            <div className="card-content">
                <div className="flex mt-3">
                    <img className="card-icon w-4 h-4 object-contain mr-3" src={icon}></img>
                    <span className="card-title text-sm flex-grow leading-4">{title}</span>
                    <div>
                        <p className="card-top-right-title text-xxs text-right mb-0">{topRightText}</p>
                        <p className="card-top-right-number text-2xl leading-6 text-right" style={{color: "#00FFB2"}}>{topRightNumber}</p>
                    </div>
                </div>
                <div>
                    <p className="text-sm leading-5" style={{color: "rgba(255, 255, 255, 0.5)"}}>{dataTitle}</p>
                    <p className="text-2xl leading-6">{dataNumber}</p>
                </div>
            </div>
            <Chartjs/>
        </div>
    )

}

export default Card