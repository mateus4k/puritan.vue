<template>
  <div>
    <div v-if="loading">
      <pageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for="(dados, index) in api.contato" :key="index">
            <p v-if="index === 'email'">
              <b>{{ index.charAt(0).toUpperCase() + index.slice(1) }}:</b>
              <a :href="`mailto:${dados}`">{{ dados }}</a>
            </p>
            <p v-else>
              <b>{{ index.charAt(0).toUpperCase() + index.slice(1) }}:</b>
              <span>{{ dados }}</span>
            </p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>

<style>
</style>