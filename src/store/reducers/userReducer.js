import { CLEAR_USER } from "../actions/authActions/logoutUser";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/userActions/fetchUser";
import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "../actions/userActions/updateUser";

const initialState = {
  user_profile: {
    id: null,
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    site_url: "",
    bio: "",
    facebook_url: "",
    twitter_url: "",
    instagram_url: "",
    tiktok_url: "",
  },
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user_profile: {
          ...action.payload,
        },
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
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
    case CLEAR_USER:
      return {
        user_profile: {},
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default userReducer;
