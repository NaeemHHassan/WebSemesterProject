import http from "./httpService";
import { apiUrl } from "../config.json";
import jwt from "jsonwebtoken";

const apiEndpoint = apiUrl + "/cart";

export async function saveCart(items) {
  await http.post(apiEndpoint, {
    items: items,
    userId: jwt.decode(localStorage.getItem("token"), "BookShopPrivateKey")._id
  });
}
