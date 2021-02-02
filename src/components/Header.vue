<template>
  <header id="header" class="wrapper">
		<logo />
		<div class="flexbox">
			<header-phone :tel="phone" />
			<header-btn title="заполнить анкету" />
		</div>
  </header>
</template>

<script>
import Logo from './Logo'
import HeaderPhone from './header/HeaderPhone'
import HeaderBtn from './header/HeaderBtn'

export default {
	name: 'Header',
	data () {
		return {
			phone: '+7 (926) 433-14-16',
		}
	},
	components: {
		Logo,
		HeaderPhone,
		HeaderBtn
	}
}
</script>

<style lang="scss" scoped>
	#header {
		display: flex;
		-webkit-justify-content: space-between;
				  justify-content: space-between;
			 -webkit-align-items: center;
						align-items: center;
		width: 100%;
		height: 111px;
	}
	.flexbox {
		display: flex;
		-webkit-justify-content: flex-end;
				  justify-content: flex-end;
			 -webkit-align-items: center;
						align-items: center;
	}
</style>
