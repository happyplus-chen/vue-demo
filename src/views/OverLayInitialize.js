
const CoseOverLayInitialize = function(vm) {
  return {
    Initialize() {
      {
        this._map = vm.mapInstance
        const BMap = vm.BMap
        const that = this
        const popover = vm.$refs.popover
        // const template = '<div class="map-hotel-icon"><i class="i-company-gray curpointer"></i><div class="office-content">广州办事处</div></div>'
        let div = (this._div = document.createElement('div'))
        let icon = document.createElement('div')
        icon.className = 'icon'
        let content = document.createElement('div')
        content.className = 'content'
        let icontext = document.createElement('div')
        icontext.className = 'text'
        div.style.position = 'absolute'
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat)
        div.className = 'customOverlay' + ' ' + that._type
        // div.innerText = this._text
        div.appendChild(icon)
        div.appendChild(icontext)
        div.appendChild(content)
        div.onmouseover = function(ev) {
          console.log('onmouseover:', that._text, ev, that._item)
          popover.referenceElm = ev.target
          vm.popoverContent = that._item.title
          popover.showPopper = true
        }
        div.onmouseout = function() {
          console.log('onmouseout:', that._text)
          popover.showPopper = false
        }
        this._map.getPanes().labelPane.appendChild(div)
        return div
      }
    },
    draw() {
      var map = vm.mapInstance
      var pixel = map.pointToOverlayPixel(this._point)
      this._div.style.left = (pixel.x - 10) + 'px'
      this._div.style.top = pixel.y - 15 + 'px'
    }
  }
}
export default CoseOverLayInitialize
