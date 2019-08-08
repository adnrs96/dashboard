<template>
  <apps-table />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppsTable from '@/components/AppsTable.vue'

@Component({
  name: 'Overview',
  components: {
    AppsTable
  }
})
export default class Overview extends Vue { }
</script>
