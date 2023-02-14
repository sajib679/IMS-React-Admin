import { productConstants } from "../actions/constant";

const initialState = {
  newproduct: {},
  products: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...initialState,
        loading: false,
        error: action.payload,
      };
      break;

    case productConstants.GET_PRODUCT_BY_VENDOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT_BY_VENDOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload,
      };
      break;
    case productConstants.GET_PRODUCT_BY_VENDOR_FAILURE:
      state = {
        ...initialState,
        loading: false,
        error: action.payload,
      };
      break;

    case productConstants.ADD_PRODUCT_SUCCESS:
      state = {
        ...initialState,

        loading: false,
        products: [action.payload, ...state.products],
      };
      break;

    case productConstants.DELETE_PRODUCT_SUCCESS:
      state = {
        ...initialState,
        loading: false,
        products: [...state.products].filter(
          (item) => item.id != action.payload
        ),
      };
      break;

    default:
      break;
  }

  return state;
};
