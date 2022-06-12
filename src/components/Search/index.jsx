import React, {  useState } from "react";
import { SearchStyle } from "./styled";
import { Div, Icon } from "../../GlobalStyle";
const Search = (props)=>{
    const [value , setValue] = useState("")
    
    return(
        <SearchStyle w = {props?.w ? props.w : ""}>
            <form>
                <Div w = "100%" pd = "5px" h = "100%" display = "flex">
                    <Icon.Search className = "searchicon" cl = "--shade-6" mr = "6px 11px" />
                    <SearchStyle.Input type = "text" value = {value} onChange = {(e)=>setValue(e.target.value)} required placeholder = {props?.plac ? props.plac : "Search..."}>
                             {/* <Icon.Search cl = "--shade-6" mr =' 0 16px 0 0' /> */}
                    </SearchStyle.Input>
                    <Div w = "0" h = "auto" display = "flex" align ="center">
                    <SearchStyle.X  display = {value}  onClick = {()=>setValue("")} >
                                <Icon.Cansel cl = "--shade-6"/>
                    </SearchStyle.X > 
                    </Div>
                    <Icon.Search className = "searchicon2" cl = "--shade-6" mr = "6px 11px" />
                    <SearchStyle.Button type = "button">
                            knopka
            
                    </SearchStyle.Button>
                    
                </Div>
            </form>
        </SearchStyle>
    )
}
export default Search