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
      path: "*",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
    },
    {
      path: "/contato",
      name: "contato",
      component: () =>
        import(/* webpackChunkName: "contato" */ "./views/Contato.vue")
    },
    {
      path: "/pregadores",
      name: "pregadores",
      component: () =>
        import(/* webpackChunkName: "pregadores" */ "@/views/Pregadores.vue")
    },
    {
      path: "/pregadores/:pregador",
      name: "pregador",
      component: () =>
        import(/* webpackChunkName: "pregacoes" */ "@/views/Pregador.vue"),
      props: true,
      children: [
        {
          path: ":pregacao",
          name: "pregacao",
          component: () =>
            import(/* webpackChunkName: "pregacao" */ "@/views/Pregacao.vue"),
          props: true
        }
      ]
    }
  ]
});
