<template>
  <div>
    <div class="w-11/12 md:w-4/5 lg:w-9/12 xl:w-1/2 flex justify-center absolute z-10 bg-white">
      <s-arrow circled class="absolute left-0 right-0 md:mt-12 md:ml-12 mt-4 ml-4 z-20" />
      <div class="flex flex-col h-screen justify-around">
        <div class="flex items-center">
          <s-logo icon />
          <s-logo variant="light" class="ml-7/8" />
        </div>
        <div>
          <div>
            <p class="text-6xl text-gray-80 leading-80 font-body">Hello!</p>
            <s-text
              p="3"
              weight="regular"
              color="gray-80 mb-8 mt-4"
            >Sign up with your Github account</s-text>
          </div>
          <div>
            <s-button icon="github-o" black class="w-full">Continue with GitHub</s-button>
            <div class="flex mt-4">
              <s-button icon="google-f" class="mr-1"></s-button>
              <s-button icon="gitlab-o" class="ml-1"></s-button>
            </div>
          </div>
        </div>
        <div class="h-10"></div>
      </div>
    </div>
    <s-loader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SLogo from '@/components/Logo.vue'
import SText from '@/components/Text.vue'
import SButton from '@/components/Button.vue'
import SLoader from '@/components/Loader.vue'
import SArrow from '@/components/Arrow.vue'

@Component({
  components: {
    SLogo,
    SText,
    SButton,
    SLoader,
    SArrow
  }
})
export default class Login extends Vue {

}
</script>
