// Importamos el adaptador para conectar con el API
import { get } from "../adapters/ApiService";
import Product from "../entities/Product";

export const getProducts = async () => {
  const response = await get("/products");
  return response.data.map(
    (product) =>
      new Product(product.id, product.name, product.price, product.image)
  );
};
