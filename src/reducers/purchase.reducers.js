import { purchaseConstants } from "../actions/constant";

const initialState = {
  newpurchase: {},
  purchases: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case purchaseConstants.GET_PURCHASE_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case purchaseConstants.GET_PURCHASE_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        purchases: action.payload,
      };
      break;

    case purchaseConstants.ADD_PURCHASE_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case purchaseConstants.ADD_PURCHASE_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        newpurchase: action.payload,
        purchases: [action.payload, ...state.purchases],
      };
      break;

    default:
      break;
  }

  return state;
};
