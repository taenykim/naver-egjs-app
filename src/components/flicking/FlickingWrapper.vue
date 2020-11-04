<template>
	<div class="wrapper">
		<h2>Flicking</h2>
		<div id="flicker">
			<div class="panel">one</div>
			<div class="panel">two</div>
			<div class="panel">three</div>
			<div class="panel">four</div>
		</div>
	</div>
</template>

<script>
import Flicking from "@egjs/flicking";

export default {
	mounted() {
		const flicking = new Flicking("#flicker", {circular: true});
	},
};
</script>

<style scoped lang="scss">
.wrapper {
	width: inherit;
	height: 100vh;
	padding: 0px 20px 0px 20px;
}
h2 {
	color: white;
	margin: 0;
	padding: 20px 0px 20px 0px;
}

#flicker {
	height: 300px;
}
.panel {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 300px;
	color: white;
	font-size: 50px;
	font-weight: bold;
}

.panel:nth-child(4n + 1) {
	background-color: cornflowerblue;
}
.panel:nth-child(4n + 2) {
	background-color: rgb(237, 100, 219);
}
.panel:nth-child(4n + 3) {
	background-color: rgb(100, 237, 152);
}
.panel:nth-child(4n + 4) {
	background-color: rgb(237, 173, 100);
}
</style>
