import styled  from "styled-components"

export const Main = styled.div`
width: 100%;
.slick-dots{
        bottom: 0px;
        li{
            button{
                &::before{
                    width: 8px;
                    height: 8px;
                    background-color: var(--secondary);
                    color: transparent;
                    border-radius: 50%;
                }
            }
        }
    }
    .slick-arrow::before{        
        color: var(--shade-6);
        display: none;

        &:hover{
            background-color: red;
        }
        @media (max-width: 576px) {
            display: none !important;
        }
    }
    /* .slick-arrow:hover::before{ */
        /* background-color: var(--secondary); */
        /* color: var(--shade-6); */
    /* } */
` 

