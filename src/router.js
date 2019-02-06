import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import uniqArticle from "./components/UniqArticle.vue";

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
      path: "/articles/:slug",
      name: "uniqArticle",
      component: uniqArticle,
      props: true
    }
  ]
});
