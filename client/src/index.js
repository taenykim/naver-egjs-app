import Vue from "vue";
import AppComponent from "./components/AppComponent.vue";
import "../assets/scss/globalStyle.scss";

new Vue({
	render: h => h(AppComponent),
}).$mount("#app");
