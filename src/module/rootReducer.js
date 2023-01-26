/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from "redux";
import counterReducer from "./sampleRedux/reducer";
import checkoutReducer from "./checkout/reducer";
 

const rootReducer = (history) =>
  combineReducers({
    counter: counterReducer,
    checkout: checkoutReducer
  });

export default rootReducer;
