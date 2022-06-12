import React from "react";
import { Div, Icon, Img, Line, P } from "../../GlobalStyle";
import { QuoteStyle } from "./styled";


const Quote = ({data})=>{
    console.log(data)
    return(
        <QuoteStyle>
            <Div display = "flex">
                <Img h = "48px" w= "32px" rad = "5px" bg = "--shade-6">
                    <img  src={data.imgBookUrl} alt="" />
                </Img>
            <Div w = "auto" pd = " 0 0 0 10px">
                    <Div>
                        <P size = "--size15" cl= "--shade-7" bold = "600">
                        {
                            data.bestBook
                        }
                        </P>
                    </Div>
                    
                      <Div pd = "10px 0 0 0" >
                        <P size = "--size15" cl= "--shade-7">
                        Краткое описание
                        </P>
                      </Div>
                    
            </Div>
            </Div>
            <Div pd = "20px">
                <Div  display = "flex" pd = "20px 0 " align = "center">
                    <Line flex = "1"  br = "--shade-4" w= "41%"></Line>
                    <Icon.Oppened mr = "0 10px" w= "--icon-w32" cl = "--secondary"/>
                    <Line flex = "1" br = "--shade-4" w= "41%"></Line>
                </Div>
                <Div  h = "100px" >
                        <P size = "--size15" cl= "--shade-7">
                        {
                            data.aTitle
                        }
                        </P>
                </Div>
                
                <Div  display = "flex" pd = "20px 0" align = "center">
                    <Line br = "--shade-4" w= "41%"></Line>
                    <Icon.Closed mr = "0 10px" w= "--icon-w32" cl = "--secondary"/>
                    <Line br = "--shade-4" w= "41%"></Line>
                </Div>
                <Div display = "flex" align = "center" justify = 'space-between' >
                    <Div display = "flex" align = "center" w = "fit-content">
                        <Img  w= "48px" h= "48px" rad = '50%'  >
                            <img  mw = "130%" src={data.imgUrl} fit  alt="" />
                        </Img>
                        <Div pd = " 0 0 0 10px" w = "fit-content" h = "fit-content">
                            <P size = "--size15" cl = "--shade-7" >
                                {data.name}
                                &#xad; &#xad; 
                                {data.userName}
                            </P>
                        </Div>
                    </Div>
                    <Div display = "flex" align = "center" w = "fit-content">
                            <Icon.ThumbsU cl  = "--success"/>
                            <P size = "--size15" mr = "0 10px">
                                24
                            </P>
                            <Icon.ThumbsD cl  = "--danger"/>
                            <Icon.MoreP mr = " 0 0 0 10px" cl = "--shade-6"/>
                    </Div>
                </Div>
            </Div>
        </QuoteStyle>
    )
}

export default Quote