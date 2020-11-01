import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ContentBox from "../components/ContentBox";
import AgentWrapper from "../components/agent/AgentWrapper";
import AxesWrapper from "../components/axes/AxesWrapper";
const NotFound = {template: `<div>Page Not Found</div>`};

const router = new VueRouter({
	mode: "history",
	routes: [
		{path: "/", component: ContentBox},
		{path: "/agent", component: AgentWrapper},
		{path: "/axes", component: AxesWrapper},
		{path: "*", component: NotFound},
	],
});

export default router;
