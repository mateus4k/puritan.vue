<template>
  <div>
    <div v-if="loading">
      <pageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <!-- TODO: exibir citação de forma randômica -->
          <div id="citacao">
            <ul>
              <li v-for="(citacao) in api.citacoes" :key="citacao.autor">
                <p>"{{ citacao.citacao }}"</p>
                <cite>– {{ citacao.autor }}</cite>
              </li>
            </ul>
          </div>
          <router-link class="btn-pregacoes" tag="button" to="/pregadores">Pregações</router-link>
        </div>
        <div>
          <img src="@/assets/puritan.png" alt="Puritan.vue" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  methods: {
    random: rand => {
      rand.sort(() => 0.5 - Math.random());
    }
  },
  created() {
    this.fetchData("/home");
  }
};
</script>

<style scoped>
.btn-pregacoes {
  border: none;
  border-radius: 4px;
  background: #4b8;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
#citacao p {
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(0, 0, 0, 5);
}
#citacao cite {
  text-transform: capitalize;
  font-style: normal;
}
</style>
