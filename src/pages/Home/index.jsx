import React from "react";
import ActiveUser from "../../components/ActiveUser";
import CardPaper from "../../components/CardPaper";
import Quote from "../../components/CardQuote";
import Carousel from "../../components/Carousel";
import AuthorEach from "../../components/AuthorYour"
import CarouselMain from "../../components/CarouselMain";
import Compilation from "../../components/Compilation"
import Review from "../../components/Review";
import { Button, Col2, Col4, Col8, Container, Div, P } from "../../GlobalStyle";
import { HomeStyled } from "./styled";
import Article from "../../components/CardArticle";
import Footer from "../../components/Footer";


const Home = () =>{
    return(
        <HomeStyled>
            <Container>
                <Carousel/>
            </Container>
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    
                    <CarouselMain >
                        <Col4 >
                            <CardPaper>

                            </CardPaper>
                        </Col4>
                        
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                    </CarouselMain>
               
            </Container>
            
            <Container bg = "--shade-7">
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--tr" br = "--primary" cl = "--primary" btn ="label">
                      Все новинки
                    </Button>
                    </Div>
                
                    
                    <CarouselMain >
                        <Col4 pd = "0 10px">
                            <CardPaper>

                            </CardPaper>
                        </Col4>
                        
                        <Col4 pd = "0 10px">
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 pd = "0 10px">
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 pd = "0 10px">
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 pd = "0 10px">
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 pd = "0 10px">
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                    </CarouselMain>
               
            </Container>
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    
                    <CarouselMain >
                        <Col4 >
                            <CardPaper>

                            </CardPaper>
                        </Col4>
                        
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                    </CarouselMain>
               
            </Container>
            
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    
                    <CarouselMain >
                        <Col4 >
                            <CardPaper>

                            </CardPaper>
                        </Col4>
                        
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                        <Col4 >
                            <CardPaper>
                                
                            </CardPaper>
                        </Col4>
                    </CarouselMain>
               
            </Container>
            
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                <Col4 max pd = "0 15px">
                    <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                        <P size = "--size29" fontF = "--familyM">
                        Новинки литературы
                        </P>
                        
                    </Div>
                    <ActiveUser>

                    </ActiveUser>
                    
                    <ActiveUser>
                        
                    </ActiveUser>
                    <ActiveUser>
                        
                    </ActiveUser>
                    <ActiveUser>
                        
                    </ActiveUser>
                    <ActiveUser>
                        
                    </ActiveUser>    
                    
                    <ActiveUser/>
                    <ActiveUser/>
                    <ActiveUser/>    

                    <Button  bg = "--shade-1"  cl = "--primary" btn ="labelp" mr = "25px 0 0 0">
                    Смотреть всех читателей
                    </Button>
                </Col4>
                <Col8 pd = "0 15px">
                    <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                        <P size = "--size29" fontF = "--familyM">
                        Новинки литературы
                        </P>
                        
                    </Div>
                    <Review mr = "0 0 30px 0">
                    </Review>
                    <Review>
                    </Review>
                    <Review>
                    </Review>
                    <Button  bg = "--shade-1"  cl = "--primary" btn ="labelp" mr = "25px 0 0 0">
                    Читать больше отзывов
                    </Button>
                </Col8>
                    
                    
               
            </Container>
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    <Col4>
                    <Quote/>
                    </Col4>
                    <Col4>
                    <Quote/>
                    </Col4>
                    <Col4>
                    <Quote/>
                    </Col4>
               
            </Container>
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    <Col4>
                    <Compilation/>
                    </Col4>
                    <Col4>
                    <Compilation/>
                    </Col4>
                    <Col4>
                    <Compilation/>
                    </Col4>
               
            </Container>
            
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    <Col2>
                    <AuthorEach/>
                    </Col2>
                    <Col2>
                    <AuthorEach/>
                    </Col2>
                    <Col2>
                    <AuthorEach/>
                    </Col2>
                    <Col2>
                    <AuthorEach/>
                    </Col2>
                    <Col2>
                    <AuthorEach/>
                    </Col2>
                    <Col2>
                    <AuthorEach/>
                    </Col2>
            </Container>
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>
                
                    <Col4>
                    <Article/>
                    </Col4>
                    <Col4>
                    <Article/>
                    </Col4> 
                    <Col4 max>
                    <Article small />
                    <Article small mr = "10px 0"/>
                    <Article small mr = "10px 0"/>
                    </Col4>
            </Container>
            <Footer/>
        </HomeStyled>
    )
}
export default Home;