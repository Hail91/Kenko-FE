import axios from "axios";
import { saveToLocalStorage } from "../../../utilities/persistence/localStoragePersist";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUser = (userId, store) => async (dispatch) => {
  console.log(userId, store);
  dispatch({ type: FETCH_USER_START });
  try {
    let response = axios.get(`http://localhost:8000/api/users/${userId}`);
    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    saveToLocalStorage(store);
  } catch (error) {
    console.log({ errorMessage: error });
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export default fetchUser;
