import {createStore, combineReducers} from 'redux';
import { mainReducer } from './reducers';


const rootReducer = combineReducers({mainReducer})

export const store = createStore(rootReducer);