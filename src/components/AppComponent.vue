<template>
	<div id="container">
		<Header />
		<router-view></router-view>
	</div>
</template>
<script>
import Header from "./Header.vue";
import ContentBox from "./ContentBox.vue";
export default {
	name: "AppComponent",
	components: {Header, ContentBox},
	mounted() {},
};
</script>
<style lang="scss" scoped>
#container {
	max-width: 414px;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	overflow-y: scroll;
}
</style>
