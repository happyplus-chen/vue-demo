<template>
  <div class="layout">
    <i class="addcard" @click="addcard">添加</i>
    <div id="freewall" class="free-wall">
      <div v-for="(item,index) in data" :key="index" class="item level1" :style="item">
        <div>{{index}}</div>
      </div>
    </div>

  </div>
</template>
<script>
// import './css/font-awesome.min.css'
// import './css/metro-style.css'
// import './css/style.css'
// import $ from 'jquery'
// import freewal from './freewall'
// freewal($)
export default {
  beforeCreate() {},
  data() {
    return {
      wall: null,
      data: [
        { width: '640px', height: '160px', id: 1 },
        { width: '320px', height: '160px', id: 2 },
        { width: '320px', height: '160px', id: 3 },
        { width: '320px', height: '160px', id: 4 },
        { width: '320px', height: '320px', id: 5 },
        { width: '320px', height: '320px', id: 6 },
        { width: '320px', height: '320px', id: 7 },
        { width: '320px', height: '160px', id: 8 },
        { width: '320px', height: '160px', id: 9 },
        { width: '320px', height: '160px', id: 10 },
        { width: '320px', height: '320px', id: 11 },
        { width: '320px', height: '160px', id: 12 },
        { width: '320px', height: '320px', id: 13 },
        { width: '320px', height: '160px', id: 14 },
        { width: '320px', height: '320px', id: 15 },
        { width: '320px', height: '320px', id: 16 }
        // { width: '320px', height: '160px' },
        // { width: '320px', height: '160px' }
      ],
      colour: ['#6cadb7']
    }
  },
  created() {},
  mounted() {
    let me = this
    this.wall = new window.Freewall('#freewall')
    window.$('.free-wall .item').each(function() {
      var backgroundColor = me.colour[(me.colour.length * Math.random()) << 0]
      window.$(this).css({
        backgroundColor: backgroundColor
      })
    })

    this.wall.reset({
      draggable: true,
      animate: true,
      cacheSize: true,
      selector: '.level1',
      cellW: 180,
      cellH: 180,
      fixSize: 0,
      gutterX: 20,
      gutterY: 10,
      onComplete() {
        console.log('onComplete', arguments)
      },
      onBlockFinish() {
        console.log('onBlockFinish', arguments)
      },
      onResize: function() {
        me.wall.fitZone()
      }
    })
    me.wall.fitZone()
    window.$(window).trigger('resize')
  },
  methods: {
    insert() {
      this.data.push({ width: '320px', height: '160px' })
    },
    addcard() {
      var temp =
        '<div class="brick {size}" style="background-color: {color}"><div class="cover"></div></div>'
      var size = 'size33 size32 size31 size23 size22 size21 size13 size12 size11'.split(
        ' '
      )
      var html = ''
      for (var i = 0; i < 1; ++i) {
        html += temp
          .replace('{size}', size[(size.length * Math.random()) << 0])
          .replace(
            '{color}',
            this.colour[(this.colour.length * Math.random()) << 0]
          )
      }
      this.wall.appendBlock(html)
    }
  },
  watch: {
    data() {
      console.log(arguments)
      this.wall.refesh()
    }
  }
}
</script>

<style>
.layout {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: 4em 2%;
}
.addcard {
  position: absolute;
  left: 0px;
  color: #fff;
  top: -50px;
  cursor: pointer;
}
</style>
