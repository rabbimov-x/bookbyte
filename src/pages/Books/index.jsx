import React from "react";
import { useSelector  } from "react-redux";
import { Button, Col4,  Container, Div,  P } from "../../GlobalStyle";
import { BookStyled, Header } from "./styled";
import Article from "../../components/CardArticle";
import Footer from "../../components/Footer";
import AboutAuthor from "../../components/AboutAuthor";


const Books = () =>{
    const state = useSelector((state)=>state);
    const data = {
        books: state.home.books,
        single: state.home.single,
        outhor: state.home.outhor,
        threeBooks: state.home.threeImgBook,
    }
    
    return(
        <BookStyled>
            <Header>
            <Container>
                <AboutAuthor/>
            </Container>
            </Header>   
            <Container >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                    All Books
                    </P>
                    <Button  bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      All new
                    </Button>
                    </Div>   
                    {
                        data.outhor.map((value )=>{
                            return(
                                <Col4 key = {value.id}>
                                    <Article data = {value} />
                                </Col4>
                            )
                        })
                    }
            </Container>
            <Footer/>
        </BookStyled>
    )
}
export default Books;