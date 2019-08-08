<template>
  <div class="shadow-card w-10/12 md:w-1/2 xl:w-1/4 rounded-10 bg-white">
    <div class="px-8 lg:px-20 pt-12 pb-8 flex flex-col items-center">
      <s-text
        head="2"
        weight="semibold"
        class="mb-8"
      >
        Create App
      </s-text>
      <div class="w-56 h-48 bg-gray-c6c6c6 mb-12" />
      <s-input
        placeholder="Enter an app name"
        icon="spinner"
        class="w-full"
      />
      <s-button
        primary
        center
        class="my-4 w-full"
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
export default class App extends Vue { }
</script>
