import React from 'react';
import './item-description.styles.css';

export const ItemDescription = (props) => {
    return (
        <div className='item-description'>
            <div className='item-description-text'>
                <h3>
                    {props.item.name}
                </h3>
                <div className='item-description-spec'>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}