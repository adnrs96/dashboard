<template>
  <div
    :class="[
      `${rotate}`,
      `${circle}`,
      `${hover ? 'hover:bg-gray-20' : ''}`,
      `${circle ? 'w-12 h-12' : ''}`
    ]"
    class="flex justify-center items-center bg-transparent cursor-pointer"
    @click="prev ? $router.go(-1) : $router.go(-1);$emit('arrow-click')"
  >
    <svg
      class="fill-current w-4 h-4"
      :width="w ? w : '16'"
      :height="h ? h : '16'"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.828 6.99968H16V8.99968H3.828L9.192 14.3637L7.778 15.7777L0 7.99968L7.778 0.22168L9.192 1.63568L3.828 6.99968Z"
        :fill="color ? color : '#7B8794'"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SArrow'
})
export default class Arrow extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) readonly circled!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly left!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly top!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly bottom!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly right!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly prev!: boolean

  @Prop({
    type: String,
    default: undefined
  }) readonly color!: string

  @Prop({
    type: Boolean,
    default: false
  }) readonly hover!: boolean

  @Prop({
    type: String,
    default: undefined
  }) readonly w!: string | undefined

  @Prop({
    type: String,
    default: undefined
  }) readonly h!: string | undefined

  private get rotate (): string {
    return this.top && this.right
      ? 'rotate-135deg' : this.bottom && this.right
        ? 'rotate-225deg' : this.top && this.left
          ? 'rotate-45deg' : this.bottom && this.left
            ? 'rotate-315deg' : this.top
              ? 'rotate-90deg' : this.bottom
                ? 'rotate-270deg' : this.right
                  ? 'rotate-180deg' : 'rotate'
  }

  private get circle (): string {
    if (this.circled) {
      return 'border border-solid border-gray-20 rounded-full'
    }
    return ''
  }
}
</script>
