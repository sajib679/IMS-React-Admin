import axios from "../helpers/axios";
import { productConstants } from "./constant";

export const getProductsByVendor = (vendor) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_BY_VENDOR_REQUEST });
    const res = await axios.get(`product/?vendor=${vendor}`);
    if (res.status == 200) {
      dispatch({
        type: productConstants.GET_PRODUCT_BY_VENDOR_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_BY_VENDOR_FAILURE,
        payload: res.data,
      });
    }
  };
};

export const addProduct = (body) => {
  return async (dispatch) => {
    const res = await axios.post(`product/`, body);
    console.log(res);
    if (res.status == 201) {
      dispatch({
        type: productConstants.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    }
  };
};

export const updateProduct = ({ id, form }) => {
  return async (dispatch) => {
    const res = await axios.patch(`product/${id}/`, form);
    console.log(res);
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`product/${id}/`);
    if (res.status == 204) {
      dispatch({
        type: productConstants.DELETE_PRODUCT_SUCCESS,
        payload: id,
      });
    }
    console.log(res);
  };
};

// export const getProductsById = (productId) => {
//   console.log(productId);

//   return async (dispatch) => {
//     dispatch({ type: productConstants.GET_PRODUCT_BY_ID_REQUEST });
//     const res = await axios.get(`p/product/${productId}`);
//     if (res.status === 200) {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
//         payload: res.data.product,
//       });
//     } else {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_ID_FAILURE,
//         payload: res.data.error,
//       });
//     }
//   };
// };

// export const getProductsByName = (searchTerm) => {
//   console.log(searchTerm);

//   return async (dispatch) => {
//     dispatch({ type: productConstants.GET_PRODUCT_BY_NAME_REQUEST });
//     const res = await axios.get(`search/${searchTerm}`);
//     if (res.status === 200) {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_NAME_SUCCESS,
//         payload: res.data.products,
//       });
//     } else if (res.status === 203) {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_NAME_FAILURE,
//         payload: res.data.message,
//       });
//     } else {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_NAME_FAILURE,
//         payload: res.data.error,
//       });
//     }
//   };
// };

// export const getProductPage = (params) => {
//   const { cid, type } = params;
//   return async (dispatch) => {
//     dispatch({ type: pageConstants.GET_PAGE_REQUEST });
//     const res = await axios.get(`page/${cid}/${type}`);
//     console.log(res);
//     if (res.status === 200) {
//       dispatch({
//         type: pageConstants.GET_PAGE_SUCCESS,
//         payload: res.data,
//       });
//     } else {
//       dispatch({
//         type: pageConstants.GET_PAGE_FAILURE,
//         payload: res.data.error,
//       });
//     }
//   };
// };
