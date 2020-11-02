<template>
	<div class="content" :style="{backgroundColor: bgColor}">
		<router-link :to="{path: '/' + path}">
			<div class="title">{{ title }}</div>
		</router-link>
		<hr />
		<div class="description">{{ description }}</div>
	</div>
</template>

<script>
export default {
	props: ["title", "description", "bgColor", "path"],
	methods: {},
};
</script>

<style scoped lang="scss">
.content {
	position: relative;
	height: 120px;
	margin: 0px 0px 0px 0px;
	padding: 20px;
}

.title {
	font-size: 20px;
	font-weight: bold;
}

.description {
	font-size: 14px;
}
</style>
