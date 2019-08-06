<template>
  <div class="w-screen h-screen bg-indigo-50 overflow-hidden">
    <img class="w-full" src="@/assets/img/loader/loader-bg.png" />
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
