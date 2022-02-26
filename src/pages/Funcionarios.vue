<template>
  <div class="w-2/5 m-auto py-5">
    <input
      v-model="funcionario.nome"
      class="w-4/5 block m-auto text-center"
      type="text"
      placeholder="Nome"
    />

    <span class="flex gap-5 items-center justify-center">
      <label
        >04:40 as 13:00
        <input
          v-model="funcionario.turno"
          class="w-full text-center"
          name="turno"
          type="radio"
          value="1"
          placeholder="Turno"
        />
      </label>
      <label
        >12:40 as 21:00
        <input
          v-model="funcionario.turno"
          class="w-full text-center"
          name="turno"
          type="radio"
          value="2"
          placeholder="Turno"
        />
      </label>
      <label
        >15:40 as 00:00
        <input
          v-model="funcionario.turno"
          class="w-full text-center"
          name="turno"
          type="radio"
          value="3"
          placeholder="Turno"
        />
      </label>
      <label
        >20:40 as 05:00
        <input
          v-model="funcionario.turno"
          class="w-full text-center"
          name="turno"
          type="radio"
          value="4"
          placeholder="Turno"
        />
      </label>
    </span>

    <!-- <input
      v-model="funcionario.folga"
      class="w-4/5 block m-auto text-center"
      type="text"
      placeholder="Folga"
    /> -->
    <select>
      <option value="">Domingo</option>
      <option value="">Segunda-feira</option>
      <option value="">Terça-feira</option>
      <option value="">Quarta-feira</option>
      <option value="">Quinta-feira</option>
      <option value="">Sexta-feira</option>
      <option value="">Sábado</option>
    </select>
    <label
      >Houve folga no domingo?
      <input v-model="funcionario.domingo" type="checkbox" value="false"
    /></label>
    <button
      class="px-3 py-1 w-1/2 mx-auto block bg-orange-400 rounded-lg"
      @click="salvarFuncionario()"
      
    >
      Cadastrar
    </button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      funcionario: {},
      funcionarios: [],
    };
  },
  methods: {
    async buscarFuncionario() {
      const resp = await axios.get("http://localhost:3001/funcionarios");
      this.funcionarios = resp.data;
    },
    async salvarFuncionario() {
      const resp = await axios.post(
        "http://localhost:3001/funcionarios",
        this.funcionario
      );
      this.buscarFuncionario();
    },
  },
 
  mounted() {
    this.buscarFuncionario();
  },
};
</script>

<style>
</style>