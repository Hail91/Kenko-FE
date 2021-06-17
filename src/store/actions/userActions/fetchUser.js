import axios from "axios";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUser = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_START });
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_DEV_URL}/api/users/${userId}`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export default fetchUser;
