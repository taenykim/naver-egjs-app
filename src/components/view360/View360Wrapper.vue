<template>
	<div class="wrapper">
		<h2>View360</h2>
		<div id="mySpinViewer"></div>
		<img ref="img" style="display: none" src="./images/spin_demo.jpg" alt="" />
	</div>
</template>

<script>
import {SpinViewer} from "@egjs/view360";
export default {
	mounted() {
		const spinViewer = new SpinViewer(document.getElementById("mySpinViewer"), {
			imageUrl: this.$refs.img.src,
			rowCount: 47 /* If count of sprite row/col is lager than 1, this field is required */,
			scale: 1,
			width: "100%",
		});
		spinViewer.on({
			load: function(e) {
				spinViewer.spinBy(360, {duration: 3000});
			},
		});
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
#mySpinViewer {
	height: 400px;
	max-width: 400px;
}
</style>
