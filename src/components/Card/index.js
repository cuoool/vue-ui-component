export default {
  name: 'BaseCard',
  render(h) {
    return (
      <div class="rounded overflow-hidden shadow-lg bg-white p-4 w-full">
        {this.$slots.default}
      </div>
    )
  }
}
