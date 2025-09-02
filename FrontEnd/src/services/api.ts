import axios from "axios";

export const shortenApi = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5 * 1000,
});
