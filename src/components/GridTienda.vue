<template lang="html">
  <div class="container">
    <div class="row">
      <div class="grid">
        <div v-for="m in n_tiendas" :key="m" class="cellGrid text-center ">

          <h3>JAjajsalu2</h3>
          <img src="#" alt="">
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
  }),
  methods: {

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
</style>
