<template>
  <div class="bg-indigo-50 h-[84vh] flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
      <div class="text-center mb-6">
        <h1 class="text-4xl font-extrabold text-indigo-400">DaniStore</h1>
      </div>
      <h2 class="text-3xl font-bold text-indigo-600 text-center mb-4">
        Iniciar Sesión
      </h2>
      <p class="text-gray-600 text-center mb-6">
        Welcome to <span class="font-semibold">DaniStore</span>, please log in to continue.
      </p>
      <GoogleLogin
        :callback="callback"
        class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg w-full transition duration-300"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode"; // Para decodificar el JWT

const userProfile = ref(null);
const router = useRouter(); // Para manejar la redirección después de la autenticación

// Callback que maneja la respuesta del login con Google
const callback = (response) => {
  if (response?.credential) {
    try {
      // Decodificar el JWT
      const decoded = jwtDecode(response.credential);

      // Guardar el JWT y el perfil del usuario en localStorage
      localStorage.setItem("google_token", response.credential);
      localStorage.setItem("user_profile", JSON.stringify(decoded));

      // Redirigir al Home
      router.push("/home");
    } catch (error) {
      console.error("Error al decodificar el JWT:", error);
    }
  }
};
</script>
