<template>
	<div
		class="content"
		ref="content"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		<router-link :to="{path: '/' + path}">
			<div class="icon"></div>
		</router-link>

		<router-link :to="{path: '/' + path}">
			<div class="title">{{ title }}</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: ["title", "path"],
	methods: {
		onMouseEnter() {
			const content = this.$refs.content;

			content.classList.add("hover");
		},
		onMouseLeave() {
			const content = this.$refs.content;

			content.classList.remove("hover");
		},
	},
};
</script>

<style scoped lang="scss">
.content {
	position: relative;
	border-radius: 8px;
	margin: 8px;
	padding: 8px;
}

.icon {
	width: 80px;
	height: 80px;
	background-image: url("../assets/svg/directory.svg");
	background-size: cover;
	background-position: center;
}

.title {
	font-size: 13px;
	font-weight: bold;
	text-align: center;
	color: white;
	text-shadow: 2px 2px 2px #444;
}

.description {
	font-size: 14px;
}
.hover {
	background-color: #00000066;
}
</style>
