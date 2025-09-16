import axios from "axios";

const api = axios.create({
  baseURL: "https://sua-api-aqui.com" // ajuste para a API real
});

export default api;
