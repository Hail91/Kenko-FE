import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "../actions/userActions/updateUser";

const initialState = {
  id: "",
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  site_url: "",
  bio: "",
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
