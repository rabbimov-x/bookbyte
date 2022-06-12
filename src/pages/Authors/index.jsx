import React from "react";
import { useSelector } from "react-redux";
import {  Col4, Container, } from "../../GlobalStyle";
import { AuthorStyle} from "./styled";
import Footer from "../../components/Footer";
import AuthorEach from "../../components/AuthorYour";


const Author = () =>{
    const state = useSelector((state)=>state);
    const data = {
        outhor: state.home.outhor,
    }
    
    return(
        <AuthorStyle>
                    <Container>
                        {
                            data.outhor? data.outhor.map((value )=>{
                                return(
                                    <Col4 key = {value.id}>
                                        <AuthorEach data = {value} />
                                    </Col4>
                                )
                            }) : ""
                        }
                    </Container>
            <Footer/>
        </AuthorStyle>
    )
}
export default Author;