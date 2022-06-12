import React from "react";
import { Button, Div, Icon, Img, P } from "../../GlobalStyle";
import { CompilationStyle } from "./styled";


const Compilation = ({data})=>{
    return(
        <CompilationStyle>
            <Div h = "fit-content" display = "flex" justify = "center">
                <Img fit h = "117px" w = "28%" bg = "--shade-6" rad = "5px">
                 <img src={data.imgUrl1} alt="" />
                </Img>
                <Img fit h = "117px" w = "28%" mr = "0 10px" bg = "--shade-6" rad = "5px">
                 <img src={data.imgUrl2} alt="" />
                </Img>
                <Img fit h = "117px" w = "28%" bg = "--shade-6" rad = "5px">
                 <img src={data.imgUrl3} alt="" />
                </Img>
            </Div>
            <Div h = "63px" pd = "20px 0">
                <P size = "--size15" cl = "--shade-7">
                {data.bestBook}
                </P>
            </Div>
            <Div display = "flex" justify = 'space-between' align = "center">
            <Button>
              Buy naw
            </Button>
            <Icon.MoreP mr = " 0 0 0 15px" cl = "--shade-6" />
            </Div>
        </CompilationStyle>
    )
}

export default Compilation