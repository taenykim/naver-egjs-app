import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ContentBox from "../components/ContentBox";
import AgentWrapper from "../components/agent/AgentWrapper";
import AxesWrapper from "../components/axes/AxesWrapper";
import ComponentWrapper from "../components/component/ComponentWrapper";
import FlickingWrapper from "../components/flicking/FlickingWrapper";
import InfinitegridWrapper from "../components/infinitegrid/InfinitegridWrapper";
const NotFound = {template: `<div>Page Not Found</div>`};

const router = new VueRouter({
	mode: "history",
	routes: [
		{path: "/", component: ContentBox},
		{path: "/agent", component: AgentWrapper},
		{path: "/axes", component: AxesWrapper},
		{path: "/component", component: ComponentWrapper},
		{path: "/flicking", component: FlickingWrapper},
		{path: "/infinitegrid", component: InfinitegridWrapper},
		{path: "*", component: NotFound},
	],
});

export default router;
