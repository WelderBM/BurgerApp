import styled, { keyframes } from "styled-components";

const changeOpacity = keyframes`
    from{
    opacity: 0;
    }
    to{
    opacity: 1;
    }
`
export const Conteiner = styled.div`
border-radius: 20px;
background-color: #0A0A10;
padding: 10px 36px 50px 36px;
margin: 20px;
animation: ${changeOpacity} 1s ease-out forwards;
@media (max-width: 600px) {
    margin:0;
    width: 100vw;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`


