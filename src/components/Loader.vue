<template>
  <div class="w-screen h-screen bg-indigo-50 overflow-hidden">
    <img
      class="w-full h-full object-cover"
      src="@/assets/img/loader/loader-bg.svg"
      alt="Loading screen"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'SLoader'
})
export default class Loader extends Vue {
}
</script>
