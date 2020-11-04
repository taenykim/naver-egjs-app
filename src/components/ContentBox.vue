<template>
	<div class="content-box">
		<Content
			v-for="egjs of egjses"
			:key="egjs.title"
			:title="egjs.title"
			:path="egjs.path"
		/>
	</div>
</template>

<script>
import Content from "./Content.vue";
import persist from "./persist/persist";

export default {
	components: {
		Content,
	},
	data() {
		return {
			egjses: [
				{
					title: "Agent",
					path: "agent",
				},
				{
					title: "Axes",
					path: "axes",
				},
				{
					title: "Component",
					path: "component",
				},
				{
					title: "Flicking",
					path: "flicking",
				},
				{
					title: "Infinitegrid",
					path: "infinitegrid",
				},
				{
					title: "Persist",
					path: "persist",
				},
				{
					title: "SpinViewer",
					path: "spinViewer",
				},
				{
					title: "PanoViewer",
					path: "panoViewer",
				},
				{
					title: "Visible",
					path: "visible",
				},
			],
		};
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
.content-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: -60px;
}
</style>
