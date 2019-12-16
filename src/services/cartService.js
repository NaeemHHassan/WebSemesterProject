import http from "./httpService";
import { apiUrl } from "../config.json";
import jwt from "jsonwebtoken";
import * as TService from "./transactionService";

const apiEndpoint = apiUrl + "/cart";

export async function saveCart(items, amount) {
  const result = await http.post(apiEndpoint, {
    items: items,
    userId: jwt.decode(localStorage.getItem("token"), "BookShopPrivateKey")._id
  });
  console.log(result.data);
  await TService.saveTransaction(amount, result.data._id);
}
