<template lang="html">
  <div class="container">
    <div class="row">
      <div class="grid">
        <div v-for="m in n_tiendas" :key="m" class="cellGrid text-center" :style="cambiarColores(m-1)">

          <img src="../assets/imagenProductoPrueba.jpg" class="img-thumbnail" alt="...">
          <p>Texto de descripcion</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridTienda',
  data: () => ({
    n_tiendas: 50,
    colorines:["#ff6d00","#ff9100","#ffab40","#f57c00","#fb8c00","#ff9800","#ffa726","#ffb74d","#ffcc80","#ffe0b2"]
  }),
  methods: {
    cambiarColores:function(index){
      for (var i = 0; i <= index; i++) {
        if(index > 9){
          return {
            "background-color": this.colorines[index%10],
          };
        }else{
          return {
            "background-color": this.colorines[index],
          };
        }
      }
    },
  },
}
</script>

<style lang="css" scoped>

.grid{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.cellGrid{
  background: grey;
  margin: 5px;
  border-radius: 10px;
}

@media screen and (max-width: 500px) {
  .grid{
    grid-template-columns: 50% 50%;
  }
}
</style>
