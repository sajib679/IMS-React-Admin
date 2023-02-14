import axios from "../helpers/axios";
import { saleConstants } from "./constant";
import { getInventory } from "./inventory.action";

export const saleProduct = (body) => {
  return async (dispatch) => {
    const res = await axios.post(`sale/`, body);
    console.log(res);
    if (res.status == 200) {
      dispatch({
        type: saleConstants.ADD_SALE_ORDER_SUCCESS,
        payload: res.data.sale,
      });
      dispatch(getInventory());
    }
  };
};
