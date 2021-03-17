<template lang="html">
  <div class="footer">
    <footer class="bg-light text-center text-lg-start">
      <svg class="editorial"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28 "
           preserveAspectRatio="none">
       <defs>
       <path id="gentle-wave"
       d="M-160 44c30 0
          58-18 88-18s
          58 18 88 18
          58-18 88-18
          58 18 88 18
          v44h-352z" />
        </defs>
        <g class="parallax1">
         <use xlink:href="#gentle-wave" x="50" y="3" fill="#e65100"/>
        </g>
          <g class="parallax2">
         <use xlink:href="#gentle-wave" x="50" y="0" fill="#ffb74d"/>
          </g>
            <g class="parallax3">
         <use xlink:href="#gentle-wave" x="50" y="9" fill="#ff9800"/>
         </g>
          <g class="parallax4">
         <use xlink:href="#gentle-wave" x="50" y="6" fill="rgb(97, 97, 97)"/>
        </g>
      </svg>
      <div class="container-fluid">


        <div class="row align-items-center" style="background-color: #616161; padding-top:10px; color:white; font-size: .8em">

          <div class="col-12 col-lg-4 text-center text-lg-end">
            <img src="../assets/cropped-logo-hyper-chollo-nuevo.png" class="imagen-footer" alt="...">
          </div>
          <div class="col-12 col-lg-8 text-center text-lg-start ">
            <br>
            ¡Unete a nuestro movimiento!
            <p class="text-light" href="">Un chollo es una compra inteligente. Nacemos como respuesta al gran mercado de internet,
               proporcionandote la información contrastada para que no pierdas dinero, ni tiempo en tus compras. Informate sobre productos,
               Ahorra con cada compra, Valora lo que has comprado, y Aprovecha nuestro sistema de Partner´s <br><br>
               Copyright © 2021 HyperChollo | Desarrollado por Blue Tour Travel S.L.</p>
          </div>

          <div class="col-12 text-center p-3 text-light" style="background-color: #616161;">
            © 2021 Copyright:
            <a class="text-light" href="">Manuel. P and Blue Tour Travel S.L.</a>
          </div>


        </div>

        <div class="row align-items-center">

          <div class="col-6  text-center text-end iconos-sociales-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <a href="https://www.youtube.com/">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </a>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <a href="https://www.facebook.com/">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </a>
            </svg>
          </div>

          <div class="col-6  text-center">
            <div class="row align-items-center">
              <div id="nav" class="" style="font-size: .8em">
                <router-link to="/privacidad">Politica de privacidad</router-link> |
                <router-link to="/cookies">Politica de Cookies</router-link>

              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  </div>
</template>

<script>

  export default {
    name: 'FooterPrincipal',
  }


</script>

<style lang="css" scoped>

.imagen-footer{
  width: 75%;
  height: auto;
}


.editorial {
  background: white;
  display: block;
  width: 100%;
  height: 60px;
  max-height: 60px;
  z-index:5;
  bottom:0;
  left:0px;
  float:left;
}

.parallax1 > use {
  animation: move-forever1 12s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax2 > use {
  animation: move-forever2 10s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax3 > use {
  animation: move-forever3 8s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax4 > use {
  animation: move-forever4 6s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}


.iconos-sociales-footer svg{
  margin:0 5px;
}

</style>
