<template>
	<div id="main">
		<main-slider />
		<vacancies />
		<insta />
		<geography />
	</div>
</template>

<script>
	import MainSlider from './MainSlider'
	import Vacancies from './Vacancies'
	import Insta from './Insta'
	import Geography from './Geography'

	export default {
		name: 'MainContent',
		data() {
			return {

			}
		},
		components: {
			MainSlider,
			Vacancies,
			Insta,
			Geography
		}
	}
</script>

<style lang="scss">

</style>