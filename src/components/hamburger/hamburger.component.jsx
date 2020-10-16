import React from 'react';
import './hamburger.styles.css';


export const Hamburger = (props) => {
    return (
        <div
            className='nav-hamburger'
            onClick={() => props.handleClick(!props.toggled)}
        >
            <div className={!props.toggled ? "line" : 'line active'}></div>
            <div className={!props.toggled ? "line bel" : 'line bel active'}></div>
            <div className={!props.toggled ? "line bel" : 'line bel2 active'}></div>
        </div>
    )
}