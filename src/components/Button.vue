<template>
  <button
    class="flex items-center rounded-10 focus:outline-none focus:shadow-outline"
    :class="[
      `${backgroundColor}`,
      `${black || primary ? '': 'border border-solid border-gray-30'}`,
      `${center ? 'justify-center': 'justify-between'}`
    ]"
    @click="$emit('click')"
  >
    <s-text
      v-if="$slots.default"
      p="2"
      weight="semibold"
      :color="textColor"
      class="py-4 pl-5"
      :class="[
        `${icon ? 'pr-8' : 'pr-5'}`,
      ]"
    >
      <slot />
    </s-text>
    <s-icon
      v-if="!icon && loading"
      icon="spinner"
      :color="black || primary ? 'white' : 'neutral'"
      :loading="loading"
      :class="[`${!$slots.default ? 'py-7/8 px-14' : 'pr-5'}`]"
    />
    <s-icon
      v-else-if="icon"
      :loading="loading"
      :icon="icon"
      :color="black || primary ? 'white' : 'neutral'"
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
  @Prop({ type: Boolean, default: false }) readonly white!: boolean
  @Prop({ type: Boolean, default: false }) readonly black!: boolean
  @Prop({ type: Boolean, default: false }) readonly primary!: boolean
  @Prop({ type: Boolean, default: false }) readonly center!: boolean
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean
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
    return this.black || this.primary ? 'white' : 'black'
  }

  private get backgroundColor (): string {
    return this.black
      ? 'bg-gray-100 hover:bg-gray-90' : this.primary
        ? 'bg-indigo-60 hover:bg-indigo-70' : 'bg-white hover:bg-gray-10'
  }
}
</script>
