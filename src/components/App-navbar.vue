<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/menu">Menú</router-link></li>
      <li><router-link to="/reservations">Reservas</router-link></li>
      <li><router-link to="/gallery">Galería</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
      <li><router-link to="/about">Sobre nosotros</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #8b4513;
  padding: 10px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
}
.navbar li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}
.navbar li a:hover {
  color: #ffd700;
}
</style>
