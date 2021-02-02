<template>
  <footer class="footer wrapper">
	  <div class="footer__grid">
			<logo />
			<share />
			<p>&copy; Гросс маркет 2020</p>
			<policy />
	  </div>
  </footer>
</template>

<script>
import Logo from './Logo'
import Share from './Share'
import Policy from './Policy'

export default {
	name: 'Footer',
	data () {
		return {
			// msg: 'footer component'
		}
	},
	components: {
		Logo,
		Share,
		Policy
	}
}
</script>

<style lang="scss">
	.footer {
		width: 100%;
		height: 235px;
		background-color: #F5F5F5;
		padding-top: 70px;
	}
	.footer__grid {
		width: 100%;
		// height: 90px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 25px 0;
		overflow: hidden;
		-webkit-border-radius: 8px;
				  border-radius: 8px;
		.logo, .share {
			background-color: #FFF;
			padding: 25px;
		}
		.share {
			padding-left: 0;
		}
		p {
			font-size: 14px;
		}
	}
</style>
