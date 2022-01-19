import styled from "styled-components";

export const Title = styled.h1`
font-weight: bold;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
${props => props.inNewOrder ? `
margin-top: 25px;
margin-bottom: 75px`: `
margin-top: 35px;
margin-bottom: 50px`
    }
`