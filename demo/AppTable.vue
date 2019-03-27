<template>
  <BaseTable :columns="columns" :records="records">
    <template slot-scope="props">
      <td>{{ props.record.username }}</td>
      <td>{{ props.record.email }}</td>
    </template>
  </BaseTable>
</template>

<script>
export default {
  data() {
    return {
      columns: ['Name', 'Age'],
      records: [
        { username: 'nou.narida', email: 'nou@narida.com' },
        { username: 'pov.sinuon', email: 'pov@sinuon.com' }
      ]
    }
  }
}
</script>

