<template>
	<div id="container">
		<Header />
		<ContentBox />
	</div>
</template>
<script>
import getAgent from "@egjs/agent";
import Header from "./Header.vue";
import ContentBox from "./ContentBox.vue";
export default {
	name: "AppComponent",
	components: {Header, ContentBox},
	mounted() {
		const agentInfo = getAgent();
		console.log(agentInfo);
	},
};
</script>
<style lang="scss" scoped>
#container {
	width: 414px;
	height: 100vh;
	margin: 0 auto;
}
</style>
