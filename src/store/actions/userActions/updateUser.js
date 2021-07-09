import axios from "axios";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const updateUser = (userId, user) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_START });
  try {
    let response = axios.put(
      `${process.env.REACT_APP_DEV_URL}/api/users/${userId}`,
      user,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export default updateUser;
