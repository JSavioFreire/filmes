import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    flex-wrap: wrap;
    padding: 10px 0;
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
    @media screen and (max-width: 768px){    
            font-size: 15px;
    }
`
export const SearchHeader = styled.div`
    
    .search{
        width: 200px;
        height: 25px;
        border-radius: 10px;
        padding-left: 10px;
        border: 0;
        :focus{
        outline: 0;
        }
    }
    
    .bt{
        padding: 5px;
        border-radius: 10px;
        margin-left: 5px;
        background-color: ${({theme})=>{
            return theme.colors.primary
        }};
        color: white;
        cursor: pointer;
        :hover{
            background-color: ${({theme})=>{
                return theme.colors.darkPrimary
            }};
        }
    }
    @media screen and (max-width: 768px){    
        width: 100%;
        text-align: center;
        .search{
            width: 70%;
            margin-top: 10px;
        }
        .bt{
            width: 15%;
        }
    }
    
`