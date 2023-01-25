import axios from "../helpers/axios";
import { userConstants } from "./constant";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post("vendor/", { ...user });
    console.log(res.data);
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else if (res.status === 401) {
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
        payload: res.data,
      });
    } else {
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
        payload: res.data,
      });
    }
  };
};
