import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
import './item-description.styles.css';

export const ItemDescription = (props) => {

    return (
        <div className='item-description'>
            <div className='item-description-text'>
                {props.edit ?
                    <React.Fragment>
                        <TextareaAutosize
                                aria-label="empty textarea"
                                cols={40}
                                value={props.itemName}
                                type="text"
                                onChange={e => props.setItemName(e.target.value)}
                                placeholder='Entree Name'
                            />
                        <br />
                    </React.Fragment> :
                    <h3>
                        {props.itemName}
                    </h3>}
                <div className='item-description-spec'>
                    {props.edit ?
                        <React.Fragment>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                cols={40}
                                value={props.itemDescription}
                                type="text"
                                onChange={e => props.setItemDescription(e.target.value)}
                                placeholder='Entree Description'
                            />
                        </React.Fragment> :
                        <p>{props.itemDescription}</p>
                    }
                </div>
            </div>
        </div>
    )
}