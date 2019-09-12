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
          <ul class="lista-pregadores">
            <li v-for="pregador in api.pregadores" :key="pregador.id">
              <router-link :to="{ name: 'pregador', params: { pregador: pregador.id }}">
                <div class="card">
                  <h2>
                    {{ pregador.nome }}
                    <span id="periodo">({{ pregador.periodo }})</span>
                  </h2>
                  <p>{{ pregador.descricao }}</p>
                </div>
              </router-link>
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
.lista-pregadores li .card {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
.lista-pregadores li p {
  font-weight: 500;
  color: grey;
}
.lista-pregadores #periodo {
  color: grey;
  font-size: 1rem;
}
</style>