<template>
	<div class="wrapper">
		<h2>Persist</h2>
		<div></div>
	</div>
</template>

<script>
import persist from "./persist";
export default {
	mounted() {
		// // Overwrite global object
		// const snapshotObject = {
		// 	list: [{name: "foo"}, {name: "bar"}],
		// 	index: 0,
		// };

		// persist.set("hi", snapshotObject);
		// const p = persist.get("hi");
		// console.log(p, "p");
		persist["name"] = "taeeun";
		console.log(persist);
	},
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
