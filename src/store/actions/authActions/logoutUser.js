export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const CLEAR_USER = "CLEAR_USER";

const logoutUser = (location) => (dispatch) => {
  dispatch({ type: LOGOUT_USER_START });
  dispatch({ type: LOGOUT_USER_SUCCESS });
  dispatch({ type: CLEAR_USER });
  location.push("/login");
};
export default logoutUser;
