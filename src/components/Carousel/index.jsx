import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarouselStyle } from "./styled";

const Carousel = ({data})=>{
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <CarouselStyle>
            <h2> Single Item</h2>
        <Slider {...settings} className = "sliderall">
          {
            data.map((data, index)=>{
              return(
                <div  key={index} className="singleimg">
                  <img src={data.imgUrl} width = "auto" alt="error" />
                  <h1>1</h1>
                </div>
              )
            })
          }
        </Slider>
        </CarouselStyle>
    )
}
export default Carousel