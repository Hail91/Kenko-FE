import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../actions/authActions/registerUser";

import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actions/authActions/loginUser";

const initialState = {
  currentUser: {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    isAuthenticated: false,
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
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: {
          ...action.payload,
          isAuthenticated: true,
        },
      };
    case LOGIN_USER_FAILURE:
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
