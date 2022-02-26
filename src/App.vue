<template>
  <div class="bg-slate-600 p-6 flex justify-between">
    <h1 class="text-2xl text-white">{{ $route.name }}</h1>
    <div>
      <router-link class="text-white mx-2" to="/home">home</router-link>
      <router-link class="text-white mx-2" to="/funcionarios">funcionarios</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>



<style>
</style>