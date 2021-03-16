<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 col-md-1">
        <aside class="navbar">
          <div class="container menu-lateral">
            <transition name="slide-fade"><div class="popup" v-if="mostrar" ><p>Chollos más recientes</p></div>
            <div v-else></div></transition>
            <svg @mouseover="mostrarPopup()" @mouseleave="ocultarPopup()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock-fill  menu-item" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>

            <transition name="slide-fade"><div class="popup" v-if="mostrar" ><p>Lo más hypeado</p></div>
            <div v-else></div></transition>
            <svg @mouseover="mostrarPopup()" @mouseleave="ocultarPopup()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star-fill  menu-item" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>

            <transition name="slide-fade"><div class="popup" v-if="mostrar" ><p>Subir chollo</p></div>
            <div v-else></div></transition>
            <svg @mouseover="mostrarPopup()" @mouseleave="ocultarPopup()" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-upload  menu-item" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>

          </div>
        </aside>
      </div>
      <div class="col-10 col-md-11">
        <div class="container-fluid">
          <div v-for="n in n_filas" :key="n" class="row">
            <div v-for="m in n_columnas" :key="m" class="col cell-grid">
                <h3>Titulo del producto</h3>
                <p>{{n_productos[contarIndice(n,m)]}}</p>
            </div>
          </div>
      <!--<div v-for="filas in n_productos2" :key="filas" class="row">
            <div v-for="columnas in filas" :key="columnas" :class="'col-'+(n_columnas-1)">
                <p>{{columnas}}</p>
            </div>
          </div>-->
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
    n_productos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    //n_productos2: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,80]],
    n_filas: 0,
    n_columnas: 4,
    n_col_restantes: 0,
    mostrar: false,

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
    mostrarPopup: function(){
      this.mostrar = true;
    },

    ocultarPopup: function(){
      this.mostrar = false;
    },

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

aside{
  background: ;
  height: auto;
  position: sticky;
  top: 10px;
  padding: 0px;
  margin-top: 1em;
}

.popup{
position:absolute;
background: orange;
left:40px;
border-radius:0px 10px 10px 0px;
max-height: 40px;
width: 200px;



}
.cell-grid{
  background: #e0e0e0;
  margin: 10px;
  border-radius: 10px;
}

.menu-lateral svg{
  display: block;
}

.menu-lateral{
  display:block !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.menu-item{
  padding: 2px;
  min-width: 40px;
  background-color: orange;
  margin-bottom: 5px;
  border-radius: 10px 0px 0px 10px;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/*------Medias query----------*/
@media screen and (max-width: 400px) {
  .menu-lateral{
    padding:0;
  }
}

</style>
