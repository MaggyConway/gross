<template>
	<button class="btn">{{ title }}</button>
</template>

<script>
	export default {
		name: 'HeaderBtn',
		props: ['title']
	}
</script>

<style lang="scss" scoped>
	.btn {
		display: flex;
		width: 187px;
		height: 47px;
		-webkit-justify-content: center;
				  justify-content: center;
			 -webkit-align-items: center;
						align-items: center;
		-webkit-border-radius: 8px;
				  border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		-webkit-transition: all .2s ease-in-out;
			-moz-transition: all .2s ease-in-out;
			 -ms-transition: all .2s ease-in-out;
			  -o-transition: all .2s ease-in-out;
				  transition: all .2s ease-in-out;
		font-size: 18px;
		text-align: center;
		background: #FFDF31;
		margin-left: 30px;
		&:hover {
			-webkit-box-shadow: 2px 3px 8px 0px rgba(46, 48, 3, 0.2);
					  box-shadow: 2px 3px 8px 0px rgba(46, 48, 3, 0.2);
		}
		&:active {
			// position: relative;
			// margin-top: 5px;
			// -webkit-box-shadow: none;
	      //   		  box-shadow: none;
			-webkit-box-shadow: 0px 2px 30px 0px rgba(46, 48, 3, 0.2) inset;
					  box-shadow: 0px 2px 30px 0px rgba(46, 48, 3, 0.2) inset;
		}
	}
</style>