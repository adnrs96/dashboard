<template>
  <div
    class="flex flex-col items-center"
    :class="[
      `${beginner ? 'justify-center': 'justify-start md:justify-center'}`
    ]"
  >
    <s-arrow
      circled
      left
      prev
      hover
      class="absolute top-14 left-0 ml-8 mt-8"
    />
    <s-text
      v-if="beginner"
      head="1"
      weight="regular"
      center
      class="w-4/5 md:w-125 mt-5"
    >
      <!-- ToDo Get the user name -->
      Welcome to Storyscript, Jean Val JeanJean!
    </s-text>
    <router-view class="m-8" />
    <footer
      v-if="beginner"
      class="flex flex-col md:flex-row items-center mb-5"
    >
      <s-text
        p="3"
        weight="semibold"
        center
        class="md:mr-12 mb-2 md:mb-0"
      >
        Are you looking for help?
      </s-text>
      <a
        href="https://docs.storyscript.io/"
        target="_blank"
        class="flex items-center mb-2 md:mb-0 hover:underline text-indigo-50"
      >
        <s-text
          p="3"
          weight="semibold"
          class="text-indigo-50"
        >
          Read our docs
        </s-text>
        <s-arrow
          class="ml-3"
          top
          right
          w="8"
          h="8"
          color="#7180FF"
        />
      </a>
      <s-icon
        icon="dot"
        class="ml-7 mr-6 hidden md:block"
      />
      <a
        href="https://storyscript.io/contact"
        target="_blank"
        class="flex items-center mb-2 md:mb-0 hover:underline text-indigo-50"
      >
        <s-text
          p="3"
          weight="semibold"
          class="text-indigo-50"
        >
          Contact support
        </s-text>
        <s-arrow
          class="ml-3"
          top
          right
          w="8"
          h="8"
          color="#7180FF"
        />
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SArrow from '@/components/Arrow.vue'
import SText from '@/components/Text.vue'
import SIcon from '@/components/Icon.vue'

@Component({
  name: 'Create',
  components: {
    SArrow,
    SText,
    SIcon
  }
})
export default class Create extends Vue {
  @Prop({ type: Boolean, default: false }) private beginner!: boolean
}
</script>
