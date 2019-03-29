const Checkable = (context) => {
  if (context.props.showCheckbox) {
    return <td class="ui-checkable">
      <input type="checkbox" />
    </td>
  }
}

export default {
  name: 'TableBody',
  functional: true,
  props: {
    records: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: null
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    return (
      <tbody>
        {context.props.records.map((record, index) => {
          let keyName = context.props.keyName !== null ? record[context.props.keyName] : index

          return (
            <tr key={keyName}>
              <Checkable showCheckbox={context.props.showCheckbox} />
              {context.scopedSlots.default({
                record: record,
                index: index
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }
}
