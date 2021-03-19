<template lang="html">

  <div class="container containerpadre">

      <button @click="estado = true" class="boton-login botlog">
        Abrete puto

      </button>
      <div class="" style="position:relative">
        <div v-if="estado" class="modal-container">
          <div class="button-container">
            <hr>
            <a href="#">Iniciar Sesión</a>
            <hr>
            <a href="#">Registrarse</a>
            <hr>
            <a @click="estado = false">Cerrar</a>
            <hr>
          </div>
        </div>
      </div>

  </div>





</template>

<script>
export default {
  name: 'PopupLogin',
  data: () => ({
    estado: false
  }),

  methods: {
    logFuncion:function(estado){
      console.log(estado);
    },
  },
}
</script>

<style lang="css" scoped>

.containerpadre{
  max-width: 220px;
  min-width: 165px
}
.boton-login{
  background-color: orange; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.botlog {
  background-color: white;
  color: black;
  border: orange solid 1px;
  border-radius: 5px;
}

.botlog:hover {
  background-color: rgb(255, 183, 77);
  color: white;
}

.modal-container {
	position: absolute;
  z-index: 10;
  display:block;
	background: orange;
	border-radius: .4em;
  width: 100%;

}

.modal-container a{
  margin: 0px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

</style>
