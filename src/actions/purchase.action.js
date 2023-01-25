import axios from "../helpers/axios";
import { purchaseConstants } from "./constant";

export const purchaseProduct = (body) => {
  return async (dispatch) => {
    const res = await axios.post(`purchase/`, body);
    console.log(res);
    if (res.status == 200) {
      dispatch({
        type: purchaseConstants.ADD_PURCHASE_ORDER_SUCCESS,
        payload: res.data,
      });
    }
  };
};
