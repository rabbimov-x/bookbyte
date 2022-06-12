import React from "react";

import { useSelector } from "react-redux";
import { Button, Col4, Container, Div, P } from "../../GlobalStyle";
import { BookStyled } from "./styled";
import Article from "../../components/CardArticle";
import Footer from "../../components/Footer";


const YourBooks = () =>{
    const state = useSelector((state)=>state);
    const data = {
        books: state.update.mybooks,
    }
    return(
        <BookStyled>
            <Container className="mybooks" >
                   <Div pd = "50px 0 25px 0" display = "flex" justify = "space-between">
                    <P size = "--size29" fontF = "--familyM">
                      All Yoor Books
                    </P>
                    <Button  h = "fit-content" bg = "--shade-1" br = "--secondary" cl = "--secondary" btn ="labelt">
                      All new
                    </Button>
                    </Div>   
                    {
                        data.books? data.books.map((value )=>{
                            return(
                                <Col4 key = {value.id}>
                                    <Article myBooks data = {value} />
                                </Col4>
                            )
                        }) : ""
                    }
            </Container>
            <Footer/>
        </BookStyled>
    )
}
export default YourBooks;