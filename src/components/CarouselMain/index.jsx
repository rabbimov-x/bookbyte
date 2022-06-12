import React from "react";
import { Main } from "./styled";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselMain =(props)=>{
    const settings = {
        dots: true,
        infinite: true,
        centerPadding: "60px",
        // autoplay: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint:1920,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint:1320,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint:992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint:767,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              }
              
            },
            {
              breakpoint:576,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
                dots: true,
              },
              state: {
                display: true,
                width: 90,
              }
            },
            {
              breakpoint:470,
              settings: {
              //   className: "center",
              centerMode: true,
                centerPadding: "30px",
                slidesToShow: 1,
              },
              state: {
                display: true,
                width: 100
              }
            }
      
          ]
      };
    return(
        <Main  >
            <Slider {...settings}>
                { props.children }
            </Slider>
        </Main>
    )
}

export default CarouselMain;