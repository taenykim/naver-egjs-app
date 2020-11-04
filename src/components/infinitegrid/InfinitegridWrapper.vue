<template>
	<div class="wrapper">
		<h2>Infinitegrid (not yet)</h2>
		<div class="container">
			<div id="grid"></div>
		</div>
	</div>
</template>

<script>
import InfiniteGrid, {GridLayout} from "@egjs/infinitegrid";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	mounted() {
		const template = () => {
			const randomColor = generateRandomColor("0123456789ABCEF");
			const randomWeight = Math.floor(100);
			const randomHeight = Math.floor(100 + Math.random() * 100);
			console.log({
				randomWeight,
				randomHeight,
				ratio: randomWeight / randomHeight,
			});
			return `<div class='item' style='background-color:${randomColor}; width:${randomWeight}px; height:${randomHeight}px'></div>`;
		};
		const templates = Array(1)
			.fill(0)
			.map(_ => template());
		const ig = new InfiniteGrid("#grid");

		ig.setLayout(GridLayout, {
			align: "center",
			horizontal: false,
			margin: 10,
			isOverflowScroll: true,
		});
		ig.on({
			// change: function(e) {
			// 	var pos = e.scrollPos;
			// 	refresh(pos);
			// },
			append: function(e) {
				console.log(e);

				const groupKey = Number(e.groupKey + 1);
				ig.append(templates, groupKey);
			},
		});
		ig.append(templates, 0);
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
	overflow: scroll;
	position: relative;
}

#grid {
	border: 1px solid red;
	margin-bottom: 20px;
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
