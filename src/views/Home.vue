<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <bMap></bMap>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bMap from './BaiduMap'

export default {
  name: 'home',
  components: {
    HelloWorld,
    bMap
  }
}
</script>
