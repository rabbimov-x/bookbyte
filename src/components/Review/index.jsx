import React from "react";
import { Div, Img, P , Icon } from "../../GlobalStyle";
import { ReviewStyle } from "./styled";


const Review = (props)=>{
    return(
        <ReviewStyle mr = { props?.mr ? props?.mr : ""} >
            <Div display = "flex" justify = "space-between">
                <Div w="13%">
                    <Img rad = "5px" w = "100%" h = "123px">
                      
                    </Img>
                </Div>
                <Div className="setataLeft" pd = " 0 0 0 20px">
                    <Div>
                        <P pd = "0 0 15px 0" size = "--size18" bold = "600">
                        Название статьи
                        </P>
                    </Div>
                    
                      <Div pd = "10px 0 0 0" >
                        <P size = "--size18" >
                        Краткое описание
                        </P>
                      </Div>
                    
                 </Div>
                <Div w="87%" display = "flex" justify = "space-between">
                <Div className="setataRight" w = "auto" pd = " 0 0 0 20px">
                    <Div>
                        <P size = "--size15" cl= "--shade-7" bold = "600">
                        Название статьи
                        </P>
                    </Div>
                    
                      <Div pd = "10px 0 0 0" >
                        <P size = "--size15" cl= "--shade-7">
                        Краткое описание
                        </P>
                      </Div>
                    
                 </Div>
                 <Div className="AutorRight" w = "60%" h = "fit-content" display = "flex" align = "center" justify = 'space-between' >
                    <Div display = "flex" align = "center" w = "fit-content">
                        <Img w= "48px" h= "48px" rad = '50%'  display = "flex" align = "center" justify = "center">
                            <img mw = "130%" src="../assets/images/png/avatar.png" alt="" />
                        </Img>
                        <Div pd = " 0 0 0 10px" w = "fit-content" h = "fit-content">
                            <P size = "--size15" cl = "--shade-7" >
                                Автор цитаты
                            </P>
                        </Div>
                    </Div>
                    <Div display = "flex" nowrap align = "center" w = "fit-content">
                            <Icon.ThumbsU cl  = "--success"/>
                            <P size = "--size15" mr = "0 10px">
                                24
                            </P>
                            <Icon.ThumbsD cl  = "--danger"/>
                            <Icon.MoreP mr = " 0 0 0 10px" cl = "--shade-6"/>
                    </Div>
                </Div>
                <Div display = "flex" pd = "10px 0 0 " > 
                    <Icon.Oppened mr = " 0 0 auto 0" cl = "--secondary" />
                    <P size = "15px" h = "auto" w = "84%" mr = " 0 0 5px">
                       Отзыв Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis deleniti alias debitis, id ipsam aut repellat sunt, minima dicta nihil esse, a veniam soluta cumque et iste labore placeat earum?
                    </P>
                    <Icon.Closed mr  = " auto 0 0  0" cl = "--secondary" />
                </Div>
                </Div>
            </Div>
        </ReviewStyle>
    )
}

export default Review
