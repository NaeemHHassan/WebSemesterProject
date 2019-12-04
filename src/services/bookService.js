import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/books";

export function getBooks() {
  return http.get(apiEndpoint);
}
