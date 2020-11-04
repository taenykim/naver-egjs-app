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
					description:
						"Reliable, flexible and extendable carousel used by 30 million people everyday.",
					bgColor: "rgb(222, 240, 247)",
					path: "flicking",
				},
				{
					title: "Infinitegrid",
					description:
						"A module used to arrange card elements including content infinitely according to layout type. With this module, you can implement various layouts composed of different card elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance",
					bgColor: "rgb(250, 217, 217)",
					path: "infinitegrid",
				},
				{
					title: "Persist",
					description:
						"Provide cache interface to handle persisted data among history navigation.",
					bgColor: "rgb(222, 240, 247)",
					path: "persist",
				},
				{
					title: "SpinViewer",
					description: "Object 360 photo viewer",
					bgColor: "rgb(250, 217, 217)",
					path: "spinViewer",
				},
				{
					title: "PanoViewer",
					description: "A panoramic media viewer for the mobile web",
					bgColor: "rgb(222, 240, 247)",
					path: "panoViewer",
				},
				{
					title: "Visible",
					description:
						"A class that checks if an element is visible in the base element or viewport.",
					bgColor: "rgb(250, 217, 217)",
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
	flex-direction: column;
	margin-top: 20px;
}
</style>
