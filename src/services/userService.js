import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}

export async function deleteAUser(_id) {
  const api = apiEndpoint + "/" + _id;
  return await http.delete(api);
}

export async function getAllUsers() {
  return await http.get(apiEndpoint);
}
