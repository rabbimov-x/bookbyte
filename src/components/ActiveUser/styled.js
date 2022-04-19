import styled from "styled-components"


export const AcitveStyle = styled.div`
width: 100%;
height: 68px;
padding: 10px;
padding: 10px 10px 10px 20px;
display:  flex;
justify-content: space-between;
align-items: center;
background-color: var(--shade-1);
margin-top: 1px;


.raundImg{
    width: 48px;
    height: 48px;
    background-color: var(--shade-6);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &> img{
        width: auto;
        height: auto;
        max-width: 130%;
        min-width: 100%;
    }
}

&:hover{
    background-color: var(--shade-2);
}
`