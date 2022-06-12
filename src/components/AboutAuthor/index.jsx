import React from "react";
import { AuthorStyle, Artecle } from "./styled";
import {  Button } from "../../GlobalStyle";

const AboutAuthor = ({data})=>{
    return (
        <AuthorStyle className="tm-mb-1" id="about">
            
                <AuthorStyle.Img >
                    <img src="./assets/images/jpg/book2.jpg" alt="error" className="tm-img-responsive" />
                </AuthorStyle.Img>
                <Artecle className="tm-section-1-r tm-bg-color-8">
                    <h2 className="tm-mb-2 tm-title-color">Ipsum dolor.</h2>
                    <p>   is a custom light-weight CSS layout for your website. You can easily adapt and use this for your commercial or personal websites. Feel free to use it.</p>
                    <p>You cannot redistribute this template ZIP file in any template collection website. Please  if you have any question.</p>
                    <p>Nunc sed gravida elit. Curabitur rutrum elit id lobortis viverra. Fusce at libero dui.</p>
                    
                    <Button className="btn-p" cl = "--cl-white" pd = "15px 40px" size = "--size18" brr = "0" bgh = "--shade-7">More Detail</Button>
                </Artecle>
            
        </AuthorStyle>
    )
}

export default AboutAuthor