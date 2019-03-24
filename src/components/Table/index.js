import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default {
  name: 'BaseTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    records: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: null
    }
  },
  render(h) {
    return (
      <table class="table">
        <TableHeader columns={this.columns} />
        <TableBody
          records={this.records}
          keyName={this.keyName}
          {...{
            scopedSlots: {
              default: ({ record, index }) =>
                this.$scopedSlots.default({
                  record: record,
                  index: index
                })
            }
          }}
        />
      </table>
    )
  }
}
