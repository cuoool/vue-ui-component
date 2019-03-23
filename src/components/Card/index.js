export default {
  name: 'BaseCard',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  render(h) {
    return (
      <div class="rounded overflow-hidden shadow-lg bg-white p-4 w-full">
        {this.$slots.default}
      </div>
    )
  }
}
