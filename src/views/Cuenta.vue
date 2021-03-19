<template lang="html">
  <div class="container">
    <div class="row elmts_opciones mx-auto">
      <div v-for="opcion in opciones" :key="opcion" class="card text-center opcion align-items-center ">
        <p class="align-items-center">{{opcion}}</p>

        <svg v-if="opcion==='Cartera'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-auto bi bi-wallet2" viewBox="0 0 16 16">
          <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
        </svg>
        <svg v-if="opcion==='Mi perfil'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-auto bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <svg v-if="opcion==='Pedidos'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill=" currentColor" class="mx-auto bi bi-mailbox" viewBox="0 0 16 16">
          <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
          <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
        </svg>
        <svg v-if="opcion==='Mis chollos'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-auto bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="opcion==='Ayuda'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-auto bi bi-question-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg>
        <svg v-if="opcion==='Cerrar Sesión'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mx-auto bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
        </svg>

      </div>
    </div>
    <div class="row  align-items-center">
      <MiPerfil/>
    </div>
  </div>


</template>

<script>

import MiPerfil from '@/components/MiPerfil.vue'

export default {
  name: 'Cuenta',
  data: () => ({
    opciones:["Mi perfil","Cartera","Pedidos","Mis chollos","Ayuda","Cerrar Sesión"],
  }),
  components:{
    MiPerfil,
  }

}
</script>

<style lang="css" scoped>

.elmts_opciones{
  display: grid;
  grid-template-columns: 33% 33% 33% ;
  margin: 2em 0px;
  grid-gap: 5px;
  max-width: 700px;
}

.opcion{
  display: grid;
  grid-template-columns: 50% 50% ;
  min-height: 50px;
  border: orange solid 1px;

}

.opcion p{
  margin: 0px auto;
}

@media screen and (max-width: 400px) {
  .elmts_opciones{
    grid-template-columns: 50% 50%;
  }
}

</style>
