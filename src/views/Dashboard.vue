<template>
  <div class="dashboard-container">
    <navbar />
    <apps-table />
    <a
      href="#"
      @click.stop="logout"
    >Logout</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppsTable from '@/components/AppsTable.vue'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    AppsTable,
    Navbar
  }
})
export default class Home extends Vue {
  @Action('logoutUser') private logout!: () => Promise<boolean>
}
</script>
