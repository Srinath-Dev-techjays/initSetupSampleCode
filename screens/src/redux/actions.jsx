 export const SET_USER_NAME = 'SET_USER_NAME';
 export const SET_USER_AGE = 'SET_USER_AGE';

 export const SetName = name => dispatch =>{
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
 };

 export const SetAge = age => dispatch =>{
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
 };