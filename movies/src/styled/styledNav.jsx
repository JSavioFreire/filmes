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
    
`