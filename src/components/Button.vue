<template>
  <button
    class="flex items-center rounded-10 focus:outline-none focus:shadow-outline"
    :class="[`bg-${black ? 'gray-100 hover:bg-gray-90' : 'white hover:bg-gray-10'}`, `${black ? '': 'border border-solid border-gray-30'}`]"
    @click="$emit('click')"
  >
    <s-text
      v-if="$slots.default"
      p="2"
      weight="semibold"
      :color="textColor"
      class="py-4 pl-4"
      :class="[`${icon ? 'pr-8' : 'pr-4'}`]"
    >
      <slot />
    </s-text>
    <s-icon
      v-if="icon"
      :icon="icon"
      :color="black ? 'white' : 'neutral'"
      :class="[`${!$slots.default ? 'py-7/8 px-14' : 'pr-5'}`]"
    />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SText from '@/components/Text.vue'
import SIcon from '@/components/Icon.vue'

@Component({
  name: 'SButton',
  components: {
    SText,
    SIcon
  }
})
export default class Button extends Vue {
  // bg-gray-100 bg-white
  @Prop({ type: Boolean, default: false }) readonly white!: boolean
  @Prop({ type: Boolean, default: false }) readonly black!: boolean
  @Prop({
    type: String,
    default: undefined
  }) readonly icon!: string | undefined

  private get path (): string {
    return `./assets/img/logos/${this.icon === 'gitlab-o'
      ? 'gitlab-outline.svg' : this.icon === 'google-f'
        ? 'google-filled.svg' : this.icon === 'github-o'
          ? 'github-waving-cat-outline.svg' : ''}`
  }

  private get textColor (): string {
    return this.black ? 'white' : 'black'
  }
}
</script>
