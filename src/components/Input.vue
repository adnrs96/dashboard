<template>
  <div>
    <input
      class="bg-white border border-solid rounded-10 shadow-input h-14 py-4 pl-4 font-body text-base text-gray-100"
      :class="[`${validation}`]"
      :type="type"
      :disabled="disabled"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'SInput'
})
export default class Input extends Vue {
  @Prop({
    type: Boolean,
    default: undefined
  }) readonly disabled!: boolean | undefined

  @Prop({
    type: String,
    default: 'text',
    validator: x => ['text', 'email', 'password', 'tel', 'number'].includes(x)
  }) readonly type!: string

  @Prop({
    type: String,
    default: ''
  }) readonly value!: string

  @Prop({
    type: String,
    default: undefined
  }) readonly placeholder!: string | undefined

  @Prop({
    type: String,
    default: undefined
  }) readonly name!: string | undefined

  @Prop({
    type: Boolean,
    default: false
  }) readonly required!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly readonly!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly loading!: boolean

  @Prop({
    type: Boolean,
    default: undefined
  }) readonly valid!: boolean

  private get validation (): string {
    switch (this.valid) {
      case true:
        return 'border-green-50'
      case false:
        return 'border-red-50 text-red-80'
      case undefined:
      default:
        return 'border-gray-50'
    }
  }
}
</script>
