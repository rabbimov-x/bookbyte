import React from "react";
import { ArticliStyle } from "./styled";
import {Button, Div , P} from "../../GlobalStyle"
const Article  = (props)=>{
    return (    
        <ArticliStyle display = { props?.small ? "flex" : "block"}>
            <ArticliStyle.Img w = { props?.small ? "28.3%" : "100%"} h = { props?.small ? "114px" : "200px"}>
                <img src="" alt="" />
            </ArticliStyle.Img>
            <Div pd = "20px" w = { props?.small ? "71%" : "100%"} display = {props?.small ? "flex" : "block"}>
                <Div >
                    <Div>
                        <P size = "--size15" cl= "--shade-7" bold = "600">
                        Название статьи
                        </P>
                    </Div>
                     { props?.small ? "" :
                      <Div pd = "10px 0 20px 0" className="minHeight">
                        <P size = "--size15" cl= "--shade-7">
                        Краткое описание Краткое описание Краткое описание Краткое описание
                        Краткое описание Краткое описание Краткое описание Краткое описание
                        </P>
                      </Div>}
                    
                </Div>
                <Div  display = "flex" justify  = "space-between" align = "center">
                    { props?.small ? 
                      "" : <Button cl = "--primary" bg = "--shade-1" btn = "labelp" >
                     Кнопка {">"}
                  </Button>}
                    
                    <Div w= "fit-content" mr = { props?.small ? "auto 0 0 auto" : ""}  >
                        <P size = "--size15" cl= "--shade-6">
                        1 января, 2021
                        </P>
                    </Div>
                </Div>
            </Div>
        </ArticliStyle>
    )}
export default Article;