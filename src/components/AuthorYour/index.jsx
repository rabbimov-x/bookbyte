import React from "react";
import { Author } from "./styled";
import { P, Div } from "../../GlobalStyle";

const AuthorEach = ({data})=>{
    return (
        <Author>
            <Author.Img>
            <img src={data.imgUrl} alt="error" />
            </Author.Img>
            <Div pd = "10px  0 0 0">
                <P size = "--size15" cl ="--shade-7" >
                {data.name} 
                </P>
                <P size = "--size15" cl ="--shade-6" pd = "5px 0 0 0">
                {data.bestBook}
                </P>
            </Div>
        </Author>
    )
}

export default AuthorEach