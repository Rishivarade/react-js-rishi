import { ADD, REDUCE } from "./actionType";

const initialstate = {
    counter:2
}

export const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case ADD:
            return {counter : state.counter + action.payload};
        case REDUCE:
            return {counter : state.counter - action.payload};
        default:
            return state;
    }
}