import { createApp } from "vue";
import "lib-flexible";
import App from "./App.vue";
import vueI18n from "@/plugins/i18n";
import vant from "@/plugins/vant";

const app = createApp(App);

app.use(vant);
app.use(vueI18n);

app.mount("#app");
