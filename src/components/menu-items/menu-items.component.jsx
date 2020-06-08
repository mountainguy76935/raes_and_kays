import React from 'react';
import './menu-items.styles.css';

export const MenuItems = (props) => {

    const content=props.content[0]

    return(
        <div className='menu-items'>
            <h3 style={{color: props.content[1]}}>{props.title}</h3>
            {Object.keys(content).map(a => <p>{a}: {content[a]}</p>)}
        </div>
    )
}