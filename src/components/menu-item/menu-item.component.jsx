import React from 'react';
import CarouselFinal from '../carousel/carousel.component';
import { ItemDescription } from '../item-description/item-description.component';
import './menu-item.styles.css';

export const MenuItem = (props) => {
    return (
        <React.Fragment>
            {
                props.index % 2 !== 0 ?
                    <div className='menu-item-row' style={{flexFlow: 'row wrap-reverse'}}>
                        <img 
                            src={props.item.image} 
                            alt={props.item.name} 
                        />
                        <ItemDescription
                            {...props}
                        />
                    </div> :
                    <div className='menu-item-row' style={{flexFlow: 'row wrap'}}>
                        <ItemDescription
                            {...props}
                        />
                        <img 
                            src={props.item.image} 
                            alt={props.item.name} 
                        />
                    </div>
            }
        </React.Fragment>
    )
}