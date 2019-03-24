export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  render(h, context) {
    return (
      <thead>
        {context.props.columns.map((column, key) => {
          return (
            <th
              key={key}
              style={showColumnStyle(column)}
              class="bg-gray-200 p-2 font-normal"
            >
              <div class="flex items-center">
                <span class="flex-grow">{showColumnName(column)}</span>
              </div>
            </th>
          )
        })}
      </thead>
    )
  }
}

const showColumnName = column => {
  if (column instanceof Object) {
    return column.name
  }

  return column
}

const showColumnStyle = column => {
  if (column instanceof Object) {
    return column.style
  }

  return {}
}
