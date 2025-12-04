<script setup lang="ts">
import Map from '@ol/Map';
import View from '@ol/View';
import ScaleLine from '@ol/control/ScaleLine';
import { defaults as defaultControls } from '@ol/control/defaults';
import { default as TileLayer } from '@ol/layer/Tile';
import '@ol/ol.css';
import OSM from '@ol/source/OSM';
import { onMounted } from 'vue';

onMounted(() => {
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
    controls: defaultControls().extend([new ScaleLine()]),
  });
});
</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  box-sizing: border-box;
  height: 100%;
}
</style>
