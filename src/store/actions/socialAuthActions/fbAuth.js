import * as queryString from "query-string";
// Create action types
export const FB_AUTH_START = "FB_AUTH_START";
export const FB_AUTH_SUCCESS = "FB_AUTH_SUCCESS";
export const FB_AUTH_FAILURE = "FB_AUTH_FAILURE";

const fbAuth = (query) => async (dispatch) => {
  // Start process (initalize login prompt popup)
  dispatch({ type: FB_AUTH_START });
  // If a code is present in query params, dispatch success
  let queryParams = queryString.parseUrl(query.search);
  if (queryParams.hasOwnProperty("code")) {
    // Authenticate in store so protected routes are accessible
    dispatch({ type: FB_AUTH_SUCCESS });
  }
  // Otherwise, attempt has failed, do not authenticate
  else dispatch({ type: FB_AUTH_FAILURE });
};
export default fbAuth;
