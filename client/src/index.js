import Vue from "vue";
import AppComponent from "./components/AppComponent.vue";
import "../assets/scss/globalStyle.scss";
import router from "./router/router";

new Vue({
	render: h => h(AppComponent),
	router,
}).$mount("#app");
