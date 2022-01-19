import styled from "styled-components";

export const ConteinerItem = styled.div`
display: flex;
justify-content: space-between;
padding: 15px 15px 15px 30px;
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-bottom: 20px;
@media (max-width: 600px) {
    width: 100%;
  }
`
export const DivLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`
export const OrderLabel = styled.p`
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`
export const NomeLabel = styled.p`
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`
export const TrashIcon = styled.img`
display: flex;
align-self: center;
width: 24px;
height: 28px;
&:hover{
    opacity: 0.7;
}
&:active{
    opacity: 0.5;
}
`