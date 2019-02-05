import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";
import Edit from "./views/Edit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/g/:encodedCategory",
      name: "game",
      component: Game
    },
    {
      path: "/g/b/:builtInCategoryTitle",
      name: "game-built-in",
      component: Game
    },
    {
      path: "/e",
      name: "edit-new",
      component: Edit
    },
    {
      path: "/e/:encodedCategory",
      name: "edit",
      component: Edit
    }
  ]
});
