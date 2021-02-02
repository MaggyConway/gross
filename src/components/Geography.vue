<template>
    <section class="geo wrapper">
        <h2>география</h2>
        <yandex-map ymap-class="map-box" :coords="coords" :zoom="11" :controls="controls" :scroll-zoom="scrollZoom">
            <ymap-marker
                marker-type="placemark"
                :coords="[54.7, 39.7]"
                :markerId="1"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'cinema'}"
                />
            <ymap-marker
                marker-type="placemark"
                :coords="[54.6, 39.8]"
                :markerId="2"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'cinema'}"
                />
        </yandex-map>
    </section>
</template>

<script>
    export default {
        name: 'Geography',
        data () {
            return {
                coords: [54.6, 39.8],
                controls: ['fullscreenControl', 'searchControl', 'zoomControl'],
                scrollZoom: false
            }
        },
    }
</script>

<style lang="scss">
    .map-box {
        width: 100%;
        height: 540px;
    }
	 .geo {
		 margin-bottom: 70px;
	 }
</style>