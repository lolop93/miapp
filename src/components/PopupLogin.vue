<template lang="html">

  <button @click="estado = true" class="boton-login botlog">
    Abrete puto
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
  </button>



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

.boton-login{
  background-color: orange; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
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
  min-height: 50px;
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
  margin-top: 15px;


}


.modal-container a{
  margin: 20px;
  text-decoration: none;
  display: block;
  cursor: pointer;

}

</style>
