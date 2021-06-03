import { saveToLocalStorage } from "../../../utilities/persistence/localStoragePersist";

// Action creators
export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

// Method to actually logout user by modifying global state
const logoutUser = (location, store) => (dispatch) => {
  const logoutMessage = "Log out successful!";
  // Dispatch start
  dispatch({ type: LOGOUT_USER_START });
  // Dispatch success
  dispatch({ type: LOGOUT_USER_SUCCESS, payload: logoutMessage });
  saveToLocalStorage(store);
  // Push back to login page
  location.push("/login");
};

// Export for auth reducer
export default logoutUser;