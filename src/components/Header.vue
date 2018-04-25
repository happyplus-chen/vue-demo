<style>
@import '../assets/iconfont/iconfont.css';

ul {
  list-style: none;
}
li {
  display: inline-block;
  text-align: center;
  line-height: 60px;
  padding: 0px 20px;
  font-size: x-large;
}
.fall-nav-container {
  width: 90%;
  margin: auto;
}

.fall-nav {
  margin: auto;
  /* width: 80%; */
  height: 100%;
  text-align: left;
  position: relative;
  color: #fff;
  background: #47a3da;
  /* overflow-x: hidden; */
}

.fall-nav .container {
  height: 60px;
  background: #47a3da;
}

.fall-nav .head-left {
  top: 0px;
  width: 50px;
  height: 60px;
  background: #47a3da;
  position: absolute;
  left: 0px;
  cursor: pointer;
  line-height: 60px;
}

.fall-nav .head-right {
  top: 0px;
  width: 50px;
  height: 60px;
  background: #47a3da;
  position: absolute;
  cursor: pointer;
  right: 0px;
  line-height: 60px;
  text-align: right;
}

.fall-nav .fall-bar {
  overflow-x: hidden;
}
.fall-nav .fall-bar ul {
  width: 5000px;
  position: relative;
  left: 50px;
}
.fall-nav .fall-bar .head-item {
  min-width: 100px;
  /* border: mediumturquoise 1px solid; */
  height: 60px;
  background: #47a3da;
}
.fall-nav .fall-bar .head-item:hover {
  background: #258ecd;
}

.fall-nav .fall-box {
  position: absolute;
  width: 100%;
  height: 0px;
  opacity: 1;
  background: #53ade2;
  transition: all 1s ease 0s;
  /* transition: opacity 1.5s ease 0s; */
  /* -moz-transition: height 1s; Firefox 4 */
  /* -webkit-transition: height 1s; /* Safari 和 Chrome */
  /* -o-transition: height 1s; /* Opera */
}

.fall-box-cont {
  height: 100%；;
  /* transition: all 1s;
  border: steelblue 1px solid; */
}

.fall-nav-l2 {
  display: inline-block;
  width: 390px;
  margin-left: 70px;
  /* border: solid 1px #ccc; */
}
.fall-nav-l2 .l2title div {
  display: inline-block;
}
.l2icon {
  text-align: left;
  width: 50px;
}
.l2list {
  padding: 0;
  margin: 0;
  text-align: left;
}
.l2item {
  display: block;
  /* width: 390px; */
  box-sizing: border-box;
  padding: 7px 0 7px 50px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1;
}
.item-main div {
  display: inline;
}
.item-main {
  font-size: 1.2em;
  text-align: left;
}
.item-sub {
  text-align: left;
  color: #dad5d5;
  margin-top: 7px;
  font-size: 12px;
}
.item-sub div {
  display: inline;
  margin-left: 10px;
}
</style>

<template>
  <div class="fall-nav">
    <div class="fall-bar">
      <ul class="head-ul">
        <li class="head-item" v-for="(header,index) in data" :key="index" @mouseover="mouseover(index)" @mouseout="mouseout">
          <a>{{header}}</a>
        </li>
      </ul>
    </div>
    <div class="head-left" @click="next">&lt;&lt;</div>
    <div class="head-right" @click="prev">&gt;&gt;</div>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
      <div class="fall-box" v-show="show">
        <div class="fall-box-cont">
          <div v-for="(l2,index) in l2data" :key="index" class="fall-nav-l2">
            <h3 class="l2title">
              <div class="l2icon">
                <i class="icon iconfont icon-all">
                </i>
              </div>{{l2.title}}
            </h3>
            <ul class="l2list">
              <li class="l2item" v-for="(l3,index) in l3data" :key="index">
                <div class="item-main">
                  <a v-if="l3.url">{{l3.title}}</a>
                  <span v-else>{{l3.title}}</span>
                </div>
                <div class="item-sub">
                  <div v-for="(l4,index) in l4data" :key="index">
                    <a v-if="l4.url">{{l4.title}}</a>
                    <span v-else>{{l4.title}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>
<script>
export default {
  name: 'FallMenu',
  computed: {
    data() {
      let d = Array.from({ length: 20 }, () => '测试').map((l, i) => {
        return l + i.toString().repeat(Math.random() * 5 + 1)
      })
      return d
    }
  },
  methods: {
    next() {
      this.$el.querySelector('.head-ul').style.left = '100px'
    },
    prev() {
      this.$el.querySelector('.head-ul').style.left = '0px'
    },
    mouseover(index) {
      this.index = index
      this.show = true
    },
    mouseout() {
      this.show = false
    },
    beforeEnter: function(el) {
      // el.style.opacity = 0
      el.style.height = '0px'
    },
    enter: function(el, done) {
      setTimeout(() => {
        el.style.opacity = 1
        // el.style.height = this.$el.querySelector('.fall-box-cont') + 30 + 'px'
        el.style.height = '685px'
        done()
      }, 10)
    },
    beforeLeave: function(el, done) {
      // el.style.opacity = 1
      // el.style.height = '685px'
    },
    leave: function(el, done) {
      el.style.opacity = 0
      el.style.height = '0px'
    }
  },
  watch: {
    index(index) {
      let box = this.$el.querySelector('.fall-box-cont')
      console.log(index, box.clientHeight)
      box.parentElement.style.height = box.clientHeight + 30 + 'px'
    }
  },
  data() {
    return {
      l2data: [
        { title: '基础概要', icon: '' },
        { title: '过渡 & 动画', icon: '' },
        { title: '可重用 & 合成', icon: '' },
        { title: '工具', icon: '' },
        { title: '扩展升级', icon: '' },
        { title: '内部原理', icon: '' },
        { title: '升级迁移', icon: '' }
      ],
      l3data: [
        { title: '安装' },
        { title: '介绍' },
        { title: 'Vue 实例' },
        { title: '模板语法' },
        { title: '条件渲染' }
      ],
      l4data: [
        { title: '直接引入' },
        { title: 'NPM' },
        { title: 'Bower' },
        { title: 'AMD' },
        { title: '运行时' }
      ],
      index: null,
      show: false,
      dataset: [
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            },
            {
              title: '测试12',
              child: [
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                },
                {
                  title: '测试113',
                  child: [
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' },
                    { tilte: '测试1114' }
                  ]
                }
              ]
            }
          ]
        },
        { title: '测试1测试1' },
        { title: '测试测试' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' },
        { title: '测试1' }
      ]
    }
  }
}
</script>
