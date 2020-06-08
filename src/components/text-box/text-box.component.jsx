import React from 'react';
import './text-box.styles.css';

export const TextBox = (props) => {
    return(
        <div className='text-box'>
            {props.content}
        </div>
    )
}