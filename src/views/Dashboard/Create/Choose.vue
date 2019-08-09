<template>
  <div class="my-4 md:my-0 shadow-card w-11/12 flex-col md:flex-row md:w-11/12 xl:w-2/5 rounded-10 p-4 flex items-center justify-between bg-white">
    <div class="flex flex-col justify-center items-center py-8 px-6 md:px-8 lg:px-10 w-11/12  lg:w-3/4 xl:w-45-pcent">
      <s-text
        head="2"
        weight="semibold"
        class="mb-6"
      >
        App
      </s-text>
      <div class="bg-gray-c6c6c6 pt-6 pb-5 px-4 mb-3">
        <img
          src="@/assets/img/illustrations/clip-bad-gateaway.svg"
          alt="Create new app illustration"
        >
      </div>
      <s-text
        class="mb-6"
        p="3"
        weight="regular"
        center
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </s-text>
      <s-button
        primary
        @click="goTo('new-app')"
      >
        Create a new app
      </s-button>
    </div>
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <div class="hidden sm:block bg-indigo-10 w-px self-stretch"></div>
    <div class="flex flex-col justify-center items-center py-8 px-6 md:px-8 lg:px-10 w-11/12 md: md:w-3/4 xl:w-45-pcent">
      <s-text
        head="2"
        weight="semibold"
        class="mb-6"
      >
        Microservice
      </s-text>
      <img
        class="mb-12"
        src="@/assets/img/illustrations/clip-uploading.svg"
        alt="Submit a microservice illustration"
      >
      <s-text
        class="mb-6"
        p="3"
        weight="regular"
        center
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </s-text>
      <s-button
        primary
        @click="goTo('submit-microservice')"
      >
        Submit a microservice
      </s-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SText from '@/components/Text.vue'
import SButton from '@/components/Button.vue'

@Component({
  name: 'Choose',
  components: {
    SText,
    SButton
  }
})
export default class Choose extends Vue {
  private goTo (path: string): void {
    if (path === 'new-app') {
      this.$router.push({ name: 'new-app' })
    } else if (path === 'submit-microservice') {
      window.location.assign('https://hub.storyscript.io/sync/')
    }
  }
}
</script>
