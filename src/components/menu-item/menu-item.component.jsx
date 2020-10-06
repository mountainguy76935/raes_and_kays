import React from 'react';
import CarouselFinal from '../carousel/carousel.component';
import { ItemDescription } from '../item-description/item-description.component';
import './menu-item.styles.css';

export const MenuItem = (props) => {
    React.useEffect(() => console.log(props))

    return (
        <React.Fragment>
            {
                props.index % 2 !== 0 ?
                    <div className='menu-item-row' style={{flexFlow: 'row wrap-reverse'}}>
                        <CarouselFinal />
                        <ItemDescription
                            {...props}
                        />
                    </div> :
                    <div className='menu-item-row' style={{flexFlow: 'row wrap'}}>
                        <ItemDescription
                            {...props}
                        />
                        <CarouselFinal />
                    </div>
            }
        </React.Fragment>
    )
}