<template>
  <div class="min-h-screen">
    <navbar @logout="logout" />
    <div>
      <router-view class="min-h-screen-no-navbar" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'
import { Action, Getter } from 'vuex-class'
import { Route } from 'vue-router'

@Component({
  name: 'Dashboard',
  components: {
    Navbar
  }
})
export default class Dashboard extends Vue {
  @Action('logoutUser') private logout!: () => Promise<boolean>

  mounted () {
    console.log('dashboard mounted')
  }
}
</script>
