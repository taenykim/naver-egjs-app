<template>
	<div class="card" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
export default {
	props: ["bgColor"],
};
</script>

<style scoped lang="scss">
.card {
	height: 200px;
	width: calc(374px / 2);
	transform-origin: left;
	margin: 0;
}
</style>
