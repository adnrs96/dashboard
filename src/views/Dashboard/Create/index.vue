<template>
  <div class="flex items-center justify-center">
    <p v-if="beginner">
      Welcome
    </p>
    <router-view />
    <footer v-if="beginner">
      Footer
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Create'
})
export default class Create extends Vue {
  @Prop({ type: Boolean, default: false }) private beginner!: boolean
}
</script>
