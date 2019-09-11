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
        </div>
        <div>
          <ul class="pregadores-lista">
            <li v-for="pregador in api.pregador" :key="pregador.id">
              <h2>
                <!-- TODO: rota para pregações do pregador -->
                <!-- <router-link :to="{ name: 'curso', params: { curso: curso.id }}"> -->
                <!-- <router-link :to="{ name: 'pregacoes', params: { pregacoes: pregacoes.titulo }}"> -->
                <router-link :to="{ name: 'pregador', params: { pregador: pregador.id }}">
                  {{ pregador.nome }}
                  <span id="periodo">({{ pregador.periodo }})</span>
                </router-link>
              </h2>
              <p>{{ pregador.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Pregadores",
  mixins: [fetchData],
  created() {
    this.fetchData("/pregadores");
  }
};
</script>

<style>
.pregadores-lista li {
  margin-bottom: 40px;
}
.pregadores-lista #periodo {
  color: grey;
  font-size: 1rem;
}
</style>