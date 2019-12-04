import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const login = await http.post(apiEndpoint, { email, password });
  toast.success("Successfully Login");
  localStorage.setItem(tokenKey, login.data);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function isAdmin() {
  return true;
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  isAdmin
};
