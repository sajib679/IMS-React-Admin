import axios from "axios";
import { api } from "../urlConfig";
import store from "../store";
import { authConstants } from "../actions/constant";
const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    console.log(error.response);
    console.log(error.request);

    const badResponse = error.response;
    const netwrokError = error.request;

    if (netwrokError.status === 0) {
      return "Server Is Offline";
    }

    if (badResponse) {
      const { status } = badResponse;
      if (status === 500) {
        localStorage.clear();
        store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
      }
    }

    return badResponse;
  }
);
export default axiosInstance;
