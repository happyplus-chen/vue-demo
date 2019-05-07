<template>
  <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
  <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
  <div id="allmap"
       v-bind:style="mapStyle"></div>
</template>
<script>
import BMap from 'BMap'
export default {
  data: function() {
    return {
      mapStyle: {
        width: '100%',
        height: this.mapHeight + 'px'
      },
      mapInstance: null,
      // 中心
      CPoint: null,
      // 酒店
      HPoint: null,
      // 其它
      MPoint: null
    }
  },
  props: {
    // 地图在该视图上的高度
    mapHeight: {
      type: Number,
      default: 500
    }
  },
  methods: {
    addOverlay(p1, p2) {
      if (this.MPoint) this.mapInstance.removeOverlay(this.MPoint)
      let point = new BMap.Point(p1, p2)
      let marker = this.MPoint = new BMap.Marker(point)
      this.mapInstance.addOverlay(marker)
    },
    addIcon(p1, p2) {
      if (this.HPoint) this.mapInstance.removeOverlay(this.HPoint)
      let point = new BMap.Point(p1, p2)
      this.mapInstance.centerAndZoom(point, 16)
      var vectorMarker = new BMap.Marker(point, {
        // 指定Marker的icon属性为Symbol
        icon: new BMap.Symbol(window.BMap_Symbol_SHAPE_POINT, {
          scale: 1.3, // 图标缩放大小
          fillColor: 'orange', // 填充颜色
          fillOpacity: 0.8// 填充透明度
        })
      })
      this.mapInstance.addOverlay(vectorMarker)
    }
  },
  mounted() {
    window.vm = this
    // const BMap = window.BMap
    var map = (this.mapInstance = new BMap.Map('allmap'))
    map.addControl(new BMap.MapTypeControl({
      mapTypes: [
        window.BMAP_NORMAL_MAP
      ] }))
    map.enableScrollWheelZoom(true)
    map.enableDoubleClickZoom(true)

    var point = new BMap.Point(104.075796, 30.659684)
    map.centerAndZoom(point, 16)
    var marker = this.CPoint = new BMap.Marker(point)
    map.addOverlay(marker)
  }
}
</script>

<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
