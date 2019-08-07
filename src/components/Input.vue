<template>
  <div></div>
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
}
</script>
