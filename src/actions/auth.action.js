import axios from "../helpers/axios";
import { authConstants } from "./constant";
import jwt_decode from "jwt-decode";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post("login/", { ...user });
    console.log(res);
    if (res.status === 200) {
      const { access, refresh } = res.data;

      localStorage.setItem("token", access);
      localStorage.setItem("user", JSON.stringify(jwt_decode(access)));
      const token = access;
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else if (res.status === 400) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: res.data,
      });
    } else if (res.status === 401) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: res.data,
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to Login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
    });
    // const res = await axios.post("");
    // if (res.status === 200) {
    //   localStorage.clear();
    //   dispatch({
    //     type: authConstants.LOGOUT_SUCCESS,
    //   });
    // } else {
    //   dispatch({
    //     type: authConstants.LOGIN_FAILURE,
    //     payload: { error: res.data.error },
    //   });
    // }
  };
};
