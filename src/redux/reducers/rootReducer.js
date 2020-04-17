import {combineReducers} from "redux";
import sessionReducer from './sessionReducer'
import newsReducer from './newsReducer'
import profileReducer from "./profileReducer";


export default combineReducers({
  news: newsReducer,
  session: sessionReducer,
  profile: profileReducer
})