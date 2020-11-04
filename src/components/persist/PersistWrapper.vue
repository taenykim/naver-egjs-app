<template>
	<div class="wrapper">
		<h2>Persist</h2>
		<button @click="addComponent">Add component</button>
		<div ref="persistContainer"></div>
	</div>
</template>

<script>
import persist from "./persist";
export default {
	mounted() {
		this.$refs.persistContainer.innerHTML = persist.get("persist");
	},
	methods: {
		addComponent() {
			if (persist.get("persist") === null) {
				persist.set(
					"persist",
					"<div style='border-radius:10px; margin-top:10px; display:flex; justify-content:center; align-items:center; height:100px; background-color:#ddd;'>persist item added</div>",
				);
			} else {
				persist.set(
					"persist",
					persist.get("persist") +
						"<div style='border-radius:10px; margin-top:10px; display:flex; justify-content:center; align-items:center; height:100px; background-color:#ddd;'>persist item added</div>",
				);
			}
			this.$refs.persistContainer.innerHTML = persist.get("persist");
		},
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
