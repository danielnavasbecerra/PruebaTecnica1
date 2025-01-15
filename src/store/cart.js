import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Incrementar la cantidad si ya está en el carrito
      } else {
        this.cartItems.push({ ...product, quantity: 1 }); // Agregar un nuevo producto
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cartItems = [];
    },
    updateQuantity(productId, newQuantity) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity = newQuantity;
      }
    },
  },
});
