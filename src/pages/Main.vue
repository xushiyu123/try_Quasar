<template>
  <q-layout id="app" view="hHh lpR fFf">
    <public-header :citems="{menuItems}"></public-header>
    <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="280"
        :breakpoint="100"
        side="left"
        content-class="bg-grey-3"
      >
    <!-- 左侧列表 -->
    <expanded-items></expanded-items>
    </q-drawer>
    <q-page-container>
      <!-- table -->
      <!-- <Table></Table> -->
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>
<style scoped>
</style>
<script>
// import Table from 'components/Table'
import ExpandedItems from 'components/ExpandedItems'
import PublicHeader from 'components/PublicHeader'
import { getUserRouters } from '../service'

export default {
  name: 'MainPage',
  data () {
    return {
      drawer: false,
      miniState: true,
      left: false,
      menuItems: []
      // right: false
    }
  },
  components: {
    ExpandedItems,
    PublicHeader
  },
  created () {
    this.GeData()
  },
  methods: {
    GeData () {
      var param = {}
      getUserRouters(JSON.stringify(param), false).then(res => {
        if (res.data.status === 'ok') {
          console.log(res)
          if (res.data.data.length) {
            this.data = res.data.data
          } else {

          }
        }
      })
    }
  }
}
</script>
