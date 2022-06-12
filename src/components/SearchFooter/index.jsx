import React, {  useState } from "react";
import { SearchStyle } from "./styled";
import { Div, Icon, P } from "../../GlobalStyle";
const SearchFooter = (props)=>{
    const [value , setValue] = useState("")
    return(
        <SearchStyle w = {props?.w ? props.w : ""}>
            <form>
                <Div w = "100%" pd = "5px" h = "100%" display = "flex">
                    <Icon.Email className = "searchicon" cl = "--shade-6" mr = "6px 11px" />
                    <SearchStyle.Input type = "email" value = {value} required onChange = {(e)=>setValue(e.target.value)}  placeholder = {props?.plac ? props.plac : "...@email"}>
                             {/* <Icon.Search cl = "--shade-6" mr =' 0 16px 0 0' /> */}
                    </SearchStyle.Input>
                    <Div w = "0" h = "auto" display = "flex" align ="center">
                    <SearchStyle.X  display = {value}  onClick = {()=>setValue("")} >
                                <Icon.Cansel cl = "--shade-6"/>
                    </SearchStyle.X > 
                    </Div>
                    <SearchStyle.Button type = "button">
                         Подписаться
                    </SearchStyle.Button>
                </Div>
            </form>
        </SearchStyle>
    )
}
export default SearchFooter; 
