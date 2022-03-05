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

  <div class="w-full lg:w-5/6 m-auto">
    <div class="bg-white shadow-md rounded my-6">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr
            class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
          >
            <th class="py-3 px-6 text-left">Nome</th>
            <th class="py-3 px-6 text-left">Turno</th>
            <th class="py-3 px-6 text-center">Folga semanal</th>
            <th class="py-3 px-6 text-center">Status domingo</th>
            <th class="py-3 px-6 text-center">Ações</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-for="i in funcionarios"
            :key="i.nome"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-3 px-6 text-left whitespace-nowrap">
              <div class="flex items-center">
                <div class="mr-2"></div>
                <span class="font-medium">{{ i.nome }}</span>
              </div>
            </td>
            <td class="py-3 px-6 text-left">
              <span v-if="i.turno == 1">04:40 as 13:00</span>
              <span v-else-if="i.turno == 2">12:40 as 21:00</span>
              <span v-else-if="i.turno == 3">15:40 as 00:00</span>
              <span v-else>20:40 as 05:00</span>
            </td>
            <td class="py-3 px-6 text-center">
              <span>{{ i.folga }}</span>
            </td>
            <td class="py-3 px-6 text-center">
              <span
                v-if="i.domingo"
                class="
                  bg-red-200
                  text-red-600
                  py-1
                  px-3
                  rounded-full
                  text-xs
                  font-semibold
                "
                >Sem folga</span
              >
              <span
                v-else
                class="
                  bg-green-200
                  text-green-600
                  py-1
                  px-3
                  rounded-full
                  text-xs
                  font-semibold
                "
                >Com folga</span
              >
            </td>
            <td class="py-3 px-6 text-center">
              <div class="flex item-center justify-center">
                <button @click="editarFuncionario(i._id)">
                  <div
                    class="
                      w-4
                      mr-2
                      transform
                      hover:text-purple-500 hover:scale-110
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                </button>
                <button @click="excluirFuncionario(i._id)">
                  <div
                    class="
                      w-4
                      mr-2
                      transform
                      hover:text-purple-500 hover:scale-110
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
    async editarFuncionario(id) {
      const funcionarioTroca = {
        nome: "Oscar",
        turno: 3,
        folga: "Domingo",
        domingo: false,
      }
      const resp = await axios.put(`http://localhost:3001/funcionarios/${id}`, funcionarioTroca);
      this.buscarFuncionario();
    },
    async excluirFuncionario(id) {
      const resp = await axios.delete(
        `http://localhost:3001/funcionarios/${id}`
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