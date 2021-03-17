<template>
  <div class="home">

    <GridProductos/>
    <div class="rowShape">
      <div>
        <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep5" viewBox="0 0 1600 200" style="display: block;" data-height="200">
          <polygon class="" style="fill: rgb(255, 255, 255);" points="1488,134 1304,100 1068,152 909.935,92.044 672,198 364,142 242,32 -4,95 -4,204 1604,204 1604,0 "></polygon>
          <polygon class="" style="opacity: 1;fill: #95a5a6;" points="672,198 364,142 242,32 -4,95 -4,82.333 242,32 374,136 "></polygon>
          <polygon class="" style="opacity: 1;fill: #95a5a6;" points="894,86 672,198 909.935,92.044 "></polygon>
          <polygon class="" style="opacity: 1;fill: #6c7a89;" points="1068,152 1302,86 1486,126 1604,0 1488,134 1304,100 "></polygon>
        </svg>
      </div>
    </div>
    <HelloWorld msg="Prueba 1ª Proyecto Kbesa"/>

    <div class="container">
      <h2 style="padding:10px 0;">Busca el chollo y compra inteligente</h2>
      <h4 class="text-center text-md-start">Nuestro propósito en el mundo del chollo</h4>
      <p class="text-center text-md-start">Hyperchollo.com es una plataforma de información y venta del Chollo. Donde podrás realizar tus compras inteligentes. Por nuestra plataforma pasan desde anuncios gratuitos hasta anuncios de empresas colaboradoras. Todos los Chollos son ofrecidos en nuestra plataforma, aunque únicamente los enviados desde nuestra cartera de productos pasan por nuestro sistema de envíos. La mayor parte de los Chollos ofrecidos por hyperchollo.com se envían desde España. Sabiendo todo esto, siempre recomendamos revisar el origen del envío además de la reputación del Seller. </p>
      <h4 class="text-center text-md-start">Valora, Opina y comparte Chollos </h4>
      <p class="text-center text-md-start">En los productos adquiridos directamente en nuestra plataforma, los envíos están en todo momento bajo seguimiento por nuestro equipo y testeados con anterioridad. Forma parte de nuestra comunidad comentando, publicando chollos. O bien aprovéchate de nuestra herramienta y consigue de los mejores precios del mercado realizando tu compra inteligente. Como resultado del uso de nuestra web podremos obtener conocimiento compartido, acerca de productos en concreto. Así pues, tendremos acceso a más información acerca de precios, calidad, o usabilidad de productos que estamos pensando adquirir. Si además de aprovechar nuestra herramienta de compras inteligentes, quieres colaborar de forma más directa. Entonces infórmate de nuestro programa de Partner´s. Si eres un e-commerce, infórmate de nuestras condiciones de venta y hazte Seller!</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GridProductos from '@/components/GridProductos.vue'

export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    HelloWorld, GridProductos,
  },
}
</script>

<style  lang="css" scoped>

  .home{

  }

  .rowShape{
  width:100%;
  padding:0;
  margin:0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position:relative;
  }
  .svg-separator{
  display: block;
  background: 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  -webkit-transform: translateY(-100%) translateY(2px);
  transform: translateY(-100%) translateY(2px);
  width: 100%;
}
.svg-separator.bottom{
  top: auto;
  bottom: 0;
}
.sep5 {
  transform: translateY(-100%) translateY(2px) scale(1,1);
  transform-origin: top;
}

</style>
