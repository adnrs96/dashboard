<template>
  <div id="dashboard">
    <transition-group name="fade">
      <initializer
        v-if="!initialized"
        key="initializer"
        :loaded="initialized"
      />
      <router-view
        v-else
        key="route"
      />
    </transition-group>
  </div>
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

  private async checkRoute () {
    return new Promise(resolve => {
      if (this.lock && (!this.$route.name || !this.$route.name.includes('new'))) {
        this.$router.replace({ name: 'new', params: { beginner: 'true' } }, () => {
          resolve()
        })
      } else {
        resolve()
      }
    })
  }

  private async checkApps () {
    this.initialized = false
    this.lock = await this.appsCount() === 0
    await this.checkRoute()
    this.initialized = true
  }

  private async appsCount (): Promise<number> {
    const { data } = await this.$apollo.query({ query: require('@/plugins/graphql/allAppsCount.gql'), fetchPolicy: 'no-cache' })
    console.log('apps count = ', data)
    return (data && data.allApps && data.allApps.totalCount) || 0
  }

  @Watch('$route')
  private async routeUpdated (newValue: Route, oldValue: Route) {
    if (!oldValue.name || !oldValue.name.includes('new')) {
      await this.checkRoute()
    } else {
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
        await this.checkApps()
      } else {
        this.initialized = true
      }
    })
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
