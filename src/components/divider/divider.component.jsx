import React from 'react';
import './divider.styles.css'

export const Divider = (props) => {
    return(
        <div className='divider_container'>
            <div className='divider-line1'>
                <div className='end_square'>
                </div>
            </div>
            <div className='divider-line2'>
            <div className='end_square right'>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}