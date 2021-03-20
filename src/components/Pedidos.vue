<template lang="html">

  <div class="container card" style="border: orange 1px solid">
    <div v-for="pedido in pedidos" :key="pedido" class="row">

      <div class="col-8 card columna66">
        <div class="contenedorimg">
          <img src="@/assets/producto.jpg" alt="" class="img-thumbnail mx-auto">

          <div class="contenedorInfo">
            <span>Nombre: {{pedido}}</span>
            <span>Fecha de compra</span>
            <span>Dinero€</span>
          </div>

        </div>
      </div>
      <div class="col-4">
        <div class="card opcionesPedido">
          <span>Localiza tu pedido</span>
        </div>

        <div class="card opcionesPedido">
          <span>Detalles del pedido</span>
        </div>

        <div class="card opcionesPedido">
          <span>Descargar factura</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {

  data: () => ({
    pedidos: ["Un vasito de leche","Una galleteteta","una tetera","una napolitaaaaaana","la uña del dedo gordo del pie","la pezuña de un caballo mugriento"],
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
