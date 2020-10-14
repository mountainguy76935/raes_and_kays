import React from 'react';
import './popup.styles.css'

export const PopUp = (props) => {
    return(
        <div className='pop-up'>
            <p className='close' onClick={()=>props.handleClose(true)}>
                x
            </p>
        </div>
    )
}