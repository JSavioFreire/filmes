import styled from "styled-components";

export const Flex = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between
`

export const EachMovie = styled.div`
    background-color: ${({theme}) =>{
        return theme.colors.primary
    }};
    width: 250px;
    height: 380px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid black;
    text-align: center;
    h2{
        font-size: 17px;
        font-weight: 400;
        width: 80%;
    }
`