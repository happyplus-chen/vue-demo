<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <!-- <HelloWorld
                msg="Welcome to Your Vue.js App" /> -->
    <bMap  v-if="showbaidu" map-id="map1"></bMap>
    <!-- <bMap  v-if="showbaidu" map-id="map2"></bMap> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import bMap from './BaiduMap'

export default {
  name: 'home',
  data() {
    return { showbaidu: false }
  },
  components: {
    bMap: () =>
      import(/* webpackChunkName: "baidumap" */ '@/views/BaiduMap.vue')
  },
  mounted() {
    setTimeout(() => {
      this.showbaidu = true
    }, 0)
  }
}
</script>
