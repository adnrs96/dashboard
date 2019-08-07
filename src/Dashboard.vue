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
import ApolloPlugin, { MyApolloClient } from '@/plugins/vue-apollo'

@Component({ name: 'Dashboard' })
export default class Dashboard extends Vue {
  @Action('fetchUser') private fetchUser!: () => Promise<boolean>
  private initialized: boolean = false
  private readonly authUrl: string = `${process.env.VUE_APP_API_BASE_URL}auth/gh`

  @Getter('isUserLoggedIn')
  private isUserLoggedIn!: boolean

  @Getter('getToken')
  private getGraphQLToken!: string | undefined

  @Watch('isUserLoggedIn')
  private async userLoggedInWatcher () {
    if (!this.isUserLoggedIn) {
      this.initialized = false
      const client = this.$apollo && this.$apollo.provider && this.$apollo.provider.defaultClient
      await ApolloPlugin.onLogout(client as MyApolloClient<unknown>)
      this.initialized = true
    }
  }

  created () {
    this.fetchUser().then(async (isLoggedIn: boolean) => {
      if (isLoggedIn) {
        const client = this.$apollo && this.$apollo.provider && this.$apollo.provider.defaultClient
        await ApolloPlugin.onLogin(client as MyApolloClient<unknown>, this.getGraphQLToken)
      }
      this.initialized = true
    })
  }
}
</script>
