<template>
  <div class="min-h-screen">
    <navbar @logout="logout" />
    <div>
      <router-view class="min-h-screen-no-navbar bg-gray-10" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
import { Action, Getter } from 'vuex-class'

@Component({
  name: 'Dashboard',
  components: {
    Navbar
  }
})
export default class Dashboard extends Vue {
  @Action('logoutUser') private logout!: () => Promise<boolean>
}
</script>
