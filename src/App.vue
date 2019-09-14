<template>
  <div id="app">
    <theHeader />
    <main>
      <router-view class="container"></router-view>
    </main>
    <theFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  background-color: #ffe;
  color: #473532;
  overflow-x: hidden;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #473532;
}
a.router-link-exact-active {
  color: #e4bc7f;
}
img {
  max-width: 100%;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.v-enter-active {
  transition: all 0.3s;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}
@media screen and (max-width: 576px) {
  .conteudo {
    display: block;
  }
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app main {
  flex: 1;
}
</style>
