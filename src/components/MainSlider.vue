<template>
	<el-carousel  trigger="click"
	 				  height="400px"
					  indicator-position="none"
					  class="main-slider wrapper"
					  :autoplay="false"
					  arrow="always"
					  @change="changedSlide">

		<el-carousel-item v-for="item in mainSlider" :key="item.key" class="slide" :class="{ second:secondSlide }">

			<p class="slide__title">{{ item.title }}</p>

			<div class="slide__image">
				<el-image
					style="width: 100%; height: 100%"
					:src="item.url"
					fit="contain" />

				<p class="label slide__name">{{ item.name }}</p>
				<p class="label slide__job">{{ item.job }}</p>
			</div>


      </el-carousel-item>
    </el-carousel>
</template>

<script>
	export default {
		name: 'MainSlider',
		data () {
			return {
				secondSlide: false,
				// inactiveArrow: false,
				mainSlider: [
					{
						key: 1,
						title: "У тебя к этому талант",
						url: require('../assets/images/main_slide1.png'),
						name: 'валентин',
						job: 'пекарь'
					},
					{
						key: 2,
						title: "У тебя всё под контролем",
						url: require('../assets/images/main_slide2.png'),
						name: 'ксения',
						job: 'товаровед'
					}
				]
			}
		},
		methods: {
			changedSlide (newIndex, oldIndex) {
				if (newIndex == 0) {
					this.secondSlide = false;
				}
				if (newIndex == 1) {
					this.secondSlide = true;
				}
			}
		}
	}
</script>



<style lang="scss" scoped>
	.main-slider {
		background: #F5F5F5;
	}
	.slide {
		display: flex;
		-webkit-justify-content: space-between;
				  justify-content: space-between;
			 -webkit-align-items: center;
						align-items: center;
	}
	.label {
		position: absolute;
		font-size: 24px;
		padding: 12px 16px;
		text-align: center;
		background-color: #fff;
		overflow: hidden;
		-webkit-border-radius: 1000px;
				  border-radius: 1000px;
	}
	.slide__title {
		font-size: 72px;
		line-height: 66px;
		max-width: 270px;
		margin-bottom: 60px;
		pointer-events: none;
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
	}
	.slide__image {
		position: relative;
		min-width: 612px;
		height: 100%;
	}
	.slide__name {
		bottom: 48px;
		left: 120px;
		pointer-events: none;
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
	}
	.slide__job {
		top: 48px;
		right: 120px;
		pointer-events: none;
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
	}
	.slide.second {
		.slide__title {
			max-width: 357px;
			margin-right: 16px;
		}
		.slide__name {
			top: 48px;
			right: 120px;
			bottom: unset;
			left: unset;
		}
		.slide__job {
			bottom: 48px;
			left: 120px;
			top: unset;
			right: unset;
		}
		.slide__name, .slide__job {
			-webkit-animation: fade_in_out .1s ease-in-out;
				-moz-animation: fade_in_out .1s ease-in-out;
				  -o-animation: fade_in_out .1s ease-in-out;
					  animation: fade_in_out .1s ease-in-out;
			animation-iteration-count: 1;
			animation-fill-mode: forwards;
		}
	}
	@keyframes fade_in_out {
		0% {opacity: 1;}
		99% {opacity: 0;}
		100% {opacity: 1;}
	}
</style>