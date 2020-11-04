<template>
	<div ref="wrapper" class="wrapper">
		<h2>Axes</h2>
		<div ref="scene" class="scene">
			<div
				ref="circle"
				class="circle"
				style="transform: scale(1) translate3d(0px, 0px, 0)"
			></div>
		</div>
	</div>
</template>

<script>
import Axes, {PanInput, PinchInput, WheelInput, MoveKeyInput} from "@egjs/axes";

const baseScale = 0.5;
const SUPPORT_TOUCH = "ontouchstart" in window;
const CIRCLE_SIZE = 100;

export default {
	mounted() {
		const SUPPORT_TOUCH = "ontouchstart" in window;
		const delegateTarget = this.$refs.scene;
		const {width, height} = delegateTarget.getBoundingClientRect();
		const size = [width, height];
		const ui = this.$refs.circle;

		// 1. Initialize eg.Axes
		const axes = new Axes(
			{
				panX: {
					range: [0, size[0] - CIRCLE_SIZE],
					bounce: CIRCLE_SIZE / 5,
				},
				panY: {
					range: [0, size[1] - CIRCLE_SIZE],
					bounce: CIRCLE_SIZE / 5,
				},
				zoom: {
					range: [1, 2],
					bounce: 1,
				},
			},
			{
				minimumDuration: 300,
			},
		);

		// 2. attach event handler
		axes.on({
			change: function(e) {
				const pos = e.pos;

				ui.style[
					Axes.TRANSFORM
				] = `translate3d(${pos.panX}px, ${pos.panY}px, 0) scale(${pos.zoom})`;
				const zoomRatio = pos.zoom;
				axes.axis.panX.range = [
					(CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
					size[0] - CIRCLE_SIZE - (CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
				];
				axes.axis.panX.bounce = [
					(CIRCLE_SIZE * zoomRatio) / 5,
					(CIRCLE_SIZE * zoomRatio) / 5,
				];
				axes.axis.panY.range = [
					(CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
					size[1] - CIRCLE_SIZE - (CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
				];
				axes.axis.panY.bounce = [
					(CIRCLE_SIZE * zoomRatio) / 5,
					(CIRCLE_SIZE * zoomRatio) / 5,
				];
			},
		});

		// 3. Initialize inputTypes and connect it
		axes.connect("panX panY", new PanInput(delegateTarget));
		axes
			.connect(
				"panX panY",
				new MoveKeyInput(delegateTarget, {
					scale: [5, -5],
				}),
			)
			.connect(
				"zoom",
				SUPPORT_TOUCH
					? new PinchInput(delegateTarget)
					: new WheelInput(delegateTarget),
			);

		// 4. move to position
		axes.setTo({panX: 0, panY: 0});
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
}
.scene {
	position: relative;
	width: inherit;
	height: 300px;
	background-color: #00000088;
}
.circle {
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #fff;
	transform-origin: center;
}
</style>
