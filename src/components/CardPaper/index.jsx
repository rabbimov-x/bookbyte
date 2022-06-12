import React from "react";
import { useDispatch } from "react-redux";
import {Button, Div, Icon, Img, P} from "../../GlobalStyle"
import { addBooks } from "../../redux/types/types";
import { CardStyle } from "./styled";


export const CardPaper =({data})=>{
   const dispatch = useDispatch()
    return(
        <CardStyle>
            <CardStyle.Img>
                <Div h = "100%">
                    <Img display = "flex" justify = "center" align = "center" h = "100%" className="imgOfPaper" >
                        <img src={data.imgUrl} alt="error" />
                    </Img>
                </Div>
            </CardStyle.Img>
            <Div mr = " 0 0 auto 0">
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
            <Div w = "80%" pd = " 0 5px 0 0">
                <P  size = "--size15" className="card-p"  cl = "--shade-7"  >
                {data.title}
                </P>
            </Div>
            <Div pd = " 0 5px 20px 0">
                <P size = "--size13"  cl = "--shade-6">
                  {data.name}
                </P>
            </Div>
            </Div>
            <Div display = "flex" justify = "space-between" mr = "inherit 0 0 0 !important ">
                <Button size = "--size15" onClick={()=>dispatch({type: addBooks , data: data })}>
                   Add Book
                </Button>
                <Div w= "fit-content" display = "flex">
                    {
                        data.like ? 
                                    <Icon.LikeUmpty cl= "--shade-6" stroke = "true" mr= "0 10px "/> :
                                    <Icon.Like cl= "--lightRed" stroke = "true" mr= "0 10px "/> 
                    },          
                    <Icon.MoreP cl= "--shade-6"/>
                </Div>
            </Div>
        </CardStyle>
    )
}
export default CardPaper;