import React from 'react';
import './menu_page.styles.css';
import { Divider } from '../../components/divider/divider.component';
import { MenuItem } from '../../components/menu-item/menu-item.component';
import { Footer } from '../../components/footer/footer.component';
import CarouselFinal from '../../components/carousel/carousel.component';
import { Title } from '../../components/title/title.component';
import { MenuData } from './menuData';

export const MenuPage = () => {
    const prSides = [
        'Arroz con Gandules (Puerto Rican Rice w/ Pigeon Peas)',
        'Puerto Rican Rice & Beans',
        'Authentic Puerto Rican Monfongo (Garlic Flavored Mashed Plantains with Chichotonnes)',
        'Tostones (Fried Green Plantains with a Cilantro Garlic Sauce)'
    ]

    const soulSides = [
        'Potato Salad',
        'Macaroni Salad',
        'Collard Greens',
        "Momma's Mac & Cheese",
        "Sweet Potatoes",
        'Side Salad',
        'Black Eyed Peas',
    ]

    return (
        <React.Fragment>
            <div className="menu_page">
                <Title />
                <Divider />
                <h2><u>Entrees</u></h2>
                <p className='menu-select'>Choose an Entree with any 3 Sides for $15</p>
                <br />
                <br />
                {MenuData.map((menuItem, listNum) =>
                    <React.Fragment key={listNum}>
                        <MenuItem
                            key={listNum}
                            index={listNum}
                            item={menuItem}
                        />
                        <Divider />
                    </React.Fragment>
                )
                }
                <div className="sides-block">
                    <div className='sides-left'>
                        <h4><u>Puerto Rican Sides</u></h4>
                        {prSides.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <p>{item}</p>
                                </React.Fragment>
                            )
                        })
                        }
                    </div>
                    <div className='sides-carousel'>
                        <CarouselFinal />
                    </div>
                    <div className='sides-right'>
                        <h4><u>Soul Sides</u></h4>
                        {soulSides.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <p>{item}</p>
                                </React.Fragment>
                            )
                        })
                        }
                    </div>
                </div>
                <br />
                <div className='disclaimer'>
                    <p>*Ask us about our GF and vegetarian options! Our chicken is organic and all produce has been locally sourced.</p>
                </div>
                <br />
                <Footer />
            </div>
        </React.Fragment>
    )
}