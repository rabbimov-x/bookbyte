import { addBooks, deleteBook, updateState } from "../types/types";


const   initiallState = {
    checkfc: false,
    sen: "",
    message: "Search ...",
    loader: false,
    modal: false,
    buttonClick: false,
    colorbg: "--cl-home-d1",
    mybooks: [],
} 

export const updateReduser =( state = initiallState , action )=>{
    switch(action.type){
        case updateState: return {...state,...action.data};
        case addBooks: const data = state;
        data.mybooks.push(action.data);
        console.log(data.mybooks)
        return {...state,...data};
        case deleteBook:   const mybooks = state.mybooks.filter(item => item.id !== action.id);
        console.log(mybooks)
        return {...state,mybooks};
        default:  return state;
    }
//     if( action.type === updateState){    
    
//    }
//    return state; 
}
