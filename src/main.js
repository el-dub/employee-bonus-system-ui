import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import { IconsPlugin } from "bootstrap-vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// import "bootstrap-vue/dist/bootstrap-vue.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.min.css.map";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

import "@/index.scss";

const app = createApp(App);

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://localhost:8080";
app.use(VueAxios, axios);

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse as fasHouse,
  faShirt as fasShirt,
  faBowlFood as fasBowlFood,
  faSoap as fasSoap,
  faChild as fasChild,
  faBook as fasBook,
  faStar as fasStar,
  faBuilding as fasBuilding,
  faCoins as fasCoins,
  faUsers as fasUsers,
  faUser as fasUser,
  faClockRotateLeft as fasClockRotateLeft,
  faChevronLeft as fasChevronLeft,
  faWallet as fasWallet,
  faAward as fasAward,
  faCircleExclamation as fasCircleExclamation,
  faPenRuler as fasPenRuler,
  faCartShopping as fasCartShopping,
  faAt as fasAt,
  faPlus as fasPlus,
  faList as fasList,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fasHouse,
  fasShirt,
  fasBowlFood,
  fasSoap,
  fasChild,
  fasBook,
  fasStar,
  fasBuilding,
  fasCoins,
  fasUsers,
  fasUser,
  fasClockRotateLeft,
  fasChevronLeft,
  fasWallet,
  fasAward,
  fasCircleExclamation,
  fasPenRuler,
  fasCartShopping,
  fasAt,
  fasPlus,
  fasList
);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(createPinia());

app.use(BootstrapVue);
// app.use(IconsPlugin);
app.use(BootstrapVueIcons);
app.use(router);

app.mount("#app");
