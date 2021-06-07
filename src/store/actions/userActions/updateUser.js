import axios from "axios";
import { saveToLocalStorage } from "../../../utilities/persistence/localStoragePersist";
// Actions related to updating the current user
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const updateUser = (userId, user, store) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_START });
  try {
    let response = axios.put(`http://localhost:8000/api/users/${userId}`, user);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    saveToLocalStorage(store);
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export default updateUser;
