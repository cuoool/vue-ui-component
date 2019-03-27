export default {
  name: 'BaseCard',
  render(h) {
    return <div class="ui-card">{this.$slots.default}</div>
  }
}
