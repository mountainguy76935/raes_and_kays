import React from 'react';
import './item-description.styles.css';

export const ItemDescription = (props) => {
    return (
        <div className='item-description'>
            <div className='item-description-text'>
                <h1>
                    {props.item.day}
                </h1>
                <span>
                    <p>{props.item.name}</p>
                </span>
                <div className='item-description-spec'>
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                </div>
            </div>
        </div>
    )
}