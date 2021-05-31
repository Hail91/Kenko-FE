import axios from "axios";

// Define action types
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// define the function that will dispatch the relevant action to the reducer
export const registerUser = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  // Make axios call to Register the user
  try {
    let response = await axios.post(
      "http://localhost:8000/api/auth/register",
      userInfo
    );
    // Dispatch success
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    // If it fails, dispatch the error with the error's response
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.response });
  }
};
