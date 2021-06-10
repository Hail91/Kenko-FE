import axios from "axios";
// Create action types
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const loginUser = (user, location, store) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  try {
    let response = await axios.post(
      "http://localhost:8000/api/auth/login",
      user
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
    location.push("/dashboard/home");
  } catch (error) {
    let errorReason = error.response.data.message;
    console.log({ errorMessage: error });
    dispatch({ type: LOGIN_USER_FAILURE, payload: errorReason });
  }
};
export default loginUser;
