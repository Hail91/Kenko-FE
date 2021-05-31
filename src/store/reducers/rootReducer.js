import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

// Define the rootReducer
const rootReducer = combineReducers({
  auth: authenticationReducer,
});
// Export reducer so it can be used by app
export default rootReducer;
