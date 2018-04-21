<template>
  <div class="fall-nav">
    <!-- <div class="container">

    </div> -->
    <div class="head-left">&lt;&lt;</div>
    <div class="head-right">&gt;&gt;</div>
    <div class="fall-bar">
      <ul class="head-ul">
        <li class="head-item" v-for="(header,index) in data" :key="index">{{header}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FallMenu',
  data () {
    return {
      dataset:
        [{
          title: '测试1',
          child: [
            {
              title: '测试12',
              child:
                [
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
              child:
                [
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
              child:
                [
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
              child:
                [
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
            }]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child:
                [
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
              child:
                [
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
              child:
                [
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
              child:
                [
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
            }]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child:
                [
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
              child:
                [
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
              child:
                [
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
              child:
                [
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
            }]
        },
        {
          title: '测试1',
          child: [
            {
              title: '测试12',
              child:
                [
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
              child:
                [
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
              child:
                [
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
              child:
                [
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
            }]
        }, { title: '测试1测试1' }, { title: '测试测试' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }]
    }
  },
  computed: {
    data () {
      let d = Array.from({ length: 20 }, () => '测试').map((l, i) => {
        return l + i.toString().repeat(Math.random() * 5 + 1)
      })
      return d
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}
li {
  display: inline-block;
  text-align: center;
  line-height: 60px;
  padding: 0px 20px;
}
.fall-nav {
  margin: auto;
  width: 80%;
  height: 100%;
  text-align: left;
  position: relative;
  overflow-x: hidden;
}

.fall-nav .container {
  height: 60px;
  background: lightslategray;
}

.fall-nav .head-left {
  position: absolute;
  left: 0px;
  top: 50%;
  line-height: 0px;
}

.fall-nav .head-right {
  position: absolute;
  top: 50%;
  right: 0px;
  line-height: 0px;
}

.fall-nav .fall-bar {
  width: 5000px;
  position: relative;
  left: 0px;
}
.fall-nav .fall-bar ul {
  /* margin-left: 40px; */
}
.fall-nav .fall-bar .head-item {
  min-width: 100px;
  border: mediumturquoise 1px solid;
  height: 60px;
}
</style>
