<template>
  <div>
    <h1>Pregações</h1>
    {{ api.pregadores.pregador }}
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Pregacao",
  mixins: [fetchData],
  created() {
    this.fetchData("/pregadores");
  }
};
</script>

<style>
</style>