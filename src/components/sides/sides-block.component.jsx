import styled from 'styled-components'

export const SidesBlock = styled.div`
    width: 90%;
    text-align: left;
    margin: auto;
    @media screen and (max-width: 995px){
        display: grid;
        grid-template-columns: 90%;
        grid-template-rows: auto auto auto;
        padding: 3%
    }
    @media screen and (min-width: 995px){
        display: flex;
        flex-flow: row wrap;
        padding: 3%;
        justify-content: space-between
    }
    `