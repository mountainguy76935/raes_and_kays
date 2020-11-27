import styled from 'styled-components'

export const SidesCarousel = styled.div`
    @media screen and (max-width: 995px){
        grid-area: 1 / 1 / 1 / 1;
        margin: auto;
        width: 100%;
        margin-bottom: 15px;
    }
    @media screen and (min-width: 995px){
        width: 50%;
        min-width: 250px;
        margin: auto
    }
    `