<template lang="html">

  <div class="container card" style="border: orange 1px solid">
    <div class="row primera-fila">
      <div class="col primera">
        <img src="@/assets/valala.jpg" alt="" class="img-thumbnail mx-auto img-perfil rounded-circle">
        <span>Nombre de usuario</span>
      </div>
      <div class="col">
        <h5>Nombre</h5>
        <span>Pepe</span>
        <hr>
        <h5>Apellidos</h5>
        <span>Prieto Varela</span>
        <hr>
        <h5>Direccion</h5>
        <span>c/ Me cago en dios</span>
        <hr>
        <h5>Telefono</h5>
        <span>6666666666</span>
        <hr>
        <h5>Correo</h5>
        <span>email@email.com</span>

      </div>
      <div class="col tercera">
        <div class="card opcionesPerfil">
          <p>Perfil</p>
        </div>
        <div class="card opcionesPerfil">
          <p>Mis direcciones</p>
        </div>
        <div class="card opcionesPerfil">
          <p>Mis tarjetas</p>
        </div>
        <div class="card opcionesPerfil">
          <p>Seguridad de cuenta</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MiPerfil',

}
</script>

<style lang="css" scoped>

  .img-perfil{
    max-width: 150px;
    display: block;
  }

  .primera span{
    display: block;
  }

  .primera{
    margin: 10px auto;
  }

  .primera-fila{
    padding: 20px;
  }

  .opcionesPerfil{
    border: 1px solid orange;
    margin: 5px;

  }

  .opcionesPerfil p{

    margin-top: 5px;
    margin-bottom: 5px;
  }

</style>
