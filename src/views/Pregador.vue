<template>
  <div>
    <h1>Pregador: {{ pregador }}</h1>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Pregador",
  props: ["pregador"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/pregadores/${this.pregador}`);
  }
};
</script>

<style>
.pregacoes li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.pregacoes li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>