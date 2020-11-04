<template>
	<div class="component-wrapper" ref="wrapper">
		<h3>Component1</h3>
		<button @click="changeComponent2">change Component2's color</button>
	</div>
</template>

<script>
import egComponent from "./EgComponent";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	mounted() {
		egComponent.on("CHANGE_COMPONENT1", this.changeComponent1.bind(this));
	},
	destroyed() {
		egComponent.off("CHANGE_COMPONENT1");
	},
	methods: {
		changeComponent1() {
			const randomColor = generateRandomColor("0123456789ABCEF");
			this.$refs.wrapper.style.backgroundColor = randomColor;
		},
		changeComponent2() {
			egComponent.trigger("CHANGE_COMPONENT2");
		},
	},
};
</script>

<style scoped lang="scss">
.component-wrapper {
	height: 100px;
	background-color: white;
	border-radius: 10px;
	margin: 0px 0px 20px 0px;
	padding: 10px;
}

h3 {
	margin: 0;
	padding: 12px 0px 12px 0px;
}
</style>
