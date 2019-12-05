import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/books";

export async function getBooks() {
  return await http.get(apiEndpoint);
}
export async function addBook(book) {
  console.log("book is ");
  console.log(book);
  return http.post(apiEndpoint, {
    title: book.title,
    author: book.author,
    publicationDate: book.publicationDate,
    quantityInStock: book.quantityInStock,
    description: book.description,
    price: book.price,
    ratting: "5.0"
  });
}

export async function updateABook(book) {
  const api = apiEndpoint + "/" + book._id;
  return await http.put(api, {
    title: book.title,
    author: book.author,
    publicationDate: book.publicationDate,
    quantityInStock: book.quantityInStock,
    description: book.description,
    price: book.price,
    ratting: "5.0"
  });
}
export async function getBookById(id) {
  const api = apiEndpoint + "/" + id;
  return await http.get(api);
}
export async function deleteABook(_id) {
  const api = apiEndpoint + "/" + _id;
  console.log(api);
  await http.delete(api);
}
