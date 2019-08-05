<template>
  <div id="dashboard">
    <!-- @DOTO: Replace this with a specific Unauthorized component -->
    <div v-if="!initialized || !isUserLoggedIn">
      <div v-if="!initialized">Loading</div>
      <div v-else>
        Login
        <!-- <s-text p="1" weight="bold">Toto</s-text> -->
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import SText from '@/components/Text.vue'

@Component({
  components: {
    SText
  }
})
export default class Dashboard extends Vue {
  @Action('fetchUser') private fetchUser!: () => Promise<boolean>
  private initialized: boolean = false

  @Getter('isUserLoggedIn')
  private isUserLoggedIn!: boolean

  @Watch('isUserLoggedIn')
  private userLoggedInWatcher () {
    console.log('user logged in has changed value', this.isUserLoggedIn)
    if (!this.isUserLoggedIn) {
      // reset the graphQL client
    }
  }

  created () {
    this.fetchUser().then((isLoggedIn: boolean) => {
      console.log(`user is ${isLoggedIn ? '' : 'not '}logged in`)
      if (isLoggedIn) {
        // initialize graphQL client
      }
      this.initialized = true
    })
  }
}
</script>
