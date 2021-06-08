import { createApp } from "vue";
import App from "./App.vue";
import vueI18n from "@/plugins/i18n";
import vant from "@/plugins/vant";
import "@/assets/style/import.scss";
import router from "@/router/index";
import "lib-flexible";

const app = createApp(App).use(router);

app.use(vant);
app.use(vueI18n);

app.mount("#app");
