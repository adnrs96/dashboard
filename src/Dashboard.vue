<template>
  <div id="dashboard">
    <!-- @DOTO: Replace this with a specific Unauthorized component -->
    <div v-if="!initialized || !isUserLoggedIn">
      <div v-if="!initialized">Loading</div>
      <div v-else>
        <a :href="authUrl">Login</a>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { onLogin, onLogout, MyApolloClient } from '@/plugins/vue-apollo'

@Component({})
export default class Dashboard extends Vue {
  @Action('fetchUser') private fetchUser!: () => Promise<boolean>
  private initialized: boolean = false
  private readonly authUrl: string = `${process.env.VUE_APP_API_BASE_URL}auth/gh`

  @Getter('isUserLoggedIn')
  private isUserLoggedIn!: boolean

  @Getter('getToken')
  private getGraphQLToken!: string | undefined

  @Watch('isUserLoggedIn')
  private userLoggedInWatcher () {
    console.log('user logged in has changed value', this.isUserLoggedIn)
    if (!this.isUserLoggedIn) {
      this.initialized = false
      onLogout(this.$apollo.provider.defaultClient as MyApolloClient<unknown>)
    }
  }

  created () {
    this.fetchUser().then((isLoggedIn: boolean) => {
      console.log(`user is ${isLoggedIn ? '' : 'not '}logged in`)
      if (isLoggedIn) {
        onLogin(this.$apollo.provider.defaultClient as MyApolloClient<unknown>, this.getGraphQLToken || '')
      }
      this.initialized = true
    })
  }
}
</script>
