<template>
  <ApolloQuery
    :query="require('@/plugins/graphql/ownerMinimal.gql')"
    :variables="{ uuid: getOwnerUuid }"
  >
    <template slot-scope="{ result: { data } }">
      <div
        class="w-10"
        @click="$emit('click')"
      >
        <img
          v-if="data && data.ownerByUuid && data.ownerByUuid.profileImageUrl"
          :src="`${data.ownerByUuid.profileImageUrl}?s=64`"
          alt="User's github avatar"
          class="h-10 w-10 rounded-full border-white border border-solid shadow-avatar"
        >
        <img
          v-else
          src="@/assets/img/avatar.svg"
          alt="User's provided avatar"
          class="h-10 w-10 rounded-full border-white border border-solid shadow-avatar"
        >
      </div>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  name: 'Avatar'
})
export default class Avatar extends Vue {
  @Getter('getOwnerUuid') private readonly getOwnerUuid!: string | undefined
}
</script>
