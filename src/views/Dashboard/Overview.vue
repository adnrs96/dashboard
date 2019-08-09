<template>
  <div>
    <apps-table />
    <button @click="$router.push({ path: '404' })">
      click me
    </button>
  </div>
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
export default class Overview extends Vue {
  mounted () {
    console.log('overview mounted')
  }
}
</script>
