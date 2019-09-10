import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pregacoes",
      name: "pregacoes",
      component: () =>
        import(/* webpackChunkName: "pregacoes" */ "@/views/Pregacoes.vue")
    },
    {
      path: "/contato",
      name: "contato",
      component: () =>
        import(/* webpackChunkName: "contato" */ "./views/Contato.vue")
    },
    {
      path: "*",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
    }
  ]
});
