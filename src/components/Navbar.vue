<template>
  <nav class="flex items-center flex-no-wrap bg-white px-6 h-14 shadow-navbar border-solid border-b border-gray-20">
    <div class="flex items-center mr-6">
      <s-logo
        icon
        class="h-6 w-6"
      />
      <s-logo
        variant="light"
        class="ml-7/8 mt-1 h-5 w-auto"
      />
    </div>
    <div class="flex items-center flex-grow">
      <div class="text-sm flex-grow" />
      <avatar />
    </div>
  </nav>
</template>

<script lang="ts">
import Avatar from '@/components/Avatar.vue'
import SLogo from '@/components/Logo.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Navbar',
  components: {
    Avatar,
    SLogo
  }
})
export default class Navbar extends Vue { }
</script>
