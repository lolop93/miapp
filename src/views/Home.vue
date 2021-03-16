<template>
  <div class="home">

    <GridProductos/>
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
