import axios from "axios";

// Define action types
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// define the function that will dispatch the relevant action to the reducer
const registerUser = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  // Make axios call to Register the user
  try {
    console.log(userInfo, "user info passed to action call");
    let response = await axios.post(
      "http://localhost:8000/api/auth/register",
      userInfo
    );
    console.log(response.data, "response from action call");
    if (response.status === 201) {
      localStorage.setItem("registerStatus", true);
    }
    // Dispatch success
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    // If it fails, dispatch the error with the error's response
  } catch (error) {
    localStorage.setItem("registerStatus", false);
    console.log({ errorMessage: error });
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.response });
  }
};
// Export for use in Registration Component
export default registerUser;
