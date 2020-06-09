import React from 'react';
import { Divider } from '../../components/divider/divider.component';
import './home.styles.css';

export const HomePage = () => {
    return(
        <React.Fragment>
            <div className='home-page'>
                <img 
                    className='home-page-background'
                    src={require('../../images/wine_glasses.jpg')}
                    alt='wine glass background'
                    height= '100%'
                    width='100%'
                />
                <h2 className='home-page-title'>20% Off First Booking</h2>
                <h1 className='home-page-slogan' >Call us today! Deals this good don't last forever.</h1>
                <Divider header={true}/>
                <h2 className='home-page-title'>RAE'S & KAY'S MELTING POT</h2>
                <h2 className='home-page-title'>(303) 517-7146</h2>
                <h4>raesandkays@gmail.com</h4>
                <h2 className='home-page-ending'>Special thank you to Madelyne for sharing your culture with me. I appreciate all the hours we spent in the kitchen together. Love, Isha</h2>
            </div>
        </React.Fragment>
    )
}