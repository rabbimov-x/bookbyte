// import ActiveUser from "./components/ActiveUser";
// import AuthorEach from "./components/AuthorYour";
// import Article from "./components/CardArticle";
// import Quote from "./components/CardQuote";
// import CarouselMain from "./components/CarouselMain";
// import Compilation from "./components/Compilation";
// import Review from "./components/Review";
// import Search from "./components/Search"; 
// // import Carousel from "./components/Carousel"
// // import CardPaper from "./components/CardPaper";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import {Col12, GlobalStyle, Icon, Social} from "./GlobalStyle"
import TopHeader from "./components/TopHeader";
import About from "./pages/About";
import Author from "./pages/Authors";
import Books from "./pages/Books";
import Home from "./pages/Home";
import YourBooks from "./pages/YourBooks";
 const theme = {

 }
function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router >
      <TopHeader/>
      <Routes>
        <Route path = '/' exact  element = {<Home/>}/>  
        <Route path = '/home' exact  element = {<Home/>}/> 
        <Route path = '/about' exact  element = {<About/>}/> 
        <Route path = '/books' exact  element = {<Books/>}/> 
        <Route path = '/authors' exact  element = {<Author/>}/> 
        <Route path = '/your-products' exact  element = {<YourBooks/>}/> 
        <Route  path = "*" exact element = {
        <h1>404 Error</h1>}>
      </Route>
      </Routes>  
    </Router>
    </ThemeProvider>
  );
}

export default App;
