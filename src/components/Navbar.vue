<template>
  <nav class="py-3 px-5 bg-white rounded shadow-xl w-100 md:px-auto">
    <div
      class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap"
    >
      <div class="text-indigo-500 md:order-1">
        <h1 class="text-indigo-500 text-2xl font-bold">DaniStore</h1>
      </div>

      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
        <ul class="flex font-semibold justify-between">
          <li
            class="md:px-4 md:py-2"
            :class="{
              'text-indigo-500': isActive('/home'),
              'hover:text-indigo-500': !isActive('/home'),
            }"
          >
            <router-link to="/home"><span>Home</span></router-link>
          </li>
          <li
            class="md:px-4 md:py-2"
            :class="{
              'text-indigo-500': isActive('/products'),
              'hover:text-indigo-500': !isActive('/products'),
            }"
          >
            <router-link to="/products"><span>Products</span></router-link>
          </li>
          <li
            class="md:px-4 md:py-2"
            :class="{
              'text-indigo-500': isActive('/cart'),
              'hover:text-indigo-500': !isActive('/cart'),
            }"
          >
            <router-link to="/cart"><span> Cart</span></router-link>
          </li>
        </ul>
      </div>
      <LogoutButton />
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router"; // Importar useRoute
import LogoutButton from "../components/LogoutButton.vue";

export default {
  name: "Navbar",
  components: {
    LogoutButton,
  },
  setup() {
    const route = useRoute(); // Obtener la ruta actual

    // Función para verificar si el enlace es el activo
    const isActive = (path) => {
      return route.path === path;
    };

    return { isActive };
  },
};
</script>