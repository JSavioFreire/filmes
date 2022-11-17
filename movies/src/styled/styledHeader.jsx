import styled from "styled-components";

export const HeaderS = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) =>{
        return theme.colors.primary
    }};
    background-color: ${({theme}) =>{
        return theme.colors.darkBackground
    }};
    h1{
        font-size: 40px;
        font-family: ${({theme})=>{
            return theme.fonts.primary
        }};
    }
`
