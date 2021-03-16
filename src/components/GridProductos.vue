<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
        dfdfdfd
      </div>
      <div class="col-11">
        <div class="container">
          {{calculaFilas(n_productos.length)}}
          <div v-for="n in n_filas" :key="n" class="row">
            <div v-for="m in n_columnas" :key="m" class="col-3">
              <div v-if="contador_prod < n_productos.length">

                <p>{{contador_prod}}</p>
                {{contarProd()}}
              </div>
              <div v-else></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GridProductos',
  data: () => ({
    contador_prod: 0,
    n_productos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    n_filas: 0,
    n_columnas: 4,
    n_col_restantes: 0,

  }),
  components: {
  },
  methods: {
    calculaFilas: function (){
      this.n_filas = Math.floor(this.n_productos.length/this.n_columnas);
      if (this.n_productos.length%this.n_columnas != 0) {
        this.n_col_restantes = this.n_productos.length%this.n_columnas;
        this.n_filas++;
      }
    },
    contarProd: function(){
      console.log(this.contador_prod);
      this.contador_prod++;

    }
  }
}
</script>

<style lang="css" scoped>

</style>
