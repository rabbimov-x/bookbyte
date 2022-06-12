import React from "react";
import ActiveUser from "../../components/ActiveUser";
import CardPaper from "../../components/CardPaper";
import Quote from "../../components/CardQuote";
import Carousel from "../../components/Carousel";
import AuthorEach from "../../components/AuthorYour"
import CarouselMain from "../../components/CarouselMain";
import Compilation from "../../components/Compilation"
import Review from "../../components/Review";
import { useSelector  } from "react-redux";
import { Button, Col2, Col4, Col8, Container, Div, P } from "../../GlobalStyle";
import { HomeStyled } from "./styled";
import Article from "../../components/CardArticle";
import Footer from "../../components/Footer";


const Home = () =>{
    const state = useSelector((state)=>state);
    const data = {
        books: state.home.books,
        single: state.home.single,
        outhor: state.home.outhor,
        threeBooks: state.home.threeImgBook,
    }
    
    return(
        <HomeStyled>
            <Container>
                <Carousel  data = {data.single} />
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
                        {
                            data.books.map((data, index)=>{
                                return(
                                <Col4 key = {data.id} >
                                    <CardPaper data = {data} />
                                </Col4>                                    
                                )
                            })
                        }

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
                    {
                            data.books.map((data)=>{
                                return(
                                <Col4 key = {data.id} >
                                    <CardPaper data = {data} />
                                </Col4>                                    
                                )
                            })
                        }
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
                    {
                            data.books.map((data, index)=>{
                                return(
                                <Col4 key = {data.id} >
                                    <CardPaper data = {data} />
                                </Col4>                                    
                                )
                            })
                        }
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
                    {
                            data.books.map((data, index)=>{
                                return(
                                <Col4 key = {data.id} >
                                    <CardPaper data = {data} />
                                </Col4>                                    
                                )
                            })
                        }
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
                    <Div pd = "50px 0 25px 0" mr=" 0 0 30px 0" display = "flex" justify = "space-between">
                        <P size = "--size29" fontF = "--familyM">
                        Новинки литературы
                        </P>
                        
                    </Div>
                    {
                      data.outhor.slice(-8).map((value , index)=>{
                            return (
                                <ActiveUser key = {value.id} data = {value} />
                            )
                      })  
                    }
                    
                    
                    
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
                    {
                        data.outhor.slice(-3).map((value, index)=>{
                            return(
                                <Review key = {value.id} data = {value} />            
                            )
                        })
                    }
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
                {
                    data.outhor.slice(2,5).map((value, index)=>{
                        return( 
                            <Col4 key = {value.id} >
                                <Quote data = {value} />
                            </Col4>
                        )
                    })
                }
               
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
                
                    {
                        data.threeBooks.slice(-3).map((value, index)=>{
                            return (            
                            <Col4 key = {value.id}>
                                <Compilation data = {value} />
                            </Col4>
                            )
                        })
                    }
               
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
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    Новинки литературы
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      Все новинки
                    </Button>
                    </Div>   
                    {
                        data.outhor.slice(-2).map((value )=>{
                            return(
                                <Col4 key = {value.id}>
                                    <Article data = {value} />
                                </Col4>
                            )
                        })
                    }
                    <Col4 max>
                    {/* <Article small />
                    <Article small mr = "10px 0"/>
                    <Article small mr = "10px 0"/> */}
                    {
                        data.outhor.slice(-3).map((value )=>{
                            return(
                            <Article key = {value.id} small mr = "10px 0" data = {value} />
                            )
                        })
                    }
                    </Col4>
            </Container>
            <Footer/>
        </HomeStyled>
    )
}
export default Home;