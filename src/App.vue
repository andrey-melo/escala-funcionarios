<template>
  <div class="bg-slate-600">
    <div class="container">
      <div class="bg-slate-600 p-6 flex justify-between">
        <h1 class="text-2xl text-white">{{ $route.name }}</h1>
        <div>
          <router-link class="text-white mx-2" to="/home">Home</router-link>
          <router-link class="text-white mx-2" to="/funcionarios">Funcionários</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>



<style>
.container{
  margin : auto;
  max-width: 1170px !important;
  padding:0 15px;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>