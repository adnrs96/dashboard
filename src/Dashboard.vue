<template>
  <div id="dashboard">
    <!-- @DOTO: Replace this with a specific Unauthorized component -->
    <transition-group name="fade">
      <initializer
        v-if="!initialized || !isUserLoggedIn"
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

@Component({
  name: 'Dashboard',
  components: { Initializer }
})
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
