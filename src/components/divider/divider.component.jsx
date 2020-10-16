import React from 'react';
import './divider.styles.css'

export const Divider = (props) => {
    return(
        <div className='divider_container'>
            <div className='divider-line'>
                <div className='end_square'>
                </div>
            </div>
            <div className='divider-line'>
            <div className='end_square right'>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}