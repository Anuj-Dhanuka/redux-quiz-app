import { increaseScore, increaseCount, lockOn, lockOff } from "./quizConstants"

const initialState = {
    score: 0,
    count: 0,
    lock: false,
}

const scoreReducer = (state=initialState, action) => {
    switch(action.type) {
        case increaseScore :
            return {
                ...state,
                score : state.score + 1
            }
            break;
        case increaseCount :
            return {
                ...state,
                count : state.count + 1
            }
            break;
        case lockOn :
            return {
                ...state,
                lock: true
            }  
            break;
        case lockOff :
            return {
                ...state,
                lock: false,
            }   
            break;   

        default :
            return state    
    }
}



export default scoreReducer