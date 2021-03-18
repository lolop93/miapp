<template lang="html">

  <button @click="estado = true" class="boton-login botlog">
          Abrete puto
      </button>

        <div v-if="estado" class="modal-container">
          <div class="button-container">
            <hr>
            <a href="#">Iniciar Sesión</a>
            <hr>
            <a href="#">Registrarse</a>
            <hr>
            <a href="#" @click="estado = false">Cerrar</a>
            <hr>
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
	position: relative;
  z-index: 10;
  display:block;
	background: orange;
	border-radius: .4em;
  margin-top: 15px;
  padding: 25px;

}

.modal-container:after {
  content: '';
	position: absolute;
	top: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 19px solid transparent;
	border-bottom-color: orange;
	border-top: 0;
	margin-left: -19px;
	margin-top: -19px;
}

.modal-container a{
  margin: 20px;
  text-decoration: none;
  display: block;
}

</style>
