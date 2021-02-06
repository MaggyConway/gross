<template>
    <section class="geo wrapper">
        <h2>география</h2>

		  <div id="map">
			  <div class="map__filter-btns">
				  <div class="btn" @click="showUrPlacemarks">юрлица</div>
				  <div class="btn" @click="showFizPlacemarks">физлица</div>
				  <div class="btn active" @click="showAllPlacemarks">показать всё</div>
			  </div>
		  </div>
    </section>
</template>

<script>
	export default {
		name: 'Geography',
		data () {
			return {
				map: '',
				fizCoordinates: [
					[55.01914257914809,73.4192854077148],
					[55.01006740980924,73.3787733227538],
					[54.98223718744099,73.3131986767577],
					[55.00079282323103,73.3461576611327],
					[55.01578895255001,73.4453779370116]
				],
				urCoordinates: [
					[54.98855496711188,73.3928495556640],
					[54.96841356213469,73.4189420849608],
					[54.94964528157769,73.4474378735351],
					[54.96782101423115,73.3650404125975],
					[54.93936838806809,73.3931928784179]
				],
				fizCollection: '',
				urCollection: ''
			//  scrollZoom: false,
			}
		},
		created () {
			// Установить скрипты для использования яндекс карты
			let scriptYandexMap = document.createElement('script')
			scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=77a5e6ea-6171-44e6-bdac-228f66072a3e&lang=ru_RU')
			document.head.appendChild(scriptYandexMap)

			// Инициализировать яндекс карту
			scriptYandexMap.addEventListener("load", this.initializeYandexMap)
		},
		methods: {
			initializeYandexMap () {
				ymaps.ready(this.initMap)
			},
			initMap () {
				this.map = new ymaps.Map("map", {
					center: [54.979472844762505,73.38460980957024],
					zoom: 12,
					controls: ['zoomControl', 'fullscreenControl']
				}, {
					suppressMapOpenBlock: true
				})

				this.fizCollection = new ymaps.GeoObjectCollection()
				this.urCollection = new ymaps.GeoObjectCollection()

				let iconSrc = require('../assets/images/placemark.svg')

				for (let i = 0; i < this.fizCoordinates.length; i++) {
					let fizPlacemark = new ymaps.Placemark(this.fizCoordinates[i], {
						hintContent: 'коллекция физ.лиц',
						balloonContent: 'физ.лицо '+(i+1)
					}, {
						iconLayout: 'default#image',
						iconImageHref: iconSrc,
						iconImageSize: [44, 44]
					})

					this.fizCollection.add(fizPlacemark)
				}

				for (let i = 0; i < this.urCoordinates.length; i++) {
					let urPlacemark = new ymaps.Placemark(this.urCoordinates[i], {
						hintContent: 'коллекция юр.лиц',
						balloonContent: 'юр.лицо '+(i+1)
					}, {
						iconLayout: 'default#image',
						iconImageHref: iconSrc,
						iconImageSize: [44, 44]
					})

					this.urCollection.add(urPlacemark)
				}

				this.map.geoObjects.add(this.fizCollection).add(this.urCollection)
			},
			showUrPlacemarks () {
				this.map.geoObjects.add(this.urCollection).remove(this.fizCollection)

				let target = event.target
				let btns = target.parentNode.querySelectorAll('.btn')
				for (let i = 0; i < btns.length; i++) {
					btns[i].classList.remove('active')
				}
				target.classList.add('active')
			},
			showFizPlacemarks () {
				this.map.geoObjects.remove(this.urCollection).add(this.fizCollection)

				let target = event.target
				let btns = target.parentNode.querySelectorAll('.btn')
				for (let i = 0; i < btns.length; i++) {
					btns[i].classList.remove('active')
				}
				target.classList.add('active')
			},
			showAllPlacemarks () {
				this.map.geoObjects.add(this.fizCollection).add(this.urCollection)

				let target = event.target
				let btns = target.parentNode.querySelectorAll('.btn')
				for (let i = 0; i < btns.length; i++) {
					btns[i].classList.remove('active')
				}
				target.classList.add('active')
			}

		}
	}
</script>

<style lang="scss">
	.map-box, #map {
		width: 100%;
		height: 540px;
		position: relative;
	}
	.ymaps-2-1-78-ground-pane {
		-webkit-filter: grayscale(100%);
	}
	.geo {
		margin-bottom: 70px;
	}
	.map__filter-btns {
		position: absolute;
		left: 25px;
		bottom: 25px;
		z-index: 100;
		.btn {
			font-size: 18px;
			padding: 10px 15px;
			cursor: pointer;
			background-color: #FFF;
			-webkit-border-radius: 8px;
					border-radius: 8px;
			overflow: hidden;
			margin-top: 8px;
			width: fit-content;
			width: -webkit-fit-content;
			&.active {
				background-color: #FFDF31;
			}
		}
	}
</style>