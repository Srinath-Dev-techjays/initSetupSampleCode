import { ADDITION, SUBTRACTION } from "./actionType";


export const addtion = (counter) => ({
    type: ADDITION,
    payload:counter
})

export const subtraction = (counter) => ({
    type: SUBTRACTION,
    payload:counter
})