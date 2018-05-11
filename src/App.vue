<template>
  <div id="app">
    <!-- <fallmenu></fallmenu> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import fallmenu from './components/Header'

export default {
  name: 'App',
  components: {
    fallmenu
  },
  data() {
    return {
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
        { title: '测试1' }
      ]
    }
  }
}
</script>

<style>
ul {
  font-size: 100%;
  font-weight: normal;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
}
#app {
  text-align: center;
  color: #2c3e50;
  height: 500px;
}
</style>
