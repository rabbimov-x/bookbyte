import styled from "styled-components"



export const CarouselStyle = styled.div`
width: 100%;
.sliderall{
    width: 100%;
    min-height: 400px;
    background-color: var(--shade-6);
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;



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
    }

    .slick-arrow:hover::before{
        background-color: var(--secondary);
        color: var(--shade-1);
    }
    .slick-prev{
        position: absolute;
        left: 20px;
        width: 48px;
        height: 48px;
        z-index : 1;
    &::before{
        content: "<";
        
    }
}    
    .slick-next{
        position: absolute;
        right: 20px;
        width: 48px;
        height: 48px;

    &::before{
        content: ">";
    }
}
    .slick-dots{
        bottom: 10px;
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