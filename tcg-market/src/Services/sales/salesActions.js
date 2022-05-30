import axios from "axios";
import * as ST from "./salesTypes"


const SALES_URL = "http://localhost:8080/sales/ventas";

export const getSalesProduct = (productId) => async (dispatch) => {
  dispatch(salesRequest);
  try {
    const response = await axios.get(SALES_URL + "/" + productId);
    dispatch(getSalesProductSuccess(response.data));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(getSalesProductFailure());
    return Promise.reject(error);
  }
};

const salesRequest = () => {
    return {
      type: ST.SALES_REQUEST,
    };
  };
  
  const logoutRequest = () => {
    return {
      type: AT.LOGOUT_REQUEST,
    };
  };
  
  const success = (isLoggedIn) => {
    return {
      type: AT.SUCCESS,
      payload: isLoggedIn,
    };
  };
  
  const failure = () => {
    return {
      type: AT.FAILURE,
      payload: false,
    };
  };
