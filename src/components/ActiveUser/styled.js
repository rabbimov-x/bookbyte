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

.userleft{
    width: 50%;
}

.raundImg{
    width: 48px;
    height: 48px;
    background-color: var(--shade-6);
    border-radius: 50%;
    overflow: hidden;
    &> img{
        width: 100%;
        height: 48px;
        object-fit: cover;
    }
}

&:hover{
    background-color: var(--shade-2);
}
`