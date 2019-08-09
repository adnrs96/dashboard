<template>
  <ApolloQuery
    :query="require('@/plugins/graphql/owner.gql')"
    :variables="{ uuid: getOwnerUuid }"
  >
    <template slot-scope="{ result: { data } }">
      <template v-if="data && data.ownerByUuid">
        <slot :owner="data.ownerByUuid" />
      </template>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  name: 'Owner'
})
export default class Owner extends Vue {
  @Getter('getOwnerUuid') private readonly getOwnerUuid!: string | undefined
}
</script>
