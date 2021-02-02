<template>
	<div class="share">
		<p>поделиться</p>
		<div class="share__icons">
			<ShareNetwork
				network="facebook"
				url="https://market.yandex.ru/shop--firmennyi-magazin-gross/545370/reviews"
				quote="Отзывы о магазине Фирменный магазин GROSS"
				hashtags="gross_market"
				class="fb"
				>
			</ShareNetwork>
			<ShareNetwork
				network="vk"
				title="гросс маркет"
				url="https://market.yandex.ru/shop--firmennyi-magazin-gross/545370/reviews"
				description="Отзывы о магазине Фирменный магазин GROSS"
				class="vk"
				>
			</ShareNetwork>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Share',
		data () {
			return {
				// fbIcon: 'background: url(' + require('../assets/images/fb.svg') + ') no-repeat center center;',
				// vkIcon: 'background: url(' + require('../assets/images/vk.svg') + ') no-repeat center center;'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.share p {
		font-size: 32px;
		pointer-events: none;
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
	}
	.share {
		display: flex;
		-webkit-justify-content: space-between;
	        	  justify-content: space-between;
			 -webkit-align-items: center;
						align-items: center;
	}
	.share__icons {
		display: flex;
		.fb, .vk {
			display: block;
			width: 24px;
			height: 24px;
			margin-left: 8px;
			cursor: pointer;

			-webkit-transition: all .2s ease-in-out;
				-moz-transition: all .2s ease-in-out;
				 -ms-transition: all .2s ease-in-out;
				  -o-transition: all .2s ease-in-out;
					  transition: all .2s ease-in-out;
		}
	}
	.fb {
		background: url('../assets/images/fb.svg') no-repeat center center;
		&:hover {
			background: url('../assets/images/fb_orange.svg') no-repeat center center;
		}
	}
	.vk {
		background: url('../assets/images/vk.svg') no-repeat center center;
		&:hover {
			background: url('../assets/images/vk_orange.svg') no-repeat center center;
		}
	}
</style>