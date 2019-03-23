export default {
  name: 'BaseBadge',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  render(h) {
    return (
      <span class="p-1 mt-1 rounded inline-block font-bold leading-none text-center align-baseline whitespace-no-wrap text-xs">
        {this.$slots.default}
      </span>
    )
  }
}
