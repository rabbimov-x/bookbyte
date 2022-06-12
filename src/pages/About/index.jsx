import React from "react";

import { useSelector } from "react-redux";
import {  Col2,   Container, Div, Img, P } from "../../GlobalStyle";
import Footer from "../../components/Footer";
import AuthorEach from "../../components/AuthorYour";
import { useEffect } from "react";
import { AboutStyled,  ButtonG,  OurGenres, OurValue } from "./styled";


const About = () =>{
    const state = useSelector((state)=>state);
    const data = {
        books: state.home.books,
        single: state.home.single,
        outhor: state.home.outhor,
        threeBooks: state.home.threeImgBook,
    }
    useEffect(()=>{
        console.log(state)
    },[state])
    return(
        <AboutStyled>
            
            <Container>    
            <Container  pd = " 0 10% " h = "600px">
                <Div w= "100%" textC = "center">
                    <P  bold = "700" size = "--size32" mr = "40px auto">
                        We combine our experience and 
                        passion to develop solutions that 
                        empower level.
                        </P>
                </Div>
                    <P l bold = "600" size = "--size23">
                        voluptas veritatis ea perspiciatis a natus? Tenetur sint facilis iusto, quia quaerat iure accusamus amet optio ea repudiandae, quas repellat illum error voluptate sed magnam quibusdam saepe numquam. Vitae reiciendis, aliquid exercitationem 
                        voluptas veritatis ea perspiciatis a natus? Tenetur sint facilis iusto, quia quaerat iure accusamus amet optio ea repudiandae, quas repellat illum error voluptate sed magnam quibusdam saepe numquam. Vitae reiciendis, aliquid exercitationem 
                        voluptas veritatis ea perspiciatis a natus? Tenetur sint facilis iusto, quia quaerat iure accusamus amet optio ea repudiandae, quas repellat illum error voluptate sed magnam quibusdam saepe numquam. Vitae reiciendis, aliquid exercitationem 
                       
                        voluptas veritatis ea perspiciatis a natus? Tenetur sint facilis iusto, quia quaerat iure accusamus amet optio ea repudiandae, quas repellat illum error voluptate sed magnam quibusdam saepe numquam. Vitae reiciendis, aliquid exercitationem 
                    </P>
            </Container>
            </Container>
            
            <Container>
            <OurGenres>
                <ButtonG>
                    <P size = "--size23" bold = "700" mr = "0 0 20px 0" cl = "--cl-black">Drama</P>
                    <P size = "--size29" bold = "700">&#8594;</P>
                </ButtonG>
                
                <ButtonG >
                    <P size = "--size23" bold = "700" mr = "0 0 20px 0" cl = "--cl-black">Romantic </P>
                    <P size = "--size29" bold = "700">&#8594;</P>
                </ButtonG>
                
                <ButtonG >
                    <P size = "--size23" bold = "700" mr = "0 0 20px 0" cl = "--cl-black">Detective</P>
                    <P size = "--size29" bold = "700">&#8594;</P>
                </ButtonG>
                
                <ButtonG >
                    <P size = "--size23" bold = "700" mr = "0 0 20px 0" cl = "--cl-black">Adventure</P>
                    <P size = "--size29" bold = "700">&#8594;</P>
                </ButtonG>
                
            </OurGenres>
            </Container>
            <Container pd = "30px ">
                <OurValue>
                    <div className="leftTitle">
                       <Div position = "relative" top = "0" left = "-20px">
                        <P size = "--size23" bold = "700">OUR VALUE</P>
                       </Div>
                        <P size = "--size40" bold = "700" mr = "15px" cl= "--cl-black" >A melting pot for the 
                            best idea  </P>
                        <P size = "--size18" bold = "700" mr = "10px 0 0 15px">Integrity</P>
                        <P w ="70%" size = "--size15"  mr = "5px 0 0 15px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eos dolorem hic commodi quis repudiandae.</P>
                        
                        <P size = "--size18" bold = "700" mr = "10px 0 0 15px">Integrity</P>
                        <P w ="70%" size = "--size15"  mr = "5px 0 0 15px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eos dolorem hic commodi quis repudiandae.</P>
                        
                        <P size = "--size18" bold = "700" mr = "10px 0 0 15px">Integrity</P>
                        <P w ="70%" size = "--size15"  mr = "5px 0 0 15px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eos dolorem hic commodi quis repudiandae.</P>
                        
                    </div>
                    <div className="rightImg">
                        <Img w = "70%" mr = " 0 0 0 auto" h ="100%" >
                        <img src="./assets/images/jpg/caroucel5.jpg" alt="" />
                        </Img>
                    </div>

                </OurValue>
            </Container>
            <Container  pd = "30px 4% 100px">
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" mr = "0 0 30px 0 " fontF = "--familyM">
                    Our best Authors
                    </P>
                    
                    </Div>
                    {
                        data.outhor.slice(-6).map((value)=>{
                            return(                        
                                <Col2 key = {value.id} >
                                <AuthorEach data = {value} />
                                </Col2>
                            )
                        })
                    }
                    
            </Container>
            <Footer/>
        </AboutStyled>
    )
}
export default About;