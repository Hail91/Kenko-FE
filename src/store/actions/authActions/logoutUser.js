export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

const logoutUser = (location, store) => (dispatch) => {
  dispatch({ type: LOGOUT_USER_START });
  dispatch({ type: LOGOUT_USER_SUCCESS });
  location.push("/login");
};
export default logoutUser;
