import styled from "styled-components"



export const SearchStyle = styled.div`
overflow: hidden;
width: ${({w})=> w ? w : "35%" };
height: fit-content;
background: var(--shade-1);
/* box-shadow: 0px 0px 0px 4px rgba(3, 132, 198, 0.12); */
border-radius: 5px;

&> form{
    width: 100%;
    height: auto;
}

@media (max-width: 992px) {
    width: ${({w})=> w ?  `calc(${w}*1.2)` : "42%"};
}
@media (max-width: 767px) {
    
        width: ${({w})=> w ?  `calc(${w}*1.6)` : "55%"};
    
}
@media (max-width: 576px) {
    width: ${({w})=> w ?  `calc(${w}*1.8)` : "63%"};

   /* .searchicon{
       display:none;
   } */
   input{
       padding: 5px  0 5px 10px ;
   }

}
`
SearchStyle.Button = styled.button`
width: ${({w})=> w ? w : "24%"};
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
margin: -5px -5px -5px 0;
`

SearchStyle.Input = styled.input`
/* width: ${({w})=> w ? w : "77%"}; */
flex: 1;
background-color: transparent;
outline: none;
padding: 0px 16px  0 0;
font-family: var(--familyR);
    font-style: normal;
    font-weight: 400;
    font-size: var(--size16);
    line-height: 140%;
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


