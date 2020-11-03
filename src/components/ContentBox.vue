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
					description:
						"Extracts browser and operating system information from the user agent string or user agent object(userAgentData).",
					bgColor: "rgb(250, 217, 217)",
					path: "agent",
				},
				{
					title: "Axes",
					description:
						"A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates. You can easily create a UI that responds to user actions.",
					bgColor: "rgb(222, 240, 247)",
					path: "axes",
				},
				{
					title: "Component",
					description: "A class used to manage events and options in a component.",
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
				{
					title: "Persist",
					description: "none",
					bgColor: "rgb(222, 240, 247)",
					path: "persist",
				},
				{
					title: "View360",
					description: "none",
					bgColor: "rgb(250, 217, 217)",
					path: "view360",
				},
				{
					title: "Visible",
					description: "none",
					bgColor: "rgb(222, 240, 247)",
					path: "visible",
				},
			],
		};
	},
	mounted() {
		console.log(persist);
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
