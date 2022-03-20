import styled from "styled-components"



export const SearchStyle = styled.div`
overflow: hidden;
width: 70%;
background: var(--shade-1);
/* box-shadow: 0px 0px 0px 4px rgba(3, 132, 198, 0.12); */
border-radius: 5px;

&> form{
    width: 100%;
    height: auto;
}
`
SearchStyle.Button = styled.button`
width: ${({w})=> w ? w : "17%"};
height: auto;
display: flex;
justify-content: center;
align-items: center;
border: none;
background-color: var(--primary);
outline: none;
font-family: var(--familyR);
font-style: normal;
font-weight: 500;
font-size: var(--size16);
line-height: 140%;
color: var(--shade-1);
position: relative;
`

SearchStyle.Input = styled.input`
width: ${({w})=> w ? w : "83%"};
background-color: transparent;
outline: none;
padding: 12px 16px;
 border: none;
 &::placeholder{
    font-family: var(--familyR);
    font-style: normal;
    font-weight: 400;
    font-size: var(--size15);
    line-height: 140%;
    color: var(--shade-6);
    
 }
`

SearchStyle.X =styled.div`
width: fit-content;
height: fit-content;
position: absolute;
left: -32px;
display: ${({display})=> display !== "" ? "block" : "none"};
transition: all 0.1s linear;
&:hover{
    transform: scale(1.05);
}
`


