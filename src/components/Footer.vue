<template>
  <footer class="footer">
    <div class="container">
      <p>© 2025 DaniStore. Todos los derechos reservados.</p>
      <ul class="footer-links">
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #6c757d;
  padding: 1rem 2rem;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.footer-links a {
  color: #6c757d;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
