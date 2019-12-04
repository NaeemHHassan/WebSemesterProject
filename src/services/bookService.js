import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function getBooks() {
  return http.get(apiEndpoint + "/books");
}
