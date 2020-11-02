<template>
	<div class="wrapper">
		<h2>Infinitegrid</h2>
		<div id="grid"></div>
	</div>
</template>

<script>
import InfiniteGrid, {PackingLayout} from "@egjs/infinitegrid";
import generateRandomColor from "../../utils/generateRandomColor";

export default {
	mounted() {
		const template = () => {
			const randomColor = generateRandomColor("0123456789ABCEF");
			const randomWeight = Math.floor(100 + Math.random() * 100);
			const randomHeight = Math.floor(100 + Math.random() * 100);
			console.log({
				randomWeight,
				randomHeight,
				ratio: randomWeight / randomHeight,
			});
			return `<div style='background-color:${randomColor}; width:${randomWeight}px; height:${randomHeight}px'></div>`;
		};
		const templates = Array(12)
			.fill(0)
			.map(_ => template());
		const ig = new InfiniteGrid("#grid");

		ig.setLayout(PackingLayout, {
			// ratioWeight: 10000,
			margin: 10,
		});
		ig.on({
			append: function(e) {
				const groupKey = e.groupKey + 1;

				ig.append(templates, groupKey);
			},
		});
		ig.append(templates, 0);
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

#grid {
	height: 1200px;
}
</style>
