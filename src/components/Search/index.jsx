import React, { useEffect, useState } from "react";
import { SearchStyle } from "./styled";
import { Div, Icon } from "../../GlobalStyle";
const Search = ()=>{
    const [value , setValue] = useState("sac")
    console.log(value);
    
    return(
        <SearchStyle>
            <form>
                <Div w = "100%" h = "100%" display = "flex">
                    <SearchStyle.Input value = {value} onChange = {(e)=>setValue(e.target.value)}  placeholder = "Search...">
                             {/* <Icon.Search cl = "--shade-6" mr =' 0 16px 0 0' /> */}
                    </SearchStyle.Input>
                    <Div w = "0" h = "auto" display = "flex" align ="center">
                    <SearchStyle.X  display = {value}  onClick = {()=>setValue("")} >
                                <Icon.Cansel cl = "--shade-6"/>
                    </SearchStyle.X > 
                    </Div>
                    <SearchStyle.Button type = "button">
                            knopka
            
                    </SearchStyle.Button>
                    
                </Div>
            </form>
        </SearchStyle>
    )
}
export default Search