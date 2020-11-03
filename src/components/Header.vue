<template>
	<header>
		<div id="logo">NAVER</div>
		<nav><div>네브바</div></nav>
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
}
nav {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 46px;
	background-color: #eee;
	border-left: 10px solid #ccc;
	border-right: 10px solid #ccc;

	& > div {
		width: fit-content;
		margin: auto;
	}
}
</style>
