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
      iconMap: {},
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
    generateIcon() {
      const m = 'static/markers.png'
      const iconMap = {
        simple_red: new BMap.Icon(m, new BMap.Size(21, 33), {
          imageOffset: new BMap.Size(-227, -189),
          anchor: new BMap.Size(10.5, 33),
          imageSize: new BMap.Size(300, 300)
        }),
        simple_blue: new BMap.Icon(m, new BMap.Size(21, 33), {
          imageOffset: new BMap.Size(-227, -225),
          anchor: new BMap.Size(10.5, 33),
          imageSize: new BMap.Size(300, 300)
        }),
        loc_red: new BMap.Icon(m, new BMap.Size(23, 35), {
          imageOffset: new BMap.Size(-200, -189),
          anchor: new BMap.Size(11.5, 35),
          imageSize: new BMap.Size(300, 300)
        }),
        loc_blue: new BMap.Icon(m, new BMap.Size(23, 35), {
          imageOffset: new BMap.Size(-200, -225),
          anchor: new BMap.Size(11.5, 35),
          imageSize: new BMap.Size(300, 300)
        }),
        start: new BMap.Icon(m, new BMap.Size(25, 40), {
          imageOffset: new BMap.Size(-200, -139),
          anchor: new BMap.Size(12.5, 40),
          imageSize: new BMap.Size(300, 300)
        }),
        end: new BMap.Icon(m, new BMap.Size(25, 40), {
          imageOffset: new BMap.Size(-225, -139),
          anchor: new BMap.Size(12.5, 40),
          imageSize: new BMap.Size(300, 300)
        })
      }
      for (let i = 1; i <= 10; i++) {
        iconMap['red' + i] = new BMap.Icon(m, new BMap.Size(21, 33), {
          imageOffset: new BMap.Size(0 - 21 * (i - 1), 0),
          anchor: new BMap.Size(10.5, 16.5),
          imageSize: new BMap.Size(300, 300)
        })
      }
      this.iconMap = iconMap
    },
    addOverlay(p1, p2) {
      if (this.MPoint) this.mapInstance.removeOverlay(this.MPoint)
      let point = (this.MPoint = new BMap.Point(p1, p2))
      let marker = (this.MPoint = new BMap.Marker(point))
      this.mapInstance.addOverlay(marker)
    },
    addIcon(p1, p2) {
      if (this.HPoint) this.mapInstance.removeOverlay(this.HPoint)
      let point = (this.HPoint = new BMap.Point(p1, p2))
      this.mapInstance.centerAndZoom(point, 16)
      let vectorMarker = new BMap.Marker(point, {
        // 指定Marker的icon属性为Symbol
        // icon: new BMap.Symbol(window.BMap_Symbol_SHAPE_POINT, {
        //   scale: 1.3, // 图标缩放大小
        //   fillColor: 'orange', // 填充颜色
        //   fillOpacity: 0.8// 填充透明度
        // })

        icon: this.iconMap.loc_blue
      })
      let label = new BMap.Label('我是文字标注哦', {
        // LEFT TOP
        offset: new BMap.Size(15, 0)
      })

      label.setStyle({
        color: '#237dff',
        fontSize: '12px',
        // height: '58px',
        lineHeight: '20px',
        fontFamily: '微软雅黑',
        borderColor: '#237dff',
        borderWidth: '2px',
        borderRadius: '0 50px 50px 0',
        padding: '0 10px 0 21px',
        borderLeft: 'none',
        zIndex: '-1'
      })
      // vectorMarker.addEventListener('mouseover', function(target) {
      //   let dom = target.currentTarget.V
      //   dom.parentElement.style.zIndex = -6131935
      //   console.log(target, 'point mouseover')
      // })
      vectorMarker.addEventListener('onmouseleave', function(target) {
        let dom = target.currentTarget.V
        dom.parentElement.style.zIndex = -6131935
        console.log(target, 'point onmouseleave')
      })
      vectorMarker.addEventListener('mouseout', function(target) {
        let dom = target.currentTarget.V
        dom.parentElement.style.zIndex = -6131936
        console.log(target)
      })
      label.addEventListener('mouseover', function(target) {
        let dom = target.currentTarget.V
        // dom.style.zIndex = 88
        // let zidx = dom.parentElement.style.zIndex
        dom.parentElement.style.zIndex = -6131935
        console.log('label hover')
      })
      label.addEventListener('mouseout', function(target) {
        let dom = target.currentTarget.V
        dom.parentElement.style.zIndex = -6131936
        // console.log('hover', target, dom)
      })
      vectorMarker.setLabel(label)
      vectorMarker.addEventListener('mouseover', function(target) {
        let dom = target.currentTarget.V
        dom.parentElement.style.zIndex = -6131935
        console.log(target, 'point mouseover')
      })
      this.mapInstance.addOverlay(vectorMarker)
    },
    getDistance() {
      let p1 = new BMap.Point(104.075796, 30.659684)
      let p2 = new BMap.Point(104.075796, 30.679684)
      this.mapInstance.getDistance(p1, p2)
    }
  },
  created() {
    this.generateIcon()
  },
  mounted() {
    window.vm = this
    // const BMap = window.BMap
    var map = (this.mapInstance = new BMap.Map('allmap'))
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [window.BMAP_NORMAL_MAP]
      })
    )
    map.enableScrollWheelZoom(true)
    map.enableDoubleClickZoom(true)

    var point = new BMap.Point(104.075796, 30.659684)
    map.centerAndZoom(point, 16)
    var marker = (this.CPoint = new BMap.Marker(point))
    map.addOverlay(marker)
    this.addIcon(104.085996, 30.689684)
    this.addIcon(104.075996, 30.689684)
  }
}
</script>

<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
