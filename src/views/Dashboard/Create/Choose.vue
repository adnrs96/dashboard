<template>
  <div
    class="bg-white"
    :class="[
      'flex',
      'flex-col',
      'items-center',
      'justify-between',
      'shadow-card',
      'rounded-10',
      'lg:flex-row',
      'p-4',
    ]"
  >
    <div class="flex flex-col justify-center items-center sm:w-90 lg:w-62 mx-4 md:mx-16 my-8">
      <s-text
        head="2"
        weight="semibold"
        class="mb-6"
      >
        App
      </s-text>
      <div class="bg-gray-c6c6c6 pt-6 pb-5 px-5 mb-6">
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
    <div class="bg-indigo-10 w-full h-px lg:w-px lg:h-initial self-stretch"></div>
    <div class="flex flex-col justify-center items-center w-62 mx-4 md:mx-16 my-8">
      <s-text
        head="2"
        weight="semibold"
      >
        Microservice
      </s-text>
      <img
        class="mb-12 mt-11"
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
