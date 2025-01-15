<template>
  <Navbar />
  <div
    class="flex flex-col items-center justify-center mt-10 text-center px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-3xl font-semibold text-gray-900">
      Welcome, {{ userProfile?.name }} to
      <span class="text-indigo-600 font-bold">DaniStore!</span>
    </h1>
    <p class="mt-4 text-lg text-gray-600">
      This is your user panel. Enjoy the experience at MyStore! Explore our
      products.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import LogoutButton from "../components/LogoutButton.vue";

// Crear una referencia para el perfil de usuario
const userProfile = ref(null);

// Al montar el componente, obtener el perfil desde localStorage
onMounted(() => {
  const storedProfile = localStorage.getItem("user_profile");

  if (storedProfile) {
    userProfile.value = JSON.parse(storedProfile);
  }
});
</script>
