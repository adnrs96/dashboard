<template>
  <div class="apps-container">
    <ApolloQuery :query="require('@/plugins/graphql/allApps.gql')">
      <template slot-scope="{ result: { error, data }, isLoading }">
        <!-- Loading -->
        <div
          v-if="isLoading"
          class="loading apollo"
        >Loading...</div>

        <!-- Error -->
        <div
          v-else-if="error"
          class="error apollo"
        >An error occured</div>

        <!-- Result -->
        <div
          v-else-if="data && data.allApps && data.allApps.nodes && data.allApps.nodes.length > 0"
          class="result apollo"
        >{{ data.allApps.nodes }}</div>

        <!-- No result -->
        <div
          v-else
          class="no-result apollo"
        >No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppsTable'
})
export default class AppsTable extends Vue { }
</script>
