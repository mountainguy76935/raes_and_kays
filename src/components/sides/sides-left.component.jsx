import styled from 'styled-components'

export const SidesLeft = styled.div`
    @media screen and (max-width: 995px){
        grid-area: 2 / 1 / 2 / 1;
        margin-bottom: 15px;
        font-weight: bold
    }
    @media screen and (min-width: 995px){
        float: left;
        width: 20%;
        min-width: 250px;
        margin: auto;
        font-weight: bold
    }
    `