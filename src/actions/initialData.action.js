import axios from "../helpers/axios";
import {
  vendorConstants,
  initDataConstants,
  purchaseConstants,
  saleConstants,
  productConstants,
  inventoryConstants,
} from "./constant";

export const getInitialData = (params) => {
  return async (dispatch) => {
    dispatch({ type: initDataConstants.GET_INITIALDATA_REQUEST });
    const resVendor = await axios.get("vendor/");
    const resProduct = await axios.get("product/");
    const resPurchase = await axios.get("purchase/");
    const resSale = await axios.get("sale/");
    const resInventory = await axios.get("inventory/");

    if (
      resVendor.status == 200 &&
      resProduct.status == 200 &&
      resPurchase.status == 200 &&
      resSale.status == 200 &&
      resInventory.status == 200
    ) {
      dispatch({
        type: vendorConstants.GET_VENDOR_SUCCESS,
        payload: resVendor.data,
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: resProduct.data,
      });

      dispatch({
        type: purchaseConstants.GET_PURCHASE_ORDER_SUCCESS,
        payload: resPurchase.data,
      });
      dispatch({
        type: saleConstants.GET_SALE_ORDER_SUCCESS,
        payload: resSale.data,
      });

      dispatch({
        type: inventoryConstants.GET_INVENTORY_SUCCESS,
        payload: resInventory.data,
      });
    }
  };
};
