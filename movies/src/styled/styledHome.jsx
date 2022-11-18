import styled from "styled-components";

export const Flex = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    a{
        text-decoration: none;
        color: white;
    }
    h1{
        width: 100%;
        color: white;
        text-align: center;
        font-size: 35px;
    }
    @media screen and (max-width: 768px){    
        flex-direction: column;
        justify-content: center ;
    }
`

export const EachMovie = styled.div`
    background-color: ${({theme}) =>{
        return theme.colors.primary
    }};
    width: 250px;
    height: 420px;
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
    @media screen and (max-width: 768px){    
        width: 320px;
        text-align: center;
        
    }
    
`