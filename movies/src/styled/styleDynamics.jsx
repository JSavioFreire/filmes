import styled from "styled-components";

export const Dynamic = styled.section`
    width: 80%;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    overflow-x: hidden;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1{
        font-weight: 400;
        font-size: 45px;
    }
    p{
        font-size: 18px;
        margin-top: -40px;
    }
    article{
        width: 400px;
        margin-top: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
    
    section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 20px ;
    }
    img{
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){    
        margin-top: 0;
        section{
            flex-direction: column;
        }
        p{
            margin-top: 0px;
            width: 90%;
            text-align: center;
        }
        
    }
`