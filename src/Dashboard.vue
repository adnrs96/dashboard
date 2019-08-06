<template>
  <div id="dashboard">
    <!-- @DOTO: Replace this with a specific Unauthorized component -->
    <div v-if="!initialized || !isUserLoggedIn">
      <div v-if="!initialized">Loading</div>
      <div v-else>Login</div>
      <s-button icon="github-o" black>Continue with GitHub</s-button>
      <s-button icon="google-f" white />
      <s-button icon="gitlab-o" />
      <s-button>Toto</s-button>
      <s-button white>Titi</s-button>
      <s-button black>Tata</s-button>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import SButton from '@/components/Button.vue'

@Component({
  components: {
    SButton
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
