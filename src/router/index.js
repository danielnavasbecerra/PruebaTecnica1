import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";

// Definir las rutas
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false }, // No requiere autenticación
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }, // Requiere autenticación
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { requiresAuth: true },
  },
];

// Crear el router con la configuración
const router = createRouter({
  history: createWebHistory(), // Usar el modo de historial
  routes,
});

router.beforeEach((to, from, next) => {
  // Verificar si la ruta requiere autenticación
  const isAuthenticated = localStorage.getItem("google_token");

  // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir al login
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next("/");
  } else {
    next(); // Si la ruta no requiere autenticación, permitir acceso
  }
});

export default router;
