<template>
  <component
    :is="tag"
    :class="[`text-${size}`, `text-${color}`, `font-${this.weight === 'regular' ? 'normal' : this.weight}`, `leading-${lineHeight}`, 'font-body']"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SText'
})
export default class Text extends Vue {
  @Prop({ type: Boolean, default: false }) readonly span!: boolean
  @Prop({ type: Boolean, default: false }) readonly li!: boolean
  @Prop({
    type: String,
    default: undefined,
    validator: v => ['1', '2', '3', '4', '5', '6'].includes(v)
  }) readonly head!: string | undefined

  @Prop({
    type: String,
    default: undefined,
    validator: v => ['1', '2'].includes(v)
  }) readonly p!: string | undefined

  // font-normal font-medium font-semibold font-bold
  @Prop({
    type: String,
    default: 'regular',
    validator: v => ['regular', 'medium', 'semibold', 'bold'].includes(v)
  }) readonly weight!: string

  @Prop({
    type: String,
    default: 'black',
    validator: x => ['white', 'black'].includes(x)
  }) readonly color !: string

  get tag (): string {
    return this.span ? 'span' : this.li ? 'li' : this.head ? `h${this.head}` : 'p'
  }

  get size (): string {
    // text-5xl text-2xl text-lg text-base text-sm text-s text-xs text-2xs
    return this.head === '1' ? '5xl' : this.head === '2' ? '2xl' : this.p === '1' ? 'lg' : this.p === '2' ? 'base' : this.p === '3' ? 'sm' : this.p === '4' ? 's' : this.p === '5' ? 'xs' : this.p === '6' ? '2xs' : 'base'
  }

  get lineHeight (): string {
    // leading-60 leading-34 leading-27 leading-26 leading-24 leading-22 leading-13 leading-18 leading-15
    switch (this.head) {
      case '1':
        return '60'
      case '2':
        return '34'
    }
    switch (this.p) {
      case '1':
        return '27'
      case '2':
        return this.weight === 'regular' ? '26' : '24'
      case '3':
        return '22'
      case '4':
        return '13'
      case '5':
        return '18'
      case '6':
        return '15'
      default:
        return ''
    }
  }
}
</script>
