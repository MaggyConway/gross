<template>
	<div class="card">

		<div class="card__title">{{ title }}</div>
		<div class="card__image" :style="url"></div>

		<div class="card__wrap">
			<div class="card__desc">{{ desc }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'VacancyCard',
		props: ['title', 'photoUrl', 'desc'],
		data () {
			return {
				url: 'background: url("' + this.photoUrl + '") no-repeat center bottom;'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		position: relative;
		overflow: hidden;
		background-color: #F5F5F5;
		-webkit-border-radius: 8px;
				  border-radius: 8px;
		min-width: 350px;
		height: 482px;
		&:not(:last-child) {
			margin-right: 30px;
		}
		&:hover {
			.card__wrap {
				visibility: visible;
				opacity: 1;
			}
		}
		.card__image {
			position: absolute;
			content: "";
			bottom: 0;
			left: 50%;
			-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				 -ms-transform: translateX(-50%);
				  -o-transform: translateX(-50%);
					  transform: translateX(-50%);
			z-index: 100;
			width: 100%;
			height: 100%;
		}
		.card__title {
			position: absolute;
			left: 24px;
			top: 24px;
			background-color: #fff;
			text-align: center;
			color: #000;
			font-size: 24px;
			padding: 12px 16px;
			-webkit-border-radius: 1000px;
					  border-radius: 1000px;
			z-index: 1100;
			pointer-events: none;
			-webkit-user-select: none;
				-moz-user-select: none;
				 -ms-user-select: none;
					  user-select: none;
		}
		.card__wrap {
			position: absolute;
			visibility: hidden;
			opacity: 0;
			z-index: 1000;
			background-color: #FFDF31;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			-webkit-transition: all .2s ease-in-out;
				-moz-transition: all .2s ease-in-out;
				 -ms-transition: all .2s ease-in-out;
				  -o-transition: all .2s ease-in-out;
					  transition: all .2s ease-in-out;
		}
		.card__desc {
			position: absolute;
			bottom: 24px;
			left: 24px;
			font-size: 18px;
			line-height: 23px;
			color: #000;
			max-width: 100%;
			pointer-events: none;
			-webkit-user-select: none;
				-moz-user-select: none;
				 -ms-user-select: none;
					  user-select: none;
		}
	}
</style>