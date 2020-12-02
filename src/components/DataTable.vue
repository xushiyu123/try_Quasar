<template>
  <div class="q-pa-md">
    <q-table class="my-sticky-header-column-table"
             :title="ctitle"
             :data="cdata"
             :columns="ccolumns"
             :filter="filter">
      <template v-slot:top-right>
        <q-input borderless
                 dense
                 debounce="300"
                 v-model="filter"
                 placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <!-- {{props.row}} -->
        <!-- {{props.cols}} -->
        <q-tr :props="props">
          <q-td v-for="(val,key) in props.row"
                :key="key">
            {{val}}
            <q-popup-edit v-model="props.row"
                          buttons>
              <q-input type="text"
                       v-model="props.row[key]"
                       dense
                       autofocus
                       counter />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<style lang="sass">
.my-sticky-column-table
  /* specifying max-width so the example can
   highlight the sticky column on any browser window */

  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
<script>
// import { getUserRouters } from '../service'

export default {
  name: 'DataTable',
  props: {
    ctitle: {
      type: String,
      default: ''
    },
    cdata: {
      type: Array
    },
    ccolumns: {
      type: Array
    }
  },
  data () {
    return {
      filter: ''
    }
  }
}
</script>
