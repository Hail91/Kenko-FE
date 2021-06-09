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

import {
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
} from "../actions/authActions/logoutUser";

const initialState = {
  currentUser: {
    email: "",
    username: "",
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
        error: null,
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
        error: null,
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
    case LOGOUT_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        currentUser: {
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
};
export default authenticationReducer;
