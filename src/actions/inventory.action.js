import axios from "../helpers/axios";
import { inventoryConstants } from "./constant";
export const getInventory = () => {
  return async (dispatch) => {
    const res = await axios.get(`inventory/`);
    console.log(res);
    if (res.status == 200) {
      dispatch({
        type: inventoryConstants.GET_INVENTORY_SUCCESS,
        payload: res.data,
      });
    }
  };
};
