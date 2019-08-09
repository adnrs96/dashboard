<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-6xl text-gray-80 leading-80 font-body mb-10">
      Not found
    </p>
    <s-button
      black
      @click="$router.push({ name: 'dashboard' })"
    >
      Go back home
    </s-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SButton from '@/components/Button.vue'

@Component({
  name: 'NotFound',
  components: { SButton }
})
export default class NotFound extends Vue { }
</script>
