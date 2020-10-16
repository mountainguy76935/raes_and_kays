import React from 'react';
import './popup.styles.css'

export const PopUp = (props) => {
    return (
        <div className='pop-up'>
            <p className='close' onClick={() => props.handleClose(true)}>
                x
            </p>
            <div className="pop-up-text">
                <h1>Grand Opening!</h1>
                <p>Please join us for our grand opening on October 24th. We are taking preorders now and will be available to take your orders on the 24th between 2 and 4.</p>
                <p>phone: (303) 517-7146</p>
                <p>email: raesandkays@gmail.com</p>
            </div>
        </div>
    )
}