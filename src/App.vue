<template>
  <div class="container-fluid">
    <div class="row  cabecera-principal align-items-center">

      <div class="col-lg-3 order-lg-1 order-1">
        <router-link to="/"><img src="./assets/cropped-logo-hyper-chollo-nuevo.png" class="imagen-logotipo" alt="..."></router-link>
      </div>

      <div id="nav" class="col-lg-7 order-lg-2 order-3">

        <router-link style="text-decoration: none;" to="/tiendas">Tiendas</router-link> |
        <router-link style="text-decoration: none;" to="/marketplace">Marketplace</router-link> |
        <router-link style="text-decoration: none;" to="/cupones">Codigos Descuento</router-link> |
        <router-link style="text-decoration: none;" to="/categorias">Categorias</router-link> |
        <router-link style="text-decoration: none;" to="/contacto">Contacto</router-link> |
        <svg v-on:click="cambiar('buscador',1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>

      </div>

      <div class="col-lg-2 order-lg-3 order-2">
        <router-link style="text-decoration: none;" to="/cuenta">Mi cuenta</router-link>
      </div>

    </div>


  </div>
  <div class="container-fluid banner-cabecera">
    <div class="row align-items-center">
      <div class="col-md-3 d-none d-md-block">
        <a>La plataforma de las compras inteligentes</a>
      </div>
      <div class="col-md-6">
        <transition name="fade">
          <div v-if="mostrar==='buscador' && contador%2===0">
            <div class="mx-auto mb-1">
              <form>
                <input id="" name="buscador" type="text" class="form-control" placeholder="Búsqueda" autocomplete="off">
              </form>
            </div>
          </div>
          <div v-else></div>
        </transition>

      </div>
      <div class="col-md-3 d-none d-md-block ">
        <a>Valora, Opina, Comparte</a>
      </div>
    </div>
  </div>


  <router-view/>

<FooterPrincipal/>

</template>





<script>

import FooterPrincipal from '@/components/FooterPrincipal.vue'

export default {
  name: 'App',
  components: {
    FooterPrincipal,
  },
  data: () => ({
    mostrar: 'vacio',
    contador: 1,
  }),
  methods: {
    cambiar: function (pestaña,cont){
      this.mostrar = pestaña;
      this.contador += cont ;
    }
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;

}

.cabecera-principal {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.imagen-logotipo{
  width: 70%;
  height: auto;
}

.foto_debajo_cabecera img{
  padding-left: 0;
  padding-right: 0;
  height: 100%;
}

.banner-cabecera{
  border-bottom: solid 5px  #212121;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
