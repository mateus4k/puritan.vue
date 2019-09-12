<template>
  <div>
    <div v-if="loading">
      <pageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2>{{ api.titulo }}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Pregacao",
  mixins: [fetchData],
  props: ["pregacao"],
  created() {
    this.fetchData(`/pregacao/${this.pregacao}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/pregacao/${to.params.pregacao}`);
    next();
  }
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>