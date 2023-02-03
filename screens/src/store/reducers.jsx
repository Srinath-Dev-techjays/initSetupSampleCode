import { ADDITION, SUBTRACTION } from "./actionType";

const initalState = {
    counter: 0,
};

export const mainReducer = (state = initalState, action) => {

    switch (action.type) {
        case ADDITION:
            return {
                ...state,name:counter+1
            };
            break;
        case SUBTRACTION:
            return {
                ...state, counter: state.counter - 1
            };
            break;

        default:
            return state;
    }
}