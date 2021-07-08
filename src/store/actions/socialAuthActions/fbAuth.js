// Imports
import axios from "axios";

// Create action types
export const FB_AUTH_START = "FB_AUTH_START";
export const FB_AUTH_SUCCESS = "FB_AUTH_SUCCESS";
export const FB_AUTH_FAILURE = "FB_AUTH_FAILURE";

const fbAuth = (code) => async (dispatch) => {
  dispatch({ type: FB_AUTH_START });
  // Try/catch block which will call the API endpoint that calls the Facebook endpoint to issue an accessToken
  try {
    // Make API call
    let response = await axios.post(
      `${process.env.REACT_APP_DEV_URL}/api/auth/social/facebook/token`,
      {
        code: code,
      }
    );
    // Log response
    console.log(response);
    /* After making the above call, response should contain user data that we can pass to the dispatch success 
    in the payload, which will then be persisted to the store/localStorage */
    dispatch({ type: FB_AUTH_SUCCESS });
  } catch (error) {
    // Log error and dispatch failure
    console.log(error);
    dispatch({ type: FB_AUTH_FAILURE, payload: error });
  }
};
export default fbAuth;
