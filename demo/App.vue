<template>
  <div class="container mt-10 mx-auto">
    <BaseCard>
      <AppTable/>
    </BaseCard>
  </div>
</template>

<script>
import AppTable from './AppTable.vue'

export default {
  components: { AppTable }
}
</script>

<style lang="sass">
body
  @apply .bg-gray-400
</style>
