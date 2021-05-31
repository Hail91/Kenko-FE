import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../actions/authActions/registerUser";

const initialState = {
  currentUser: {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  },
  isLoading: false,
  error: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authenticationReducer;
