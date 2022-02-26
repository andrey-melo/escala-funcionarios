<template>
  <app-calendario
    :dia="dia"
    v-for="dia in semanaAtual"
    :key="dia.format('DD/MM/yyyy')"
  ></app-calendario>
  
</template>

<script>
import moment from "moment";
import 'moment/locale/pt-br';
import AppCalendario from "../components/AppCalendario.vue";

moment.locale("pt-br");
export default {
  components: {
    AppCalendario,

  },
  data() {
    return {
      semanaAtual: [],
    };
  },
  methods: {
    criarSemana() {

      var currentDate = moment();

      var weekStart = currentDate.clone().startOf("week");

      for (var i = 0; i <= 6; i++) {
        this.semanaAtual.push(moment(weekStart).add(i, "days"));
      }
    },
  },
  mounted() {
    this.criarSemana();
  },
};
</script>

<style>
</style>