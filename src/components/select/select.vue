<template>
  <div class="select">
    <div class="input-suffix">
      <input type="text" class="innerinput">
      <span class="input__suffix">
        <span class="input__suffix-inner">
          <i class="icon iconfont icon-all"></i>
        </span>
      </span>
    </div>
    <div v-if="show" class="my-popper">666</div>
  </div>

</template>
<script>
import Popper from 'popper.js'
export default {
  data() {
    return {
      show: false,
      popper: null
    }
  },
  methods: {
    createPopper() {
      var reference = document.querySelector('.select')
      var popper = document.querySelector('.my-popper')
      var anotherPopper = new Popper(reference, popper, {
        placement: 'up',
        // popper options here
        onCreate: data => {
          console.log(1234)
        },
        onUpdate: data => {
          console.log(444)
        }
      })
      window.popper = this.popper = anotherPopper
    }
  },
  mounted() {},
  watch: {
    show(v) {
      if (v) {
        if (this.popper) {
          this.popper.update()
        } else {
          this.createPopper()
        }
      } else {
        this.popper.destroy()
      }
    }
  }
}
</script>

<style scoped>
.select {
  width: 240px;
}
.innerinput {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.input-suffix {
  display: block;
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.input__suffix {
  position: absolute;
  height: 100%;
  right: 5px;
  top: 0;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  pointer-events: none;
}
.input__suffix-inner {
  pointer-events: all;
}

.my-popper {
  background: #ffc107;
  color: black;
  width: 150px;
  border-radius: 3px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
}
</style>


