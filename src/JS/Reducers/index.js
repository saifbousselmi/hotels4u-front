import { combineReducers } from "redux";
import HotelReducer from "./HotelReducer";
import AuthReducer from "./AuthReducers";



const rootReducer = combineReducers({HotelReducer ,AuthReducer})

export default rootReducer

