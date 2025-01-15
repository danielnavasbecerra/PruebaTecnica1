// Importamos el adaptador para conectar con el API
import { post } from "../adapters/ApiService";

export const addToCart = async (product) => {
  await post("/cart", product);
};
