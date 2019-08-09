<template>
  <div class="flex items-center justify-center">
    <s-arrow
      circled
      left
      prev
      class="absolute top-14 left-0 ml-8 mt-8"
    />
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
import SArrow from '@/components/Arrow.vue'

@Component({
  name: 'Create',
  components: {
    SArrow
  }
})
export default class Create extends Vue {
  @Prop({ type: Boolean, default: false }) private beginner!: boolean
}
</script>
