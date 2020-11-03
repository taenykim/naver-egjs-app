<template>
	<div ref="wrapper" class="wrapper">
		<h2>Agent</h2>
		<div class="agent-info">
			{{ mode === "light" ? "this is light mode" : "this is dark mode" }}
		</div>
		<div>
			When you use this app on your desktop, light mode is applied, and dark mode
			is applied when you use it on mobile.
		</div>
		<div>{{ info }}</div>
	</div>
</template>

<script>
import getAgent from "@egjs/agent";

export default {
	data() {
		return {
			mode: "light",
			info: "info",
		};
	},
	watch: {
		mode() {
			this.changeMode(this.mode);
		},
	},
	mounted() {
		const agentInfo = getAgent();
		const isMobile = agentInfo.isMobile;
		if (isMobile) this.mode = "dark";
		const info = JSON.stringify(agentInfo);
		this.info = info;
		this.changeMode(this.mode);
	},
	destroyed() {
		this.changeMode("light");
	},
	methods: {
		changeMode(mode) {
			const body = document.body;
			if (mode === "light") body.classList.remove("dark");
			else if (mode === "dark") body.classList.add("dark");
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 0px 20px 0px 20px;
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
