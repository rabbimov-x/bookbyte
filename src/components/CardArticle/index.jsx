import React from "react";
import { ArticliStyle } from "./styled";
import {Button, Div , P} from "../../GlobalStyle"
import { useDispatch } from "react-redux";
import { addBooks, deleteBook} from "../../redux/types/types";
const Article  = (props)=>{
    const dispatch = useDispatch()
    return (    
        <ArticliStyle display = { props?.small ? "flex" : "block"}>
            <ArticliStyle.Img w = { props?.small ? "28.3%" : "100%"} h = { props?.small ? "114px" : "200px"}>
                <img src={props.data.imgBookUrl} alt="error" />
            </ArticliStyle.Img>
            <Div pd = "20px" w = { props?.small ? "71%" : "100%"} display = {props?.small ? "flex" : "block"}>
                <Div>
                    <Div>
                        <P size = "--size15" cl= "--shade-7" bold = "600">
                        {props.data.bestBook}
                        </P>
                    </Div>
                     { props?.small ? "" :
                      <Div pd = "10px 0 20px 0" className="minHeight">
                        <P size = "--size15" cl= "--shade-7">
                            {
                                props.data.aTitle
                            }
                        </P>
                      </Div>}
                    
                </Div>
                <Div  display = "flex" justify  = "space-between" align = "center">
                    { props?.small ? 
                      "" :<Div w="fit-content" display = "flex" justify = "space-between"> <Button cl = "--primary" bg = "--shade-1" btn = "labelp" onClick={()=>dispatch({type: addBooks , data: props.data })} >
                      {
                        !props.mybooks? "Book now >" : "Buy now"
                      }   
                    </Button>
                    
                    </Div>
               }
                    
                    <Div w= "fit-content" mr = { props?.small ? "auto 0 0 auto" : ""}  >
                        
                        {
                            !props.mybooks? <P size = "--size15" cl= "--shade-6" pd = "15px 0">
                            1 января, 2021
                            </P>:<Button  cl = "--cl-white" bg = "--danger" bgh = "--danger" onClick={()=>dispatch({type: deleteBook, id: props.data.id })} >
                    Delete
                    </Button>
                        }
                        
                        
                    </Div>
                </Div>
            </Div>
        </ArticliStyle>
    )}
export default Article;