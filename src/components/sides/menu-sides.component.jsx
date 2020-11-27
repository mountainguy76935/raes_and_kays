import React from 'react';
import { SidesBlock } from './sides-block.component';
import { SidesRight } from './sides-right.component';
import { SidesLeft } from './sides-left.component';
import { SidesCarousel } from './sides-carousel.component'
import CarouselFinal from '../../components/carousel/carousel.component';

export const MenuSides = (props) => {
    const [prSides, setPrSides] = React.useState([]);
    const [soulSides, setSoulSides] = React.useState([]);

    React.useEffect(() => {
        let sidesTest = [...props.sides];
        setPrSides([...sidesTest.filter(a => a.genre === 'Puerto Rican')])
        setSoulSides([...sidesTest.filter(a => a.genre === 'Soul')])
    }, [props.sides])

    return (
        <SidesBlock>
            <SidesLeft>
                <h4><u>Puerto Rican Sides</u></h4>
                {prSides.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <p>{item.name}</p>
                        </React.Fragment>
                    )
                })
                }
            </SidesLeft>
            <SidesCarousel>
                <CarouselFinal data={props.carousel}/>
            </SidesCarousel>
            <SidesRight>
                <h4><u>Soul Sides</u></h4>
                {soulSides.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <p>{item.name}</p>
                        </React.Fragment>
                    )
                })
                }
            </SidesRight>
        </SidesBlock>
    )
}