<template>
  <ApolloQuery
    :query="require('@/plugins/graphql/ownerMinimal.gql')"
    :variables="{ uuid: getOwnerUuid }"
  >
    <template slot-scope="{ result: { data } }">
      <div v-if="data && data.ownerByUuid && data.ownerByUuid.profileImageUrl">
        <!-- <img
          :src="`${data.ownerByUuid.profileImageUrl}?s=64`"
          class="h-10 w-10 rounded-full border-white border border-solid shadow"
        />
      </div>

      <div v-else> -->
        <img
          src="@/assets/img/avatar.svg"
          class="h-10 w-10 rounded-full border-white border border-solid shadow"
        />
      </div>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  name: 'Navbar'
})
export default class Navbar extends Vue {
  @Getter('getOwnerUuid') private readonly getOwnerUuid!: string | undefined
}
</script>
