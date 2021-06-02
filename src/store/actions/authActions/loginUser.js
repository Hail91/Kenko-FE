import axios from "axios";

// Create action types
const LOGIN_USER_START = "LOGIN_USER_START";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const loginUser = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  try {
    let response = await axios.post(
      "http://localhost:8000/api/auth/register",
      user
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.response });
  }
};
export default loginUser;
