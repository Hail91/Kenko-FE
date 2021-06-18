// Create action types
export const FB_AUTH_START = "FB_AUTH_START";
export const FB_AUTH_SUCCESS = "FB_AUTH_SUCCESS";
export const FB_AUTH_FAILURE = "FB_AUTH_FAILURE";

const fbAuth = () => async (dispatch) => {
  dispatch({ type: FB_AUTH_START });
  dispatch({ type: FB_AUTH_SUCCESS });
};
export default fbAuth;
