<template>
  <div class="dashboard-container">
    <!-- <loader /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'

@Component({
  components: {
    Loader
  }
})
export default class Home extends Vue { }
</script>
