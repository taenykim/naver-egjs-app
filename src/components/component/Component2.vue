<template>
	<div ref="wrapper" class="wrapper">
		<h3>Component2</h3>
		<button @click="changeComponent1">change Component1's color</button>
	</div>
</template>
<script>
import egComponent from "./EgComponent";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	mounted() {
		egComponent.on("CHANGE_COMPONENT2", this.changeComponent2.bind(this));
	},
	destroyed() {
		egComponent.off("CHANGE_COMPONENT2");
	},
	methods: {
		changeComponent1() {
			egComponent.trigger("CHANGE_COMPONENT1");
		},
		changeComponent2() {
			const randomColor = generateRandomColor("0123456789ABCEF");
			this.$refs.wrapper.style.backgroundColor = randomColor;
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	height: 100px;
	background-color: rgb(237, 100, 230);
	border-radius: 10px;
	margin: 0px 0px 20px 0px;
}
h3 {
	margin: 0;
	padding: 12px 0px 12px 0px;
}
</style>
