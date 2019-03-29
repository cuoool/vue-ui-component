export default {
  functional: true,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    return <th class="ui-checkable">
      <input
        type="checkbox"
        value={context.props.value}
        vOn:input={context.listeners['input'] || (() => {})}
        vOn:change={context.listeners['change']  || (() => {})}
        disabled={context.props.disabled}
      />
    </th>
  }
}
