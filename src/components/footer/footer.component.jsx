import React from 'react';
import { Trademark } from '../trademark/trademark.component';
import './footer.styles.css';

export const Footer = () => {
    return (
        <div className='menu-footer'>
            <div className='footer-left'>
                <h5><u>For Orders:</u></h5>
                <span><p>phone: (303) 517-7146</p></span>
                <span><p>email: <a href="mailto:raesandkays@gmail.com">raesandkays@gmail.com</a></p></span>
            </div>
            <div className='footer-right'>
                <Trademark />
            </div>
        </div>
    )
}