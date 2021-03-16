<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">

      </div>
      <div class="col-11">
        <div class="container">
          <div v-for="n in n_filas" :key="n" class="row">
            <div v-for="m in n_columnas" :key="m" class="col">
                <p>{{n_productos[contarIndice(n,m)]}}</p>
            </div>
          </div>

          <div v-for="filas in n_productos2" :key="filas" class="row">
            <div v-for="columnas in filas" :key="columnas" :class="'col-'+(n_columnas-1)">
                <p>{{columnas}}</p>
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
    n_productos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,80],
    n_productos2: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,80,null]],
    n_filas: 0,
    n_columnas: 4,
    n_col_restantes: 0,

  }),
  components: {
  },
  created: function(){
    this.calculaFilas();

  },
  mounted: function(){
    console.log("polla mounted");
  },
  methods: {
    calculaFilas: function (){
      this.n_filas = Math.floor(this.n_productos.length/this.n_columnas);
      if (this.n_productos.length%this.n_columnas != 0) {
        this.n_col_restantes = this.n_productos.length%this.n_columnas;
        this.n_filas++;
      }
      console.log("polla");
    },
    contarIndice: function(fila,columna){
      return (4*(fila-1)+(columna-1));
    }
  }
}
</script>

<style lang="css" scoped>

</style>
