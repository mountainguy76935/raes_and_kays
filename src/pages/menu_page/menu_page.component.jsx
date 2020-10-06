import React from 'react';
import './menu_page.styles.css';
import { Divider } from '../../components/divider/divider.component';
import { MenuItem } from '../../components/menu-item/menu-item.component';
import { Footer } from '../../components/footer/footer.component';
import { Title } from '../../components/title/title.component';
import { Data } from '../../data/menuData';

export const MenuPage = () => {

    return (
        <React.Fragment>
            <br />
            <Title />
            <Divider />
            <div className="menu_page">
                {Data.map((menuItem, listNum) =>
                    <MenuItem
                        key={listNum}
                        index={listNum}
                        item={menuItem}
                    />
                )
                }
                <Footer />
            </div>
        </React.Fragment>
    )
}