<template>
	<a :href="phoneNumberLink">{{ tel }}</a>
</template>

<script>
	export default {
		name: 'HeaderPhone',
		props: ['tel'],
		data () {
			return {
				phoneNumberLink: 'tel:'+this.tel
			}
		}
	}
</script>

<style scoped>

</style>