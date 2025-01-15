<template>
  <Navbar />
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-semibold text-center mb-8">Our Products</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addProductToCart"
      />
    </div>
  </div>
</template>

<script>
import { getProducts } from "../usecases/GetProducts";
import ProductCard from "../components/ProductCard.vue";
import Navbar from "../components/Navbar.vue";
import { useCartStore } from "../store/cart";

export default {
  components: {
    ProductCard,
    Navbar, // Registrar el componente
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    this.products = await getProducts();
  },
  methods: {
    addProductToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product); // Llama a la acción de Pinia para agregar al carrito
      alert(`${product.name} se agregó al carrito.`);
    },
  },
};
</script>
