import React from 'react';
import './menu.styles.css';
import { Divider } from '../components/divider/divider.component';
import { TextBox } from '../components/text-box/text-box.component';
import { MenuItems } from '../components/menu-items/menu-items.component';

export const MenuPage = () => {

    const captions = [
        "Rae's & Kay's Melting Pot is a family-owned, mother and daughter business that started out simply because of our strong passion and love for Puerto Rican and Soul Food.  ",
        "Our business thrives to create a balance between healthy and soul food with a tist of Spanish cuisine in-between."]

    const mixUp = [{
        "Momma's BBQ Chicken Dinner": "(Choose 3 sides)",
        "Momma's Southern Fried Chicken Dinner": "(Choose 3 sides)",
        "For Soup & Salad Lovers": "(Ask about the soup of the day)",
        "Wrap It Up": "(Chicken Salad, Tuna Salad, Turkey, Ham, Veggie Love)"
        },
        'yellow'
        ]

    const madsCuisine = [{
        "Madelyne's Rice & Bean Pork Chop Dinner": "(Choose any 2 sides)",
        "Pastelito Dinner": "(Chicken, Pork or Veggie) (Choose any 2 sides)",
        "Corn Beef Hash Dinner": '',
        "Rellenos de Papa": ""
        },
        'purple'
        ]

    const sides = [{
        "Mamma's Potato Salad": "",
        "Charkay's Mac & Cheese": "",
        "Mamma's Macaroni Salad": '',
        "Down South BBQ Backed Beans": "",
        "Charkay's Collard Green": "",
        "Madelyne's Arroz con Gandules": '',
        "Madelyne's Red Rice & Beans": ""
        },
        'white'
    ]

    return(
        <React.Fragment>
            <h1 className='menu-page-title'>RAE'S & KAY'S MELTING POT</h1>
            <Divider header={true}/>
            <TextBox content={captions[0]+captions[1]}></TextBox>
            <img 
                src={require('../images/chicken.JPG')}
                alt='chicken dinner'
                height='250em'
                width='350em'
            />
            <br />
            <MenuItems content={mixUp} title='THE MIX UP'/>
            <MenuItems content={madsCuisine} title="Madelyne's Puerto Rican Cuisine"/>
            <MenuItems content={sides} title="SIDE LOVERS"/>
            <Divider header={false}/>
        </React.Fragment>
    )
}