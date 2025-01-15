<template>
  <div class="order-2 md:order-3">
    <button
      @click="signOut"
      class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
      <!-- Heroicons - Logout Solid -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
          clip-rule="evenodd"/>
      </svg>
      <span class="align-middle">Logout</span>
    </button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const signOut = () => {
      // Eliminar los datos de autenticación del localStorage
      localStorage.removeItem("google_token");
      localStorage.removeItem("user_profile");

      // Redirigir al login
      router.push("/");
    };

    return { signOut };
  },
};
</script>
