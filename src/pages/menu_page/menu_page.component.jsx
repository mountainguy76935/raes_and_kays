import React from 'react';
import { Divider } from '../../components/divider/divider.component';
import { MenuItem } from '../../components/menu-item/menu-item.component';
import { Footer } from '../../components/footer/footer.component';
import { Title } from '../../components/title/title.component';
import { MenuStyle } from '../../components/menu/menu-style.component';
import { MenuSides } from '../../components/sides/menu-sides.component';
import { MenuSelect } from '../../components/menu/menu-select.component';
import { MenuDisclaimer } from '../../components/menu/menu-disclaimer.component'

export const MenuPage = (props) => (
    <React.Fragment>
        <MenuStyle>
            <Title />
            <Divider />
            <h2><u>Entrees</u></h2>
            <MenuSelect>
                {props.data.description} ${props.data.price}
            </MenuSelect>
            <br />
            <br />
            {props.data.entreeItems ?
                props.data.entreeItems.map((menuItem, listNum) =>
                    <React.Fragment key={listNum}>
                        <MenuItem
                            key={listNum}
                            index={listNum}
                            item={menuItem}
                        />
                        <Divider />
                    </React.Fragment>
                ) : null
            }
            {props.data.sideItems ?
                <MenuSides
                    sides={props.data.sideItems}
                    carousel={props.data.carouselItems}
                /> :
                null}
            <br />
            <MenuDisclaimer>
                <p>*{props.data.disclaimer}</p>
            </MenuDisclaimer>
            <br />
            <Footer />
        </MenuStyle>
    </React.Fragment>
)