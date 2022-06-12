import styled from "styled-components"



export const AboutStyled = styled.div`
width:  100%;
height: auto;
overflow-x: hidden;
background-color: var(--shade-2);
`
export const Header = styled.div`
width:  100%;
height: auto;
background-color: var(--shade-2);
`

export const OurGenres = styled.div`
width: 100%;
background: #F2F5FC;
display: flex;
flex-wrap: wrap;
padding: 30px 75px;
justify-content: center;
margin-top: 60px;
@media (max-width: 576px) {
    padding: 30px 10px;
}
`
export const ButtonG = styled.button`
outline: none;
border: none;
position: relative;
top: calc((-50px - 4vw));
width: 25vw;
height: 25vw;
margin: 15px;
background: rgb(157 204 228);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.1s linear;
&:hover{
    transform: scale(1.07);
}
transition: all 0.1s linear;
&:active{   
    transform: scale(1.03);
}

`
export const OurValue = styled.div`
width: 100%;
padding: 0 30px;
display: flex;
flex-wrap: wrap;

.leftTitle{
    width: 100%;
    padding-right: 10%;
    height: auto;
    @media (max-width: 934px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
.rightImg{
    width: 70%;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 934px) {
        margin: 30px 0;
        width: 100%;
    }
}


`