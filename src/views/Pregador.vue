<template>
  <div>
    <div v-if="loading">
      <pageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Pregador: {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Pregações</h2>
          <ul class="pregacoes">
            <li v-for="pregacao in api.pregacoes" :key="pregacao.id">
              <router-link :to="{ name: 'pregacao', params: { pregacao: pregacao.id } }">
                <p>{{ pregacao.titulo }}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Pregador",
  mixins: [fetchData],
  props: ["pregador"],
  created() {
    this.fetchData(`/pregador/${this.pregador}`);
  }
};
</script>

<style>
.pregacoes li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.pregacoes li a.router-link-active {
  background: #e4bc7f;
  color: white;
}
</style>