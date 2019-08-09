<template>
  <transition-group
    id="dashboard"
    name="fade"
    tag="div"
  >
    <initializer
      v-if="!initialized || !isUserLoggedIn"
      key="initializer"
      :loaded="initialized"
    />
    <router-view
      v-else
      key="route"
      class="min-h-screen bg-gray-10"
    />
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import ApolloPlugin, { MyApolloClient } from '@/plugins/vue-apollo'
import Initializer from '@/views/Initializer.vue'
import { Route, NavigationGuard } from 'vue-router'

@Component({
  name: 'Dashboard',
  components: { Initializer }
})
export default class Dashboard extends Vue {
  @Action('fetchUser') private fetchUser!: () => Promise<boolean>
  private initialized: boolean = false
  private readonly authUrl: string = `${process.env.VUE_APP_API_BASE_URL}auth/gh`
  private lock?: boolean = undefined

  @Getter('isUserLoggedIn')
  private isUserLoggedIn!: boolean

  @Getter('getToken')
  private getGraphQLToken!: string | undefined

  @Getter('getOwnerUuid')
  private getOwnerUuid!: string

  private async checkRoute (): Promise<void> {
    return new Promise(resolve => {
      if (this.lock &&
        (
          (!this.$route.name || !this.$route.name.includes('new')) ||
          (this.$route.name.includes('new') && this.$route.params.beginner !== 'true')
        )
      ) {
        if (this.$route.name && this.$route.name.includes('new')) {
          this.$route.params.beginner = 'true'
          resolve()
        } else {
          this.$router.replace({ name: 'new', params: { beginner: 'true' } }, () => {
            resolve()
          })
        }
      } else {
        resolve()
      }
    })
  }

  private async checkApps (): Promise<void> {
    this.initialized = false
    this.lock = await this.appsCount() === 0
    await this.checkRoute()
    this.initialized = true
  }

  private async appsCount (): Promise<number> {
    const query = await this.$apollo.query({ query: require('@/plugins/graphql/allAppsCount.gql'), fetchPolicy: 'no-cache' })
    return (query && query.data && query.data.allApps && query.data.allApps.totalCount) || 0
  }

  @Watch('$route')
  private async routeUpdated (newValue: Route, oldValue: Route) {
    if (!oldValue.name || !newValue.name || newValue.name.includes('new')) {
      await this.checkRoute()
    } else if (this.lock) {
      await this.checkApps()
    }
  }

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
        const query = await this.$apollo.query({ query: require('@/plugins/graphql/owner.gql'), variables: { uuid: this.getOwnerUuid } })
        await this.checkApps()
      } else {
        this.initialized = true
      }
    })
  }
}
</script>
