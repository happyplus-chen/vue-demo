<template>
  <div class="map-box">
    <div class="map-content" :id="mapId" :style="{height:mapHeight,width:'calc(100% - 300px)'}"></div>
    <div class="map-search" :style="{
      height:mapHeight,width:'300px'
    }">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="美食" name="food">
          <div v-for="o in food" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>
        <el-tab-pane label="交通" name="traffic">
          <div v-for="o in traffic" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>

        <el-tab-pane label="景点" name="attractions">
          <div v-for="o in attractions" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>
        <el-tab-pane label="购物" name="shopping">
          <div v-for="o in shopping" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>
        <el-tab-pane label="娱乐" name="entertainment">
          <div v-for="o in entertainment" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>
        <el-tab-pane label="租车" name="carrental">
          <div v-for="o in carrental" :key="o.uid" class="text item">
            {{ o.title }}
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import BMap from 'BMap'
export default {
  props: {
    mapId: {
      type: String
    },
    mapHeight: {
      type: String,
      default: '500px'
    },
    mapWidth: {
      type: String,
      default: '100%'
    }
  },
  data: function() {
    return {
      mapInstance: null,
      iconMap: {},
      BMap: null,

      food: [], // 美食
      traffic: [], // 交通

      attractions: [], // 景点
      shopping: [], // 购物
      entertainment: [], // 娱乐
      carrental: [], // 租车

      activeName: 'food',
      // 中心
      CPoint: null,
      // 酒店
      HPoint: null,
      // 其它
      MPoint: null
    }
  },
  watch: {
    BMap(bmap) {
      console.log(bmap)
    }
  },
  computed: {},
  methods: {
    generateIcon() {
      const BMap = window.BMap
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
    clearOverlays() {
      this.mapInstance.clearOverlays()
    },
    addOverlay(p1, p2) {
      const BMap = window.BMap
      if (this.MPoint) this.mapInstance.removeOverlay(this.MPoint)
      let point = (this.MPoint = new BMap.Point(p1, p2))
      let marker = (this.MPoint = new BMap.Marker(point))
      this.mapInstance.addOverlay(marker)
    },
    addIcon(p1, p2, type) {
      let BMap = window.BMap
      let point = new BMap.Point(p1, p2)
      // this.mapInstance.centerAndZoom(point, 16)
      let vectorMarker = new BMap.Marker(point, {
        // 指定Marker的icon属性为Symbol
        // icon: new BMap.Symbol(window.BMap_Symbol_SHAPE_POINT, {
        //   scale: 1.3, // 图标缩放大小
        //   fillColor: 'orange', // 填充颜色
        //   fillOpacity: 0.8// 填充透明度
        // })

        icon: this.iconMap.loc_blue
      })
      // let label = new BMap.Label('我是文字标注哦', {
      //   offset: new BMap.Size(15, 0)
      // })

      // label.setStyle({
      //   color: '#237dff',
      //   fontSize: '12px',
      //   // height: '58px',
      //   lineHeight: '20px',
      //   fontFamily: '微软雅黑',
      //   borderColor: '#237dff',
      //   borderWidth: '2px',
      //   borderRadius: '0 50px 50px 0',
      //   padding: '0 10px 0 21px',
      //   borderLeft: 'none',
      //   zIndex: '-1'
      // })
      // vectorMarker.addEventListener('onmouseleave', function(target) {
      //   let dom = target.currentTarget.V
      //   dom.parentElement.style.zIndex = -6131935
      //   console.log(target, 'point onmouseleave')
      // })
      // vectorMarker.addEventListener('mouseout', function(target) {
      //   let dom = target.currentTarget.V
      //   dom.parentElement.style.zIndex = -6131936
      //   console.log(target)
      // })
      // label.addEventListener('mouseover', function(target) {
      //   let dom = target.currentTarget.V
      //   // dom.style.zIndex = 88
      //   // let zidx = dom.parentElement.style.zIndex
      //   dom.parentElement.style.zIndex = -6131935
      //   console.log('label hover')
      // })
      // label.addEventListener('mouseout', function(target) {
      //   let dom = target.currentTarget.V
      //   dom.parentElement.style.zIndex = -6131936
      //   // console.log('hover', target, dom)
      // })
      // vectorMarker.setLabel(label)
      // vectorMarker.addEventListener('mouseover', function(target) {
      //   let dom = target.currentTarget.V
      //   dom.parentElement.style.zIndex = -6131935
      //   console.log(target, 'point mouseover')
      // })
      this.mapInstance.addOverlay(vectorMarker)
    },
    getDistance() {
      let p1 = new window.BMap.Point(104.075796, 30.659684)
      let p2 = new window.BMap.Point(104.075796, 30.679684)
      this.mapInstance.getDistance(p1, p2)
    },
    searchLocal(kw) {
      const vm = this
      return new Promise((resolve, reject) => {
        const onSearchComplete = function(result) {
          resolve(result)
        }
        const local = new this.BMap.LocalSearch(this.mapInstance, {
          onSearchComplete, // 查询完成回调
          pageCapacity: 20 // 每页数目
        })
        // local.search(kw)
        local.searchNearby(kw, vm.CPoint, 1000)
      })
    },
    loadScript(AK) {
      return new Promise(function(resolve, reject) {
        if (window.BMap) resolve(window.BMap)
        window.onBMapCallback = function(bmap) {
          console.log('maploaded')
          resolve(window.BMap)
        }
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
          'http://api.map.baidu.com/api?v=3.0&ak=' +
          AK +
          '&callback=onBMapCallback'
        script.onerror = reject
        document.head.appendChild(script)
      })
    },
    handleClick({ name }) {
      const keyword = {
        food: '美食',
        traffic: '交通', // 交通
        attractions: '公园', // 景点
        shopping: '购物', // 购物
        entertainment: '娱乐', // 娱乐
        carrental: '租车' // 租车
      }
      console.log(name)
      this.clearOverlays()
      this.searchLocal(keyword[name]).then(data => {
        console.log(data)
        this[name] = data.Qq
        data.Qq.forEach(item => {
          let { lat, lng } = item.point
          this.addIcon(lng, lat, name)
        })
      })
    }
  },
  created() {},
  mounted() {
    window.vm = this
    this.loadScript('QGvYYZ13lrGhCNZBwXr1oYZGWCHmzdpn').then(BMap => {
      console.log(BMap, this.mapId)
      this.BMap = BMap
      this.generateIcon()
      let map = (this.mapInstance = new BMap.Map(this.mapId))
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [window.BMAP_NORMAL_MAP]
        })
      )
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      var point = new BMap.Point(104.075796, 30.659684)
      this.CPoint = point
      map.centerAndZoom(point, 16)
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
    })
  }
}
</script>

<style lang="less" scoped>
.map-content {
  float: left;
}
.map-search {
  float: left;
  background: #f1f1f1;
  /deep/.el-tabs {
    .el-tabs__item {
      padding: 0 10px;
    }
  }
}
</style>
