<template>
	<div class="wrapper">
		<h2>Component</h2>
		<Component1 />
		<Component2 />
	</div>
</template>

<script>
import Component1 from "./Component1";
import Component2 from "./Component2";
export default {
	components: {Component1, Component2},
};
</script>

<style scoped lang="scss">
.wrapper {
	padding: 0px 20px 0px 20px;
}
h2 {
	margin: 0;
	padding: 20px 0px 20px 0px;
}
</style>
