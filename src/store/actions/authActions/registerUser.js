import axios from "axios";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const registerUser = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  try {
    let response = await axios.post(
      "http://localhost:8000/api/auth/register",
      userInfo
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.response });
  }
};
export default registerUser;
