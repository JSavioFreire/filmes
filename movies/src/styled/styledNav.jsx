import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    a{
        color: white;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 10px;
    }
    .active{
        background-color: ${({theme}) =>{
            return theme.colors.primary
        }};
        border: 0.1px solid white;
    }
`