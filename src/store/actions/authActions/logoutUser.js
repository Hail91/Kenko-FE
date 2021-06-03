import { saveToLocalStorage } from "../../../utilities/persistence/localStoragePersist";

// Action creators
export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

// Method to actually logout user by modifying global state
const logoutUser = (location, store) => (dispatch) => {
  dispatch({ type: LOGOUT_USER_START });
  dispatch({ type: LOGOUT_USER_SUCCESS });
  saveToLocalStorage(store);
  location.push("/login");
};

// Export for auth reducer
export default logoutUser;
