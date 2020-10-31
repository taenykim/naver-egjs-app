<template>
	<div class="content" :style="{backgroundColor: bgColor}" @click="getUserAgent">
		<router-link :to="{path: '/' + path}">
			<div class="title">{{ title }}</div>
		</router-link>
		<hr />
		<div class="description">{{ description }}</div>
	</div>
</template>

<script>
import userAgentAPI from "../api/userAgentAPI";
export default {
	props: ["title", "description", "bgColor", "path"],
	methods: {
		async getUserAgent() {
			const response = await userAgentAPI.get();
			console.log(response.data.message);
		},
	},
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
