import React from "react";
import { Div, P, Icon } from "../../GlobalStyle";
import { AcitveStyle } from "./styled";

const ActiveUser = (props)=>{
    let data = props.data;
    return (
        <AcitveStyle className="cursorp">
            
            
            <Div w= "fit-content" className={props?.book ? "" : "userleft" } h ="fit-content" display = "flex" align = "center">
                <div className="raundImg">
                    <img src= {data.imgUrl} alt="error" />
                </div>
                {
                props?.book ? <Div w = "fit-content" display = "flex" pd = "0 15px"  >
                        <Div w = "fit-content" textC = "center" pd = "0 5.5px">
                            <P size = "--size13" cl =" --shade-7">
                            {
                                data.bestBook
                            } 
                            </P>
                            <P size = "--size13" cl =" --shade-7">
                                {
                                    data.startNamber
                                }
                            </P>
                        </Div>
                        <Div w = "fit-content" textC = "center" pd = "0 5.5px">
                            <P size = "--size13" cl =" --shade-7">
                            Отзывы 
                            </P>
                            <P size = "--size13" cl =" --shade-7">
                                0
                            </P>
                        </Div>
                        <Div w = "fit-content" textC = "center" pd = "0 5.5px">
                            <P size = "--size13" cl =" --shade-7">
                            Цитаты 
                            </P>
                            <P size = "--size13" cl =" --shade-7">
                                0
                            </P>
                        </Div>
                        <Div w = "fit-content" textC = "center" pd = "0 5.5px">
                            <P size = "--size13" cl =" --shade-7">
                            Достижения 
                            </P>
                            <P size = "--size13" cl =" --shade-7">
                                0
                            </P>
                        </Div>
                </Div> : 
                <Div w = "fit-content"   h ="fit-content" pd = "0 7.5px 0 15px" >
                    <P size = "--size15px" cl = '--shade-7'>
                        {
                            data.name
                        }
                    </P>
                    <P size = "--size15px" cl = '--shade-7' pd = "5px 0 0 0">
                        {
                            data.userName
                        }
                    </P>
                </Div>
            }
            </Div>
            {
                props?.book ? "" :  
                <Div w= "fit-content" h ="fit-content" display = "flex" align = "center" pd = "0 10px">
                <Icon.Stars cl = "--secondary" />
                <P bold = "600" cl = "--shade-7" pd = " 0 0 0 5px">
                    {
                        data.startNamber
                    }
                </P>    
            </Div>
            }
           
            <Div w= "fit-content" pd= "12px">
                <P size = "--size18" className="cursorp" bold = "600"  cl = "--shade-6" fontf = "--familyQ">
                    {">"}
                </P>
            </Div>

        </AcitveStyle>
    )
}
export default ActiveUser;