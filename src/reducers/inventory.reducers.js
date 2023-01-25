import { inventoryConstants } from "../actions/constant";

const initialState = {
  inventories: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case inventoryConstants.GET_INVENTORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case inventoryConstants.GET_INVENTORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        inventories: action.payload,
      };
      break;

    default:
      break;
  }

  return state;
};
