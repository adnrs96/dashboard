<template>
  <div class="dashboard-container">
    <!-- <s-loader /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SLoader from '@/components/Loader.vue'

@Component({
  components: {
    SLoader
  }
})
export default class Home extends Vue { }
</script>
