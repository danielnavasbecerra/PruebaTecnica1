// Importar axios para hacer las peticiones a la API
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Base URL de JSON Server
  timeout: 5000, // Tiempo de espera en milisegundos
});

export const get = (endpoint) => api.get(endpoint);
export const post = (endpoint, data) => api.post(endpoint, data);
export const put = (endpoint, data) => api.put(endpoint, data);
export const del = (endpoint) => api.delete(endpoint);

export default api;
