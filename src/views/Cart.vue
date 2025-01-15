<template>
  <Navbar />
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-semibold text-center mb-8">Shopping Cart</h1>
    <div v-if="cartItems.length" class="space-y-4">
      <!-- Lista de elementos del carrito -->
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :product="item"
        @updateQuantity="updateQuantity"
        @remove="removeItem"
      />

      <!-- Total del carrito -->
      <div class="mt-8 flex justify-between items-center border-t pt-4">
        <h2 class="text-lg font-medium">Total:</h2>
        <p class="text-xl font-bold">${{ cartTotal }}</p>
        <button @click="clearCart">Vaciar Carrito</button>
      </div>
    </div>
    <p v-else>Tu carrito está vacío.</p>
  </div>
</template>

<script>
import { useCartStore } from "../store/cart";
import Navbar from "../components/Navbar.vue";
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    Navbar, // Registrar el componente
    CartItem,
  },
  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.cartItems;
    },
    totalPrice() {
      const cartStore = useCartStore();
      return cartStore.totalPrice;
    },
  },
  methods: {
    updateQuantity(productId, newQuantity) {
      const cartStore = useCartStore();
      cartStore.updateQuantity(productId, newQuantity);
    },
    removeItem(productId) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId);
    },
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();
    },
  },
};
</script>
