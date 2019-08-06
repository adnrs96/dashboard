<template>
  <div class="dashboard-container">
    <apps-table />
    <!-- <s-loader /> -->
    <a
      href="#"
      @click.stop="logoutUser"
    >Logout</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SLoader from '@/components/Loader.vue'
import AppsTable from '@/components/AppsTable.vue'
import axios from 'axios'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    SLoader,
    AppsTable
  }
})
export default class Home extends Vue {
  @Action('logout') private logoutUser!: () => Promise<boolean>
}
</script>
