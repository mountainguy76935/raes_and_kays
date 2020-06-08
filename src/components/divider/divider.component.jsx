import React from 'react';
import './divider.styles.css'

export const Divider = (props) => {
    return(
        <div className='divider_container'>
            <div className='divider-line1'>
                <div className='end_square'>
                </div>
            </div>
            {props.header ?
                <img 
                src={require('../../images/fork_knife.jpg')}
                alt="fork and knife symbol" 
                height='30px' 
                width='30px'
            /> :
            null}
            <div className='divider-line2'>
            <div className='end_square right'>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}