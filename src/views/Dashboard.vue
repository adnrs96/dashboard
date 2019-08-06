<template>
  <div class="dashboard-container">
    <apps-table />
    <a
      href="#"
      @click.stop="logoutUser"
    >Logout</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppsTable from '@/components/AppsTable.vue'
import axios from 'axios'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    AppsTable
  }
})
export default class Home extends Vue {
  @Action('logout') private logoutUser!: () => Promise<boolean>
}
</script>
