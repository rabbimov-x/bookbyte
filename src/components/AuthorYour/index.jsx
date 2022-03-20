import React from "react";
import { Author } from "./styled";
import { P, Div } from "../../GlobalStyle";

const AuthorEach = ()=>{
    return (
        <Author>
            <Author.Img>
            <img src="./assets/images/png/man.png" alt="error" />
            </Author.Img>
            <Div pd = "10px  0 0 0">
                <P size = "--size15" cl ="--shade-7" >
                Имя автора
                </P>
                <P size = "--size15" cl ="--shade-6" pd = "5px 0 0 0">
                Количество книг
                </P>
            </Div>
        </Author>
    )
}

export default AuthorEach