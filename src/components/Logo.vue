<template>
	<div class="logo">
		<img :src="logo" />&nbsp;
		гросс маркет
	</div>
</template>

<script>
	export default {
		name: 'Logo',
		data () {
			return {
				logo: require('../assets/images/logo.svg')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logo {
		display: block;
		font-size: 32px;
		font-weight: 500;
		line-height: 41px;
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
	}
</style>