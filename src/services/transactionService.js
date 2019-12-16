import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/transaction";

export async function saveTransaction(amount, orderId) {
  const result = await http.post(apiEndpoint, {
    date: new Date().toString(),
    amount: amount,
    inserted_at: new Date().toString(),
    order_id: orderId,
    transaction_date: new Date().toString()
  });
}
