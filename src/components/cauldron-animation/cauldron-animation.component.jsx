import React from 'react';
import './cauldron-animation.styles.css';
import Cauldron from '../../animations/cauldron.svg';

export const CauldronAnimation = () => {

    return (
        <div className='cauldron-svg-container'>
            <div className='cauldron-svg-title-left'>RAE'S & KAY'S&nbsp;</div>
        <div className='cauldron-svg-title-right'>MELTING POT</div>
            <div className='cauldron-svg-animation'>
                <object type="image/svg+xml" data={Cauldron}>svg-animation</object>
            </div>
        </div>
    )
}