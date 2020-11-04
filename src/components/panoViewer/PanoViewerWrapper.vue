<template>
	<div class="wrapper">
		<h2>PanoViewer</h2>
		<div id="myPanoViewer"></div>
		<img ref="img" style="display: none" src="./images/equi-room.jpg" alt="" />
	</div>
</template>

<script>
import {PanoViewer} from "@egjs/view360";
export default {
	mounted() {
		const panoViewer = new PanoViewer(document.getElementById("myPanoViewer"), {
			image: this.$refs.img.src,
			gyroMode: PanoViewer.GYRO_MODE.NONE,
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
#myPanoViewer {
	height: 400px;
	max-width: 400px;
	position: relative;
}
</style>
