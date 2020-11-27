import React from 'react';
import './popup.styles.css'

export const PopUp = (props) => {
    return (
        <div className='pop-up'>
            <p className='close' onClick={() => props.handleClose(true)}>
                x
            </p>
            <div className="pop-up-text">
                <h1>New Special</h1>
                <p>Now serving BBQ and Buffalo Chicken with Fries! Visit our menu for more information.</p>
                <p>To Order:</p>
                <p>phone: (303) 517-7146</p>
                <p>email: raesandkays@gmail.com</p>
                <div className="popup-images">
                    <img alt='wings_1' src={require('../../images/wings_1.PNG')} />
                    <img alt='wings_2' src={require('../../images/wings_2.PNG')} />
                </div>
            </div>
        </div>
    )
}