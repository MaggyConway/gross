<template>
	<section class="insta wrapper">
		<h2>мы в&nbsp;инстаграме</h2>

		<div class="insta__photos">
			<div
				class="image"
				v-for="photo in instaFirstRow"
				:key="photo.key"
				:style="photo.bg"
				/>

			<div
				class="image"
				v-for="photo in instaSecondRow"
				:key="photo.key"
				:style="photo.bg"
				v-if="showSecondRow"
				/>

			<div
				class="image"
				v-for="photo in instaThirdRow"
				:key="photo.key"
				:style="photo.bg"
				v-if="showThirdRow"
				/>
		</div>
		<button
			class="insta__btn"
			@click="showMorePhotos">
			{{ btnMoreText }}
		</button>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				showSecondRow: false,
				showThirdRow: false,
				btnMoreText: 'показать ещё',
				instaFirstRow: [
					{ key: 1, bg: 'background: url("' + require('../assets/images/insta/1.jpg') + '") no-repeat center center;' },

					{ key: 2, bg: 'background: url("' + require('../assets/images/insta/2.jpg') + '") no-repeat center center;' },
					{ key: 3, bg: 'background: url("' + require('../assets/images/insta/3.jpg') + '") no-repeat center center;' },
					{ key: 4, bg: 'background: url("' + require('../assets/images/insta/4.jpg') + '") no-repeat center center;' },
					{ key: 5, bg: 'background: url("' + require('../assets/images/insta/5.jpg') + '") no-repeat center center;' }
				],
				instaSecondRow: [
					{ key: 6, bg: 'background: url("' + require('../assets/images/insta/6.jpg') + '") no-repeat center center;' },
					{ key: 7, bg: 'background: url("' + require('../assets/images/insta/7.jpg') + '") no-repeat center center;' },
					{ key: 8, bg: 'background: url("' + require('../assets/images/insta/8.jpg') + '") no-repeat center center;' },
					{ key: 9, bg: 'background: url("' + require('../assets/images/insta/9.jpg') + '") no-repeat center center;' }
				],
				instaThirdRow: [
					{ key: 10, bg: 'background: url("' + require('../assets/images/insta/10.jpg') + '") no-repeat center center;' },
					{ key: 11, bg: 'background: url("' + require('../assets/images/insta/11.jpg') + '") no-repeat center center;' },
					{ key: 12, bg: 'background: url("' + require('../assets/images/insta/12.jpg') + '") no-repeat center center;' },
					{ key: 13, bg: 'background: url("' + require('../assets/images/insta/13.jpg') + '") no-repeat center center;' }
				]
			}
		},
		methods: {
			showMorePhotos () {
				if (this.showSecondRow == true && this.showThirdRow == true) {
					this.showSecondRow = false;
					this.showThirdRow = false;

					this.btnMoreText = 'показать ещё';
				}
				else if (this.showSecondRow == false && this.showThirdRow == false) {
					this.showSecondRow = true;
				}
				else if (this.showSecondRow == true && this.showThirdRow == false) {
					this.showThirdRow = true;

					this.btnMoreText = 'скрыть';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.insta__photos {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 30px;
		.image {
			width: 255px;
			height: 255px;
			background-color: #F5F5F5;
			overflow: hidden;
			-webkit-border-radius: 8px;
					  border-radius: 8px;
			-webkit-background-size: cover !important;
				  -o-background-size: cover !important;
	        		  background-size: cover !important;
			&:nth-child(1) {
				grid-column-start: 1;
				grid-column-end: 3;
				grid-row-start: 1;
				grid-row-end: 3;
				width: 100%;
				height: 100%;
			}
			&:nth-child(2) {
				grid-column-start: 3;
				grid-column-end: 4;
				grid-row-start: 1;
				grid-row-end: 2;
			}
			&:nth-child(3) {
				grid-column-start: 4;
				grid-column-end: 5;
				grid-row-start: 1;
				grid-row-end: 2;
			}
			&:nth-child(4) {
				grid-column-start: 3;
				grid-column-end: 4;
				grid-row-start: 2;
				grid-row-end: 3;
			}
			&:nth-child(5) {
				grid-column-start: 4;
				grid-column-end: 5;
				grid-row-start: 2;
				grid-row-end: 3;
			}
		}
	}
	.insta__btn {
		width: 100%;
		height: 47px;
		background-color: #F5F5F5;
		-webkit-border-radius: 8px;
				border-radius: 8px;
		overflow: hidden;
		margin-top: 30px;
		cursor: pointer;
		font-size: 18px;

		-webkit-transition: all .3s ease-in-out;
			-moz-transition: all .3s ease-in-out;
				-ms-transition: all .3s ease-in-out;
				-o-transition: all .3s ease-in-out;
					transition: all .3s ease-in-out;
		&:hover {
			background-color: #FFDF31;
		}
	}
</style>