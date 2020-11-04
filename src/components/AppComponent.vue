<template>
	<div id="root">
		<div class="wallpaper"></div>
		<Header />
		<div id="container">
			<router-view></router-view>
		</div>
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
	font-family: "Nanum Gothic", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 414px;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	overflow-y: scroll;
}
</style>
