import styled from "styled-components"

export const CardStyle = styled.div`
width: 100%;
height: 470px;
padding: 20px;
box-shadow: 0px 8px 16px rgba(25, 32, 56, 0.04);
border-radius: 5px;
margin: 30px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--shade-1);

.card-p{
    width: 100%;
    padding: 10px 0 ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`

CardStyle.Img = styled.div`
overflow: hidden;
border-radius: 2px;
width: 100%;
background-color: var(--shade-6);
height: var(--card-img);
.imgOfPaper{
    overflow: hidden;
    height: 100%;
    &> img{
        height: var(--card-img);
        width: auto;
        min-height: 100%;
        min-width: 100%;
    }
}
`