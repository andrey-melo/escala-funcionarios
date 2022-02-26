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
    <select v-model="funcionario.folga">
      <option>Selecione</option>
      <option value="Domingo">Domingo</option>
      <option value="Segunda-feira">Segunda-feira</option>
      <option value="Terça-feira">Terça-feira</option>
      <option value="Quarta-feira">Quarta-feira</option>
      <option value="Quinta-feira">Quinta-feira</option>
      <option value="Sexta-feira">Sexta-feira</option>
      <option value="Sábado">Sábado</option>
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

  <div class="p-4">
    <div class="bg-white p-4 rounded-md">
      <div
        class="
          flex
          justify-around
          bg-gradient-to-tr
          from-indigo-600
          to-purple-600
          rounded-t-md
          py-2
          px-4
          text-white
          font-bold
          text-md
        "
      >
        <div>
          <span>Nome</span>
        </div>
        <div>
          <span>Turno</span>
        </div>
        <div>
          <span>Folga Semanal</span>
        </div>
        <div>
          <span>Domingo do mês</span>
        </div>
      </div>
      <div>
        <div
          v-for="i in funcionarios"
          :key="i.nome"
          class="
            flex
            items-center
            justify-around
            text-sm
            font-normal
            hover:bg-slate-400
            border-x-2 border-b-2
          "
        >
          <div class="w-24 py-2 text-center">
            <span>{{ i.nome }}</span>
          </div>
          <div class="w-14">
            <span>{{ i.turno }}</span>
          </div>
          <div class="w-28">
            <span>{{ i.folga }}</span>
          </div>
          <span class="com-domingo" v-if="i.domingo"></span>
          <span class="sem-domingo" v-else></span>
        </div>
      </div>
    </div>
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
.com-domingo,
.sem-domingo {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.com-domingo {
  background-color: lawngreen;
}
.sem-domingo {
  background-color: red;
}
</style>