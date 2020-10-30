<template>
	<div @click="getUserAgent">하이</div>
</template>

<script>
import userAgentAPI from "../api/userAgentAPI";
export default {
	methods: {
		async getUserAgent() {
			const response = await userAgentAPI.get();
			console.log(response.data.message);
		},
	},
};
</script>

<style>
body {
	margin: 0;
}
</style>
