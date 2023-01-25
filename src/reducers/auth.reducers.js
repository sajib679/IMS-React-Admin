import { authConstants } from "../actions/constant";

const initState = {
  token: null,
  user: {},
  isVendor: "",
  isSuperuser: "",
  authenticate: false,
  athenticating: false,
  loading: false,
  error: null,
  message: "",
};
export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        athenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        isVendor: action.payload.user.isVendor,
        isSuperuser: action.payload.user.isSuperuser,
        token: action.payload.token,
        authenticate: true,
        athenticating: false,
      };
      break;
    // case authConstants.LOGIN_FAILURE:
    //   state = {
    //     ...state,
    //     message: action.payload.error,
    //     authenticate: false,
    //     athenticating: false,
    //   };
    //   break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: false,
      };
      break;

    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...state,
        token: null,
        user: {},
        isVendor: "",
        isSuperuser: "",
        authenticate: false,
        athenticating: false,
        loading: false,
      };
      break;

    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    default:
      break;
  }

  return state;
};
