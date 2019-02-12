import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import uniqArticle from "./components/UniqArticle.vue";
import Profile from "./components/Profile.vue";
import Signup from "./components/Signup.vue";
import Signin from "./components/Signin.vue";
import Tags from "./components/Tags.vue";
import createArticle from "./components/createArticle.vue";

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
    },
    {
      path: "/@:username",
      name: "profile",
      component: Profile
    },
    {
      path: "/register",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "signin",
      component: Signin
    },
    {
      path: "/tag/:tag",
      name: "tags",
      component: Tags,
      props: true
    },
    {
      path: "/editor",
      name: "createArticle",
      component: createArticle,
      props: true
    }
  ]
});
