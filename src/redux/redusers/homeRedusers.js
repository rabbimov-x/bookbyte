import { CardBooks, Outhor, SingleItem, threeImgBook } from "../../utils/Cards";
import {  updateData} from "../types/types";





const initionalState = {
    meta: "maet",
    into: 100,  
    location: "",
    error: "",
    dataState: false,
    books: CardBooks,
    single: SingleItem,
    outhor: Outhor,
    threeImgBook: threeImgBook,
}


export const homeReduser  = (state = initionalState , action)=>{
    if(action.type === updateData){
        // console.log(action.data)
     state.data = action.data   
    return state
   
    }else
    return state
}
