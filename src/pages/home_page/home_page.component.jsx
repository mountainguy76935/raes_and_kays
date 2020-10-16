import React from 'react';
import { Title } from '../../components/title/title.component';
import { Footer } from '../../components/footer/footer.component';
import { PopUp } from '../../components/popup/popup.component';
import './home_page.styles.css'

export const HomePage = (props) => {

    const aboutUs = [
        ["Rae's & Kay's Melting Pot is a black-owned family business which has been in the making for over six years.  After years of people telling my daughter Isha and I that we need to sell our food we decided to just go for it. Raised in Georgia, I remember being woken up by my Aunt Anabelle at 5:30 every morning to learn how to cook. I have carried her recipes and passion for Soul Food with me for over 40 years.", require('../../images/Rae_And_Kay.jpeg'), 'left', 'Rae and Kay'],
        ["Isha spent years in the kitchen with Madeline, my granddaughter's grandmother, by her side, learning to cook Puerto Rican food. Madeline, who was born in Puerto Rico, brought her family recipes to the United States where she shared them with those she loved. With Madeline's inspiration, Isha and I have taken our passion for cooking and opened up our own business: Rae's and Kay's Melting Pot. We are currently working out of a commissary kitchen but dream of having either a food trailer, a food truck, or even our own restaurant.", require('../../images/Full_dish.jpg'), 'right', 'delicious soul food'],
        ["If you have a passion for great food or love the idea of supporting a new, small business (especially during these difficult times) please place an order. Call or email for some of the best Puerto Rican & Soul Food your taste buds have ever encountered. Thank you & bless you for your support."]
    ]

    return(
        <div className="home_page">
            <Title title={true}/>
            {!props.popup ? <PopUp handleClose={props.handleClose}/> : null}
            <p>Authentic Puerto Rican/Soul Food</p>
            {aboutUs.map((paragraph, index)=>{
                return(
                <div className="about_paragraph" key={index}>
                    {paragraph[1] ? <img src={paragraph[1]} alt={paragraph[3]} style={{float: paragraph[2]}}/> : null}
                    <p className="floated-text">{paragraph[0]}</p>
                </div>
                )
            })}
            <br />
            <br />
            <Footer />
        </div>
    )
}