import Vue from "vue";
import VueRouter from "vue-router";
import ContentBox from "../components/ContentBox";
import AgentWrapper from "../components/agent/AgentWrapper";
import AxesWrapper from "../components/axes/AxesWrapper";
import ComponentWrapper from "../components/component/ComponentWrapper";
import FlickingWrapper from "../components/flicking/FlickingWrapper";
import InfinitegridWrapper from "../components/infinitegrid/InfinitegridWrapper";
import PersistWrapper from "../components/persist/PersistWrapper";
import SpinViewer from "../components/spinViewer/SpinViewerWrapper";
import PanoViewer from "../components/panoViewer/PanoViewerWrapper";
import Visible from "../components/visible/VisibleWrapper";

Vue.use(VueRouter);

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
		{path: "/persist", component: PersistWrapper},
		{path: "/spinViewer", component: SpinViewer},
		{path: "/panoViewer", component: PanoViewer},
		{path: "/visible", component: Visible},
		{path: "*", component: NotFound},
	],
});

export default router;
