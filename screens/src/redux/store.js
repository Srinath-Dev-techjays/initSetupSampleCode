import {createStore, combineReducers, applyMiddleWare } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer})

const Stores = () => {

 return createStore(rootReducer, applyMiddleWare(thunk));
}

 export default Stores


