<script setup>


</script>
<template>
  <nav class="navbar navbar-expand-lg d-flex">
    <div class="container-fluid">
      <RouterLink id="logo" to="/home" class="navbar-brand me-3">Inventario</RouterLink>
      <button
        class="navbar-toggler mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse z-3 conten" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
  <li class="nav-item d-flex tooltips ms-5 uno justify-content-center text-center">
    Usuario
    <span class="tooltiptext d-block">
      <h6>Yenifer Ortiz Herrera</h6>
      <h6>ID</h6>
      <h6>Contabilidad</h6>
    </span>
  </li>
  <li class="nav-item d-flex ms-5 dos">
    <RouterLink to="/" class="nav-link active" title="Salir" aria-current="page" href="#">
      <i class="fa-solid fa-door-open icon"></i>
    </RouterLink>
  </li>
</ul>

      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");
nav.navbar {
  background-color: var(--tear);
  color: var(--purple)!important;
  /* text-shadow: 2px 2px 5px rgb(7, 5, 12); */
  height: 80px;
  /* font-weight: 400; */
  font-size: 1.7rem;
}
.navbar .container-fluid .collapse a {
  /* color:var(--purple) !important;
   text-shadow: 2px 2px 5px rgb(7, 5, 12); 
  font-size: 1.5rem; */

  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.5rem; 

}
.navbar-brand {
  font-family: "Marck Script", cursive;
  font-weight: 700;
  font-size: 3rem;
}
.icon {
  color: black;
  font-size: 3rem;
}

.navbar .container-fluid .collapse .tooltips {
  position: relative;
}

.navbar .container-fluid .collapse .tooltips .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: rgb(146, 141, 141);
  color: rgb(1, 1, 1);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 110%;
  left: -5%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  justify-content: flex-start;
}


.navbar .container-fluid .collapse .tooltips .tooltiptext::after {
  content: "";
  position: absolute;
  top: -10%;
  left: 100%;
  margin-left: -100px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgb(146, 141, 141) transparent;
}

.navbar .container-fluid .collapse .tooltips:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.uno {
  justify-content: flex-end !important;
}
.dos {
  justify-content: flex-end !important;
}
.conten{
  
  justify-content: flex-end !important;
}

.men{
  justify-content: flex-end !important;
}
.router-link-exact-active{
  color: black !important;
  text-shadow: 2px 2px 5px rgb(245, 244, 250) !important;
}
#logo{
  font-size: 4rem;
  margin: -4% 0;
}

.navbar-nav {
  display: flex;
  align-items: center;
}

</style>