import * as AT from "./authTypes";
import axios from "axios";

// const AUTH_URL = "http://localhost:8080/apiuser/login";
const AUTH_URL = "http://localhost:8080/api/auth/iniciarSesion";

// export const authenticateUser = (username, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await axios.post(AUTH_URL, {
//       username: username,
//       password: password,
//     });
//     localStorage.setItem("jwtToken", response.data.access_token);
//     localStorage.setItem("username", response.data.username);
//     localStorage.setItem("email", response.data.email);
//     localStorage.setItem("name", response.data.name);
//     localStorage.setItem("surname", response.data.surname);
//     localStorage.setItem("birthdate", response.data.birthdate);
//     localStorage.setItem("id", response.data.id);
//     dispatch(success({ username: response.data.username, isLoggedIn: true }));
//     return Promise.resolve(response.data);
//   } catch (error) {
//     dispatch(failure());
//     return Promise.reject(error);
//   }
// };
export const authenticateUser = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    localStorage.clear();
    const response = await axios.post(AUTH_URL, {
      usernameOrEmail: username,
      password: password,
    });
    localStorage.setItem("jwtToken", response.data.tokenDeAcceso);
    dispatch(success({ username: response.data.email, isLoggedIn: true, jwtToken: response.data.tokenDeAcceso }));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(failure());
    return Promise.reject(error);
  }
};
export function parseJwt(token) {
  if (token === undefined) {
    localStorage.setItem('jwtToken', '');
    return {};
  } else {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

};
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    localStorage.clear();
    dispatch(success({ usernameOrEmail: "", isLoggedIn: false }));
  };
};

const loginRequest = () => {
  return {
    type: AT.LOGIN_REQUEST,
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
