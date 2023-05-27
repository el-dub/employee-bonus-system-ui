import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";

import "./assets/main.css";

const app = createApp(App);

app.config.performance = true;

app.use(createPinia());

app.mount("#app");
