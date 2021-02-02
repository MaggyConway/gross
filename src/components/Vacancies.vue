<template>
	<section class="wrapper">
		<div class="vacancy__head">
			<h2>вакансии в гросс маркете</h2>

			<div class="vacancy__arrows">
				<div class="arrow prev" :style="chevronPath" @click="goBack"></div>
				<div class="arrow next" :style="chevronPath" @click="goNext"></div>
			</div>
		</div>


		<div class="vacancy__list">
			<vacancy-card
				v-for="vacancy in vacancies"
				:key="vacancy.key"
				:title="vacancy.title"
				:photoUrl="vacancy.photoUrl"
				:desc="vacancy.desc"
				/>
		</div>
	</section>
</template>

<script>
	import VacancyCard from './VacancyCard'
	export default {
		name: 'Vacancies',
		data () {
			return {
				chevronPath: "background: url('" + require('../assets/images/chevron.svg') + "') no-repeat center center;",
				vacancies: [
					{
						key: 1,
						photoUrl: require('../assets/images/vacancy1.png'),
						title: 'товаровед',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 2,
						photoUrl: require('../assets/images/vacancy2.png'),
						title: 'водитель',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 3,
						photoUrl: require('../assets/images/vacancy3.png'),
						title: 'пекарь',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 4,
						photoUrl: require('../assets/images/vacancy4.png'),
						title: 'кассир',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 5,
						photoUrl: require('../assets/images/vacancy5.png'),
						title: 'продавец',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 6,
						photoUrl: require('../assets/images/vacancy6.png'),
						title: 'повар',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					},
					{
						key: 7,
						photoUrl: require('../assets/images/vacancy7.png'),
						title: 'приёмщик',
						desc: 'Доставка товара по магазина и гипермаркетам компании в обслуживаемом регионе'
					}
				]
			}
		},
		methods: {
			goBack () {
				let vacancyList = document.querySelector('.vacancy__list');
				let cssLeft = window.getComputedStyle(vacancyList).marginLeft;

				// left: -1140px; // до кассира
				// left: -1390px; // до правого края

				if (cssLeft == '-1140px') {
					vacancyList.style.marginLeft = '0';

					// disable prev arrow
					let vacancyHead = document.querySelector('.vacancy__head');
					vacancyHead.querySelector('.prev').style.opacity = '0.2';
					vacancyHead.querySelector('.prev').style.cursor = 'default';
				}
				if (cssLeft == '-1550px') {
					vacancyList.style.marginLeft = '-1140px';

					// enable next arrow
					let vacancyHead = document.querySelector('.vacancy__head');
					vacancyHead.querySelector('.next').style.opacity = '1';
					vacancyHead.querySelector('.next').style.cursor = 'pointer';
				}
			},
			goNext () {
				let vacancyList = document.querySelector('.vacancy__list');
				let cssLeft = window.getComputedStyle(vacancyList).marginLeft;

				if (cssLeft !== '-1140px' && cssLeft !== '-1550px') {
					// console.log(cssLeft);
					vacancyList.style.marginLeft = '-1140px';

					// enable prev arrow
					let vacancyHead = document.querySelector('.vacancy__head');
					vacancyHead.querySelector('.prev').style.opacity = '1';
					vacancyHead.querySelector('.prev').style.cursor = 'pointer';
				}
				if (cssLeft == '-1140px') {
					console.log(cssLeft);
					vacancyList.style.marginLeft = '-1550px';

					// disable next arrow
					let vacancyHead = document.querySelector('.vacancy__head');
					vacancyHead.querySelector('.next').style.opacity = '0.2';
					vacancyHead.querySelector('.next').style.cursor = 'default';
				}
			}
		},
		components: {
			VacancyCard
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		// margin-top: 70px;
		// margin-bottom: 70px;
		position: relative;
		// padding-bottom: 482px;
	}
	.vacancy__head {
		display: flex;
		-webkit-justify-content: space-between;
				  justify-content: space-between;
			 -webkit-align-items: center;
						align-items: center;
	}
	.vacancy__arrows {
		display: flex;
		-webkit-justify-content: flex-end;
				  justify-content: flex-end;
			 -webkit-align-items: center;
						align-items: center;
		margin-right: -20px;
		.arrow {
			width: 10px;
			height: 12px;
			cursor: pointer;
			padding: 20px;
		}
		.prev {
			opacity: .2;
			cursor: default;
			margin-right: 20px;
			-webkit-transform: rotate(180deg);
				-moz-transform: rotate(180deg);
				 -ms-transform: rotate(180deg);
				  -o-transform: rotate(180deg);
					  transform: rotate(180deg);
		}
		.next {
			opacity: 1;
			cursor: pointer;
		}
	}
	.vacancy__list {
		margin-left: 0;
		// position: absolute;
		// left: 0;
		// top: 0;
		display: flex;
		-webkit-transition: all .7s ease-in-out;
			-moz-transition: all .7s ease-in-out;
			 -ms-transition: all .7s ease-in-out;
			  -o-transition: all .7s ease-in-out;
				  transition: all .7s ease-in-out;
	}
</style>