import { createApp } from "vue";
import "./style.css";
import router from "./router/index";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(vue3GoogleLogin, {
  clientId:
    "758782912810-59d91mltfpi1u92rhafaemuumngedj3q.apps.googleusercontent.com",
});
app.use(router);
app.mount("#app");
