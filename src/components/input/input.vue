<template>
  <div>
    <div :class="[
   'el-input',
    {
      'is-disabled': inputDisabled,
      'el-input--prefix': $slots.prefix || prefixIcon,
      'el-input--suffix': $slots.suffix || suffixIcon
    }
    ]" @mouseenter="hovering = true" @mouseleave="hovering = false">

      <input class="el-input__inner" v-bind="$attrs" :type="type" :disabled="inputDisabled" :value="currentValue" ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @change="handleChange" :aria-label="label">
      <!-- 前置内容 -->
      <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon" :style="prefixOffset">
        <slot name="prefix"></slot>
        <i class="el-input__icon" v-if="prefixIcon" :class="prefixIcon">
        </i>
      </span>
      <!-- 后置内容 -->
      <span class="el-input__suffix" v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon" :style="suffixOffset" @click="suffixClick">
        <span class="el-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="el-input__icon" v-if="suffixIcon" :class="suffixIcon">
            </i>
          </template>
          <i v-else class="el-input__icon el-icon-circle-close el-input__clear" @click="clear"></i>
        </span>
        <i class="el-input__icon" v-if="validateState" :class="['el-input__validateIcon', validateIcon]">
        </i>
      </span>

    </div>
    <div style="" v-show="show" ref='popper'>
      <h1>123456</h1>
    </div>
  </div>

</template>
<script>
import emitter from '../../mixins/emitter'
import Popper from '../../utils/vue-popper'
import './input.css'
export default {
  name: 'ElInput',

  componentName: 'ElInput',
  mixins: [emitter, Popper],
  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data() {
    return {
      appendToBody: true,
      show: false,
      currentValue:
        this.value === undefined || this.value === null ? '' : this.value,
      textareaCalcStyle: {},
      prefixOffset: null,
      suffixOffset: null,
      hovering: false,
      focused: false,
      isOnComposition: false
    }
  },

  props: {
    value: [String, Number],
    size: String,
    form: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    validateState() {
      return this.elFormItem ? this.elFormItem.validateState : ''
    },
    needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false
    },
    validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close'
      }[this.validateState]
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
    showClear() {
      return (
        this.clearable &&
        !this.disabled &&
        this.currentValue !== '' &&
        (this.focused || this.hovering)
      )
    }
  },

  watch: {
    value(val, oldValue) {
      this.setCurrentValue(val)
    }
  },

  methods: {
    focus() {
      ;(this.$refs.input || this.$refs.textarea).focus()
    },
    blur() {
      ;(this.$refs.input || this.$refs.textarea).blur()
    },

    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue])
      }
    },
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleInput(event) {
      if (this.isOnComposition) return
      const value = event.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return

      this.currentValue = value
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [value])
      }
    },

    clear() {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
      this.setCurrentValue('')
      this.focus()
    },
    suffixClick() {
      console.log(111)
      this.show = !this.show
      this.updatePopper()
    }
  },

  created() {
    this.$on('updatePopper', () => {
      if (this.showPopper) this.updatePopper()
    })
    this.$on('visible', val => {
      this.showPopper = val
    })
  },

  mounted() {
    this.popperElm = document.body
    // this.referenceElm = this.$parent.$el
    this.referenceElm = this.$refs.popper
  }
}
</script>
