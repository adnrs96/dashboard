<template>
  <div class="shadow-card rounded-10 bg-white">
    <div class="w-70 md:w-80 lg:w-87 mt-12 mx-4 md:mx-20 mb-7 flex flex-col items-center">
      <s-text
        head="2"
        weight="semibold"
        class="mb-4"
      >
        Create App
      </s-text>
      <div class="pt-6 pb-5 px-5 mb-6">
        <img
          src="@/assets/img/illustrations/clip-bad-gateaway.svg"
          alt="Create new app illustration"
        >
      </div>
      <s-input
        v-model="name"
        placeholder="Enter an app name"
        class="w-full mb-4"
        :class="[{ 'animate-shake': error }]"
        :valid="error === true ? !error : undefined"
        icon="spinner"
        :loading="loading"
        icon-is-clickable
        @icon-click="generateAwesomeWord()"
      />
      <s-button
        primary
        center
        class="mb-5 w-full"
        @click="create"
      >
        Create your first app
      </s-button>
      <s-text
        p="3"
        weight="medium"
      >
        What's an app?
      </s-text>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import SText from '@/components/Text.vue'
import SButton from '@/components/Button.vue'
import SInput from '@/components/Input.vue'

@Component({
  name: 'App',
  components: {
    SText,
    SButton,
    SInput
  }
})
export default class App extends Vue {
  private loading: boolean = false

  private async generateAwesomeWord () {
    return new Promise(resolve => {
      this.$apollo.query({ query: require('@/plugins/graphql/generateAwesomeWord.gql'), fetchPolicy: 'no-cache' }).then(res => {
        this.name = (res && res.data && res.data.generateAwesomeWord) || ''
        resolve()
      }).catch(() => {
        resolve()
      })
    })
  }

  @Getter('getOwnerUuid')
  private getOwnerUuid!: string

  private name: string = ''
  private error: boolean = false

  @Watch('error')
  private onErrorChange () {
    setTimeout(() => { this.error = false }, 300)
  }

  private async create () {
    return new Promise(resolve => {
      if (!this.loading && !this.error) {
        this.loading = true
        if (this.name.trim().length === 0) {
          this.error = true
          this.loading = false
          resolve()
        } else {
          this.$apollo.mutate({ mutation: require('@/plugins/graphql/createApp.gql'), variables: { data: { app: { ownerUuid: this.getOwnerUuid, name: this.name.trim() } } } }).then(res => {
            this.$router.push({ name: 'dashboard' })
            this.loading = false
            resolve()
          }).catch((err) => {
            if (err && err.graphQLErrors && err.graphQLErrors.length > 0 && err.graphQLErrors[0].constraint === 'apps_owner_uuid_name_key') {
              // name is duplicate
            } else {
              // console.error(err.message)
            }
            this.error = true
            this.loading = false
            resolve()
          })
        }
      } else {
        resolve()
      }
    })
  }
}
</script>
