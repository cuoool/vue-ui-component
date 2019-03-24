export default {
  functional: true,
  props: {
    records: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: null
    }
  },
  render(h, context) {
    return (
      <tbody>
        {context.props.records.map((record, index) => {
          return (
            <tr
              key={
                context.props.keyName !== null
                  ? record[context.props.keyName]
                  : index
              }
              class="p-2 font-normal"
            >
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
