<template>
	<div class="wrapper">
		<h2>Visible</h2>
		<div class="scroller" ref="scroller" @scroll="scrollHandler">
			<Card
				v-for="cardItem of cards"
				:key="cardItem.id"
				:bgColor="cardItem.bgColor"
			/>
		</div>
	</div>
</template>

<script>
import {SpinViewer} from "@egjs/view360";
import generateRandomColor from "../../utils/generateRandomColor";
import Card from "./Card";
import Visible from "@egjs/visible";
export default {
	components: {Card},
	data() {
		return {
			cards: [
				{id: 0, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 1, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 2, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 3, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 4, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 5, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 6, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 7, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 8, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 9, bgColor: generateRandomColor("0123456789ABCDEF")},
				{id: 10, bgColor: generateRandomColor("0123456789ABCDEF")},
			],
			visible: undefined,
		};
	},
	mounted() {
		const visible = new Visible(this.$refs.scroller, {
			targetClass: "card",
			expandSize: 0,
		});
		this.visible = visible;

		this.visible.on("change", function(e) {
			if (e.visible) {
				e.visible.forEach(item => {
					item.classList.add("scale");
					item.classList.remove("origin");
				});
			}
			if (e.invisible) {
				if (e.invisible) {
					e.invisible.forEach(item => {
						item.classList.add("origin");
						item.classList.remove("scale");
					});
				}
			}
		});
	},
	methods: {
		scrollHandler() {
			this.visible.check();
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

.scroller {
	height: 500px;
	overflow-y: scroll;
}
.scale {
	transform: scaleX(2);
	transition: 1s;
}
.origin {
	transform: scaleX(1);
	transition: 1s;
}
</style>
