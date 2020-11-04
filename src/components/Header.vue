<template>
	<header>
		<div id="logo"><span>NAVER</span> <span>egjs</span></div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
	text-align: center;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: #fff;
}
#logo {
	padding: 20px 0px 20px 0px;
	font-size: 20px;
	font-weight: bold;
	font-family: "Fredoka One", cursive;
	letter-spacing: 1px;

	& > span:nth-child(1) {
		color: #2fb500;
	}
	& > span:nth-child(2) {
		color: #f6c720;
	}
}
</style>
