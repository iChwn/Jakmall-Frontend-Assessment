import { combineReducers } from "redux";
import checkoutReducer from "./checkout/reducer";
 

const rootReducer = (history) =>
  combineReducers({
    checkout: checkoutReducer
  });

export default rootReducer;
