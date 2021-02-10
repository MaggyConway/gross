<template>
	<div id="app">
		<header-comp />
		<router-view />
		<footer-comp />
	</div>
</template>

<script>
import HeaderComp from './components/Header'
import FooterComp from './components/Footer'

import './assets/fonts/fonts.css'

export default {
	name: 'App',
	data () {
		return {

		}
	},
	components: {
		HeaderComp,
		FooterComp
	}
}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		outline: none;
		border: none;
		-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
				  box-sizing: border-box;
		font-family: 'Euclid Circular B';
		font-weight: 500;
		color: #000000;
	}
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #fff;

		width: 100%;
		max-width: 100%;
		-ms-overflow-x: hidden;
	    	 overflow-x: hidden;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	img {
		-webkit-user-select: none;
			-moz-user-select: none;
			 -ms-user-select: none;
				  user-select: none;
		pointer-events: none;
	}
	h2 {
		font-size: 32px;
		margin-bottom: 30px;
		margin-top: 70px;
	}
	.wrapper {
		padding-left: 165px;
		padding-right: 165px;
	}
	.main-slider {
		.el-carousel__arrow {
			width: 44px;
			height: 44px;
			bottom: 48px;
			top: unset;
			right: unset;
			-webkit-transform: none;
				-moz-transform: none;
				 -ms-transform: none;
				  -o-transform: none;
					  transform: none;
			-webkit-border-radius: 8px 0 0 8px;
					  border-radius: 8px 0 0 8px;
			// overflow: hidden;
			background-color: #FFF;
			padding-top: 10px;
			padding-bottom: 10px;
			&:before {
				position: absolute;
				content: "";
				background: url('./assets/images/arrow.svg') no-repeat center center;
				width: 24px;
				height: auto;
				top: 10px;
				bottom: 10px;
				left: 10px;
				// -webkit-transform: translate(-50%, -50%);
				// 	-moz-transform: translate(-50%, -50%);
				// 	 -ms-transform: translate(-50%, -50%);
				// 	  -o-transform: translate(-50%, -50%);
				// 		  transform: translate(-50%, -50%);
			}
			i {
				display: none;
			}
		}
		.el-carousel__arrow--left {
			left: 0;
			z-index: 200;
			&:after {
				position: absolute;
				content: "";
				left: 44px;
				top: 50%;
				-webkit-transform: translateY(-50%);
					-moz-transform: translateY(-50%);
					 -ms-transform: translateY(-50%);
					  -o-transform: translateY(-50%);
						  transform: translateY(-50%);
				height: 28px;
				width: 1px;
				background-color: #F5F5F5;
			}
		}
		.el-carousel__arrow--right {
			left: 44px;
			-webkit-border-radius: 0 8px 8px 0;
					  border-radius: 0 8px 8px 0;
			z-index: 100;
			&:before {
				left: unset;
				right: 10px;
				-webkit-transform: rotate(180deg);
					-moz-transform: rotate(180deg);
					 -ms-transform: rotate(180deg);
					  -o-transform: rotate(180deg);
						  transform: rotate(180deg);
			}
		}
	}
</style>
