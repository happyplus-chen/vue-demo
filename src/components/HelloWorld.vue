<template>
  <div class="hello">
    <!-- <cc-select></cc-select> -->
    <cc-input suffix-icon="icon iconfont icon-all" prefix-icon="icon iconfont icon-all"></cc-input>
    <!-- <cc-input>
      <div slot="suffix">
        <i class="icon iconfont icon-all"></i>
        <i class="icon iconfont icon-all"></i>
      </div>
    </cc-input> -->
  </div>
</template>

<script>
import select from './select/select.vue'
import input from './input/input.vue'
export default {
  components: { ccSelect: select, ccInput: input },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  /* background-image: url(../assets/big.jpg); */
  width: 240px;
}
</style>
