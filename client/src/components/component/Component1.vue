<template>
	<div class="wrapper" ref="wrapper">
		<h3>Component1</h3>
		<button @click="changeComponent2">change Component2's color</button>
	</div>
</template>

<script>
import egComponent from "./EgComponent";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	created() {
		egComponent.on("CHANGE_COMPONENT1", this.changeComponent1.bind(this));
	},
	methods: {
		changeComponent1() {
			const randomColor = generateRandomColor("0123456789ABCEF");
			this.$refs.wrapper.style.backgroundColor = randomColor;
		},
		changeComponent2() {
			console.log("트리거");

			egComponent.trigger("CHANGE_COMPONENT2");
			console.log(egComponent);
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	height: 100px;
	background-color: cornflowerblue;
	border-radius: 10px;
	margin: 0px 0px 20px 0px;
}

h3 {
	margin: 0;
	padding: 12px 0px 12px 0px;
}
</style>
