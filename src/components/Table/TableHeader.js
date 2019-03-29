import CheckableHead from './CheckableHead'

function showColumnName (column) {
  if (column instanceof Object) {
    return column.name
  }

  return column
}

function showColumnStyle (column) {
  if (column instanceof Object) {
    return column.style
  }

  return {}
}

function toggleCheckingAllItems(event) {
  // if (this.all_items_checked === true) {
  //   this.checkedItems = this.checkableItems
  // } else {
  //   this.checkedItems = []
  // }
}

export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    allItemsChecked: {
      type: Boolean,
      default: false
    },
    checkableItems: {
      type: Array,
      default: () => []
    }
  },
  render(h, context) {
    return (
      <thead>
        { (() => {
            if(context.props.showCheckbox) {
              return <CheckableHead
                value={context.props.allItemsChecked}
                disabled={context.props.checkableItems.length === 0}
                vOn:input={toggleCheckingAllItems}
                vOn:change={toggleCheckingAllItems}
              />
            }
          })()
        }
        {context.props.columns.map((column, key) => {
          return (
            <th key={key} style={showColumnStyle(column)}>
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
