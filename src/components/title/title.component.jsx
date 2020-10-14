import React from 'react';
import './title.styles.css';
import Leaf from '../../images/leaf.png'

export const Title = (props) =>
    <div className='menu_header'>
        <img
            src={Leaf}
            width='90px'
            height='90px'
        />
        <div className='menu_title'>
            <div className='menu_title__line1'>Rae's<br/>& Kay's</div>
            <div className='menu_title__line2'>Melting Pot</div>
        </div>
    </div>