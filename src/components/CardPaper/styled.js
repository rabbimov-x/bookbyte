import styled from "styled-components"

export const CardStyle = styled.div`
width: 100%;
height: fit-content;
padding: 20px;
box-shadow: 0px 8px 16px rgba(25, 32, 56, 0.04);
border-radius: 5px;
background-color: var(--shade-1);

`

CardStyle.Img = styled.div`
overflow: hidden;
border-radius: 2px;
width: 100%;
background-color: var(--shade-6);
height: ${({audio})=>audio ? "189px" : "283px"};
`