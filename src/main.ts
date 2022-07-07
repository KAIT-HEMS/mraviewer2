import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"; // 追加
import { library } from "@fortawesome/fontawesome-svg-core"; // 追加
/* import specific icons */
import { faHome } from "@fortawesome/free-solid-svg-icons"; // 追加
import { faCog } from "@fortawesome/free-solid-svg-icons"; // 追加
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; // 追加
/* add icons to the library */
library.add(faHome); // 追加
library.add(faCog); // 追加
library.add(faQuestionCircle); // 追加
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // 追加

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
