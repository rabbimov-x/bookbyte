import React from "react";
import { Button, Container, Div, P, Icon} from "../../GlobalStyle";
import Search from "../Search";
import Navbar from "../Navbar"
import { TopStyle } from "./styled";


const TopHeader =()=>{
    return ( 
        <TopStyle>
                <Container align = "center" justify = "space-between" pd = "30px 4% 10px">
                    <Div className="logotype" w = "fit-content">
                        <img src="./assets/images/svg/Logotype.svg" alt="" />
                    </Div>
                    <Search w= "35%" />
                    <Div className="cards" w = "21%" pd= "5px" display ="flex" justify = "space-between">
                        <Div pd = "" w = "fit-content">
                            <Button.Wish  mr = "0 auto">
                                <Icon.Cart/>
                                <div className = "numberBtn" content = "0">
                                    0
                                </div>
                            </Button.Wish>
                            <P size = "--size15" cl = "--shade-1" mr = "5px 0 0 0">
                            Корзина
                            </P>

                        </Div>
                        <Div pd = "" w = "fit-content">
                            <Button.Wish>
                                <Icon.Like/>
                                <div className = "numberBtn" content = "0">
                                    0
                                </div>
                            </Button.Wish>
                            <P size = "--size15" cl = "--shade-1" mr = "5px 0 0 0">
                            Корзина
                            </P>
                        </Div>
                        <Div pd = "" w = "fit-content">
                            <Button.Wish>
                                <Icon.Account/>
                                <div className = "numberBtn" content = "0">
                                    0
                                </div>
                            </Button.Wish>
                            <P size = "--size15" cl = "--shade-1" mr = "5px 0 0 0">
                            Корзина
                            </P>
                        </Div>
                    </Div>
                </Container>
                <Container>
                    <Navbar />
                </Container>
        </TopStyle>
    )
}

export default TopHeader

