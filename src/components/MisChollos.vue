<template lang="html">

  <div class="container card" style="border: orange 1px solid">
    <div v-for="pedido in pedidos" :key="pedido" class="row">

      <div class="col-8 card columna66">
        <div class="contenedorimg">
          <img src="@/assets/producto.jpg" alt="" class="img-thumbnail mx-auto">

          <div class="contenedorInfo">
            <span>Chollo: {{pedido}}</span>
            <span>Estado de venta</span>
            <span>Stock</span>
            <span>Precio €</span>
          </div>

        </div>
      </div>
      <div class="col-4">
        <div class="card opcionesPedido">
          <span>Detalles del chollo</span>
        </div>

        <div class="card opcionesPedido">
          <span>Dirección de envio</span>
        </div>
        <div class="card opcionesPedido">
          <span>Mostrar salsa de vinagre</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {

  data: () => ({
    pedidos: ["Un chollito para mi","Un chollito para tí","Un chollito para él","Un chollito para ella","Un chollitititoto","un chochillito"],
  }),
}
</script>

<style lang="css" scoped>



.row{
  margin:5px;

}
.columna66{
  padding: 5px;
}

.contenedorInfo span{
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  text-align: end;
}

.columna66 img{
  display: flex;
  float: left;
  margin-left: 0px !important;
}

.opcionesPedido{
  border: 1px solid orange;
  margin: 5px;

}

.opcionesPedido span{

  margin-top: 5px;
  margin-bottom: 5px;
}

@media screen and (max-width: 768px) {
  .contenedorInfo a{
    float: left;
    text-align: left;
  }
}

</style>
