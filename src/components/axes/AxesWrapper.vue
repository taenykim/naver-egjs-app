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
					range: [0, size[0] - 50],
					bounce: 20,
				},
				panY: {
					range: [0, size[1] - 50],
					bounce: 20,
				},
				zoom: {
					range: [1, 5],
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
				var pos = e.pos;

				ui.style[
					Axes.TRANSFORM
				] = `translate3d(${pos.panX}px, ${pos.panY}px, 0) scale(${pos.zoom})`;
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
	methods: {
		getZoomedOffset(value, zoom, beforeZoom) {
			return -(value / zoom - value / beforeZoom);
		},
	},
};
</script>

<style scoped lang="scss">
.wrapper {
	padding: 0px 20px 0px 20px;
}
.scene {
	position: relative;
	width: inherit;
	height: 500px;
	background-color: rgb(236, 236, 126);
}
.circle {
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: dodgerblue;
	transform-origin: center;
}
</style>
