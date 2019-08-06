<template>
  <component
    :is="'button'"
    class="flex items-center rounded-10"
    :class="[`bg-${black ? 'gray-100' : 'white'}`, `${black ? '': 'border border-solid border-gray-30'}`]"
  >
    <s-text
      p="2"
      weight="semibold"
      :color="textColor"
      class="py-4 pl-4"
      :class="[`${icon ? 'pr-8' : 'pr-4'}`]"
      v-if="$slots.default"
    >
      <slot />
    </s-text>
    <s-icon
      v-if="icon"
      :icon="icon"
      :color="black ? 'white' : 'neutral'"
      :class="[`${!$slots.default ? 'py-14 px-54' : 'pr-4'}`]"
    />
  </component>
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

  public get path (): string {
    return `./assets/img/logos/${this.icon === 'gitlab-o' ? 'gitlab-outline.svg' : this.icon === 'google-f' ? 'google-filled.svg' : this.icon === 'github-o' ? 'github.waving-cat-outline.svg' : ''}`
  }

  public get textColor (): string {
    return this.black ? 'white' : 'black'
  }
}
</script>
