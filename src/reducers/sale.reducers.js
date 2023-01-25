import { saleConstants } from "../actions/constant";

const initialState = {
  newsale: {},
  sales: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case saleConstants.GET_SALE_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case saleConstants.GET_SALE_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        sales: action.payload,
      };
      break;

    case saleConstants.ADD_SALE_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case saleConstants.ADD_SALE_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        newsale: action.payload,
      };
      break;

    default:
      break;
  }

  return state;
};
