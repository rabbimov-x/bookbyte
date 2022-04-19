import styled from "styled-components"

export const ArticliStyle = styled.div`
width: 100%;
height: fit-content;
overflow: hidden;
border-radius: 5px;
margin: 30px 0;
display: ${({display})=> display ? display : "block"};
background-color: var(--shade-1);
box-shadow: 0px 8px 16px rgba(25, 32, 56, 0.04);

.minHeight{
    min-height: 103px;
}

`

ArticliStyle.Img = styled.div`
width: ${({w})=> w ? w : "100%"};
height: ${({h})=> h ? h : "200px"};
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--shade-6);

&> img{
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: 130%;
}

`