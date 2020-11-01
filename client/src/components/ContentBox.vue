<template>
	<div class="content-box">
		<Content
			v-for="egjs of egjses"
			:key="egjs.title"
			:title="egjs.title"
			:description="egjs.description"
			:bgColor="egjs.bgColor"
			:path="egjs.path"
		/>
	</div>
</template>

<script>
import Content from "./Content.vue";
export default {
	components: {
		Content,
	},
	data() {
		return {
			egjses: [
				{
					title: "Agent",
					description:
						"Extracts browser and operating system information from the user agent string or user agent object(userAgentData).",
					bgColor: "rgb(250, 217, 217)",
					path: "agent",
				},
				{
					title: "Axes",
					description: "none",
					bgColor: "rgb(222, 240, 247)",
					path: "axes",
				},
				{
					title: "Component",
					description: "none",
					bgColor: "rgb(250, 217, 217)",
					path: "component",
				},
				{
					title: "Flicking",
					description: "none",
					bgColor: "rgb(222, 240, 247)",
					path: "flicking",
				},
				{
					title: "Infinitegrid",
					description: "none",
					bgColor: "rgb(250, 217, 217)",
					path: "infinitegrid",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.content-box {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
}
</style>
