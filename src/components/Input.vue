<template>
  <div
    class="bg-transparent"
    :class="[
      `${validationBorder}`,
      `${shake ? 'animate-shake' : ''}`,
      'border',
      'border-solid',
      'rounded-10',
      'shadow-input',
      'h-14',
      'flex',
      'items-center',
      'justify-between',
      'pr-4'
    ]"
  >
    <input
      :class="[
        `${valid === false ? 'text-red-80' : 'text-gray-100'}`,
        'py-4',
        'pl-4',
        'font-body',
        'text-base',
        'bg-transparent',
        'w-full',
        'focus:outline-none',
        'focus:shadow-outline',
        'rounded-10'
      ]"
      :type="type"
      :disabled="disabled"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
      :autocomplete="autocomplete"
    >
    <s-icon
      v-if="!icon && loading"
      icon="spinner"
      color="neutral"
      :loading="loading"
      @click="$emit('icon-click') "
    />
    <s-icon
      v-else-if="icon"
      :loading="loading"
      :icon="icon"
      @click="$emit('icon-click') "
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SIcon from '@/components/Icon.vue'

@Component({
  name: 'SInput',
  components: {
    SIcon
  }
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

  @Prop({
    type: String,
    default: undefined,
    validator: x => ['github-o', 'gitlab-o', 'google-f', 'spinner'].includes(x)
  }) readonly icon!: string | undefined

  @Prop({
    type: Boolean,
    default: false
  }) readonly shake!: boolean

  @Prop({
    type: Boolean,
    default: false
  }) readonly autocomplete!: boolean

  private get validationBorder (): string {
    switch (this.valid) {
      case true:
        return 'border-green-50'
      case false:
        return 'border-red-50'
      case undefined:
      default:
        return 'border-gray-50'
    }
  }
}
</script>
