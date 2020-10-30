<template>
	<div id="container">
		<Header />
		<ContentBox />
		<UserAgent />
	</div>
</template>
<script>
import getAgent from "@egjs/agent";
import UserAgent from "./UserAgent.vue";
import Header from "./Header.vue";
import ContentBox from "./ContentBox.vue";
export default {
	name: "AppComponent",
	components: {UserAgent, Header, ContentBox},
	mounted() {
		const agentInfo = getAgent();
		console.log(agentInfo);
	},
};
</script>
<style lang="scss" scoped>
#container {
	background-color: wheat;
	width: 414px;
	height: 100vh;
	margin: 0 auto;
}
</style>
