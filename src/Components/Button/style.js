import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;

font-weight: 900;
font-size: 17px;
line-height: 2px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;

display: flex;
justify-content: center;
align-items: center;

outline: none;
border: none;

&:hover{
    opacity: 0.7;
}
&:active{
    opacity: 0.5;
}
${props => props.children === "Novo Pedido" ? `
background-color: #D93856;
margin-top: 24px;`: `
background-color: rgba(255, 255, 255, 0.14);
margin-top: 65px;
`}
@media (max-width: 600px) {
    width: 100%;
    min-height: 68px;
    height: 100%;
  }
`