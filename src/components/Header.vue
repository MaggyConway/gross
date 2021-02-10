<template>
  <header id="header" class="wrapper" :style="onInterview">
		<logo />
		<div class="flexbox">
			<header-phone :tel="phone" />
			<header-btn title="заполнить анкету" />
		</div>
  </header>
</template>

<script>
import Logo from './Logo'
import HeaderPhone from './HeaderPhone'
import HeaderBtn from './HeaderBtn'

export default {
	name: 'Header',
	data () {
		return {
			phone: '+7 (926) 433-14-16',
			onInterview: ''
		}
	},
	components: {
		Logo,
		HeaderPhone,
		HeaderBtn
	},
	mounted: function () {
		if (document.location.hash == '#/interview') {
			this.onInterview = 'background: #F5F5F5'
		} else {
			this.onInterview = 'background: #fff'
		}
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
