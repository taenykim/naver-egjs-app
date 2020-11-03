<template>
	<div class="wrapper">
		<h2>Agent</h2>
		<div class="agent-info">
			{{ mode === "light" ? "this is light mode" : "this is dark mode" }}
		</div>
		<div>
			When you use this app on your desktop, light mode is applied, and dark mode
			is applied when you use it on mobile.
		</div>
		<div>{{ info }}</div>
		<div>{{ customInfo }}</div>
	</div>
</template>

<script>
import getAgent from "@egjs/agent";

export default {
	data() {
		return {
			mode: "light",
			info: "info",
			customInfo: "customInfo",
		};
	},
	mounted() {
		const agentInfo = getAgent();
		const isMobile = agentInfo.isMobile;
		if (isMobile) mode = "dark";
		console.log(agentInfo);
		const info = JSON.stringify(agentInfo);
		this.info = info;

		// custom
		const userAgent = navigator.userAgent.toLowerCase();
		console.log(userAgent);
		this.customInfo = JSON.stringify(userAgent);
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 0px 20px 0px 20px;
	background-color: #fff;
	color: #000;
}
h2 {
	margin: 0;
	padding: 20px 0px 20px 0px;
}
.agent-info {
	font-weight: bold;
	margin-bottom: 20px;
}
</style>
