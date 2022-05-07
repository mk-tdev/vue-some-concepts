import { createApp } from "vue";
import store from "./store/store";
import App from "./App.vue";
import "./index.css";

import Header from "./components/Header.vue";
import LayoutContainer from "./containers/LayoutContainer.vue";

const app = createApp(App);

app.component("the-header", Header);
app.component("the-layout-container", LayoutContainer);

app.use(store);

app.mount("#app");
