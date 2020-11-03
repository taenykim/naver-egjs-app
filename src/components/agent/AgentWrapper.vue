<template>
	<div ref="wrapper" class="wrapper">
		<h2>Agent</h2>
		<div class="agent-info">
			{{ mode === "light" ? "this is light mode" : "this is dark mode" }}
		</div>
		<p>
			When you use this app on your desktop, light mode is applied, and dark mode
			is applied when you use it on mobile.
		</p>
		<pre>{{ info }}</pre>
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
		const info = JSON.stringify(agentInfo, null, 4);
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
	margin: 0px 20px 0px 20px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
h2 {
	width: -webkit-fill-available;
	margin: 0;
	padding: 20px 0px 20px 0px;
}
.agent-info {
	width: -webkit-fill-available;
	font-weight: bold;
	margin-bottom: 20px;
}
p {
	width: -webkit-fill-available;
	margin-bottom: 20px;
}
</style>
