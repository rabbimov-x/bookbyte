import styled from "styled-components"



export const CarouselStyle = styled.div`
width: 100%;
margin: 30px 0;
.sliderall{
    width: 100%;
    min-height: 400px;
    /* background-color: var(--shade-6); */
    /* border-radius: 10px; */
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    .singleimg{
     width: 100%;
     height: 500px;
     display: flex;
     align-items: center;
     justify-content: center;
     overflow: hidden;
     &> img{
        min-width: 100%;
        min-height: 105%;
        z-index: 2;
        margin: auto;
     }
    }


    .slick-arrow::before{
        content: "<";
        
        font-family: var(--familyQ);
        font-weight: 400;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--shade-6);
        font-size: 30px;
        background: #FFFFFF;
        opacity: 1;
        border-radius: 50%;
        background-color: var(--shade-1);
        box-shadow: 0px 4px 8px rgba(25, 32, 56, 0.16);

        &:hover{
            background-color: red;
        }
        @media (max-width: 576px) {
            display: none !important;
        }
    }

    .slick-arrow:hover::before{
        background-color: var(--secondary);
        color: var(--shade-1);
    }
    .slick-prev{
        position: absolute;
        left: 15px;
        width: 48px;
        height: 48px;
        z-index : 1;
    &::before{
        content: "<";
        
    }
}    
    .slick-next{
        position: absolute;
        right: 15px;
        width: 48px;
        height: 48px;

    &::before{
        content: ">";
    }
}
    .slick-dots{
        bottom: 30px;
        li{
            button{
                &::before{
                    width: 12px;
                    height: 12px;
                    background-color: white;
                    color: transparent;
                    border-radius: 50%;
                    box-shadow: 0px 0px 8px rgba(25, 32, 56, 0.24);
                }
            }
        }
    }
}
`