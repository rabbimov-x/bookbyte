import styled from "styled-components"


export const ReviewStyle = styled.div`
width: 100%;
height: fit-content;
overflow: hidden;
border-radius: 5px;
margin: ${({mr})=> mr ? mr : "30px 0"};
padding: 20px;
display: ${({display})=> display ? display : "block"};
background-color: var(--shade-1);
box-shadow: 0px 8px 16px rgba(25, 32, 56, 0.04);

.setataLeft{
    display: none;
    width: 50% !important;
    margin: 30px 0 auto 15px;
}
@media (max-width: 767px) {
    .AutorRight{
        width: 100% !important;
    }
    &> div> div:nth-child(1){
        width: 40% !important;
       
    }
    &>div> div:nth-child(3){
        width: 100% !important;
    }
}

@media (max-width: 576px) {
    .setataLeft{
        display: block;
    }
    .setataRight{
        display: none;
    }
    
    &> div> div:nth-child(1){
        width: 30%;
        /* margin: 0 auto; */
        padding-bottom: 15px;
    }
    &>div> div:nth-child(2){
        
    }
}

`