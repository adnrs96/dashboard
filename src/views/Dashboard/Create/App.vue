<template>
  <div class="shadow-card rounded-10 bg-white">
    <div class=" w-70 md:w-80 md:w-87 mt-12 mx-4 md:mx-20 mb-7 flex flex-col items-center">
      <s-text
        head="2"
        weight="semibold"
        class="mb-4"
      >
        Create App
      </s-text>
      <div class="w-56 h-48 bg-gray-c6c6c6 mb-11" />
      <s-input
        placeholder="Enter an app name"
        class="w-full mb-4"
        icon="spinner"
        :loading="loading"
      />
      <s-button
        primary
        center
        class="mb-5 w-full"
        :icon="loading ? 'spinner' : ''"
        :loading="loading"
      >
        Create your first app
      </s-button>
      <s-text
        p="3"
        weight="medium"
      >
        What's an app?
      </s-text>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SText from '@/components/Text.vue'
import SButton from '@/components/Button.vue'
import SInput from '@/components/Input.vue'

@Component({
  name: 'App',
  components: {
    SText,
    SButton,
    SInput
  }
})
export default class App extends Vue {
  private readonly _loading: boolean

  constructor () {
    super()
    this._loading = false
  }

  private get loading (): boolean {
    return this._loading
  }
}
</script>
