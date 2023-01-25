import { vendorConstants } from "../actions/constant";

const initialState = {
  newvendor: {},
  vendors: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case vendorConstants.GET_VENDOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case vendorConstants.GET_VENDOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        vendors: action.payload,
      };
      break;

    default:
      break;
  }

  return state;
};
