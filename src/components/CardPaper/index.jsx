import React from "react";

import {Button, Div, Icon, P} from "../../GlobalStyle"
import { CardStyle } from "./styled";


export const CardPaper =()=>{

    return(
        <CardStyle>
            <CardStyle.Img>
                <Div>
                    {/* <Img>
                        <img src="" alt="" />
                    </Img> */}
                </Div>
            </CardStyle.Img>
            <Div pd = "5px 0 10px 0" display = "flex" align = "center"> 
                <Div pd = " 0 10px 0 0" display = "flex" w="fit-content">
                 <Icon.Star />
                 <Icon.Star />
                 <Icon.Star />
                 <Icon.Star />
                 <Icon.Star />
                </Div>
                <Div w="fit-content" h="fit-content">
                    <P size = "--size13" cl = "--shade-7">
                        0 (0)
                    </P>
                </Div>
            </Div>
            <Div w = "70%" pd = " 0 5px 0 0">
                <P  size = "--size15"  cl = "--shade-7">
                Название книги
                В две строки
                </P>
            </Div>
            <Div pd = " 0 5px 20px 0">
                <P size = "--size13"  cl = "--shade-6">
                 Автор книги
                </P>
            </Div>
            <Div display = "flex" justify = "space-between">
                <Button size = "--size15">
                   Кнопка
                </Button>
                <Div w= "fit-content" display = "flex">
                    <Icon.LikeUmpty cl= "--shade-6" mr= "0 10px "/>
                    <Icon.MoreP cl= "--shade-6"/>
                </Div>
            </Div>
        </CardStyle>
    )
}
export default CardPaper;