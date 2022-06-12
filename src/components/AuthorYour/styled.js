import styled from "styled-components"

export const Author = styled.div`
width: 100%;
height: fit-content;
padding:  0 20px;
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0;
&> div{
    text-align: center;
}
`
Author.Img = styled.div`
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
border-radius: 50%;
box-shadow: 0px 4px 8px rgba(25, 32, 56, 0.16);
background-color: var(--shade-6);
&> img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`