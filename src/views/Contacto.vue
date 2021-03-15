<template>
  <div class="contacto">

    <div class="container">

      <h1>Como contactarnos</h1>
      <div class="row align-items-center">
        <div class="col">
          <img src="../assets/logo.png" class="rounded-circle" alt="...">
        </div>
        <div class="col">
          <p> Whatsapp: +34 640105374</p>
        </div>
      </div>
      <h1>Trabajadores</h1>
      <div class="card">
        <div class="card-header">
          Programador - CEO
        </div>
        <div class="card-body">

          <h5 class="card-title">Manuel. P</h5>
          <p class="card-text">Fundador de los Kbesas Group S.L.</p>



        </div>
      </div>

      <ul>
        <li v-on:click="cambiar(1)">sdsadd</li>
        <li v-on:click="cambiar(2)">fffff</li>
        <li v-on:click="cambiar(14)">2122121</li>
      </ul>

      <p v-if="mostrar===1"> 1 </p>
      <p v-else-if="mostrar===2"> 2 </p>
      <HelloWorld msg="hola puto" v-else> 3 </HelloWorld>
    </div>

  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Contacto',
  components: {HelloWorld},
  data: () => ({
    mostrar: 0,
  }),
  methods: {
    cambiar: function (mostrar_arg){
      this.mostrar = mostrar_arg;
    }
  }
}
</script>
