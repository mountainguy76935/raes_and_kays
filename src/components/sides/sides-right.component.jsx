import styled from 'styled-components'

export const SidesRight = styled.div`
    @media screen and (max-width: 995px){
        grid-area: 3 / 1 / 3 / 1;
        min-width: 250px;
        font-weight: bold
    }
    @media screen and (min-width: 995px){
        float: right;
        width: 20%;
        margin: auto;
        font-weight: bold
    }
    `