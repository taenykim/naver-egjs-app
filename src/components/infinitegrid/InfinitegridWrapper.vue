<template>
	<div class="wrapper">
		<h2>Infinitegrid</h2>
		<div class="container" ref="container"></div>
	</div>
</template>

<script>
import InfiniteGrid, {GridLayout} from "@egjs/infinitegrid";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	mounted() {
		let index = [0, 0];

		const template = type => {
			const randomColor = generateRandomColor("0123456789ABCEF");
			const randomWeight = Math.floor(100);
			const randomHeight = Math.floor(100 + Math.random() * 100);

			return `<div class='item' style='display:flex; justify-content:center; align-items:center; font-size:25px; font-weight:bold; color:white; text-shadow:2px 2px 2px black; background-color:${randomColor}; width:${randomWeight}px; height:${randomHeight}px'>${
				type === "prepend" ? index[0]-- : index[1]++
			}</div>`;
		};
		const templates = (num, type) =>
			type === "prepend"
				? Array(num)
						.fill(0)
						.map(_ => template(type))
						.reverse()
				: Array(num)
						.fill(0)
						.map(_ => template(type));

		const ig = new InfiniteGrid(this.$refs.container, {
			direction: "vertical",
			isOverflowScroll: true,
		});
		ig.setLayout(GridLayout, {
			margin: 20,
			align: "center",
		});

		ig.on("prepend", function(e) {
			ig.prepend(templates(14, "prepend"));
		});
		ig.on("append", function(e) {
			ig.append(templates(14, "append"));
		});

		ig.append(templates(7, "append"));
		ig.prepend(templates(7, "prepend"));
	},
};
</script>

<style>
.wrapper {
	width: inherit;
	height: 100vh;
	padding: 0px 20px 0px 20px;
}
h2 {
	color: white;
	margin: 0;
	padding: 20px 0px 20px 0px;
}
.container {
	height: 500px;
	overflow: hidden scroll;
}

#grid {
	border: 1px solid red;
	position: relative;
}
/* 
.item {
	width: 50px;
	opacity: 0;
}
.item .thumbnail {
	max-height: 100px;
	overflow: hidden;
	border-radius: 8px;
}
.item .thumbnail img {
	width: 100%;
}
.item .info {
	margin-top: 10px;
	font-weight: bold;
	color: #777;
}
.item.animate {
	transition: opacity ease 1s;
	transition-delay: 0.2s;
	opacity: 1;
} */
</style>
