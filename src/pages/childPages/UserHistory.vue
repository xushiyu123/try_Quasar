<template>
<div>
    <div id="tabs">
    <div class="q-pa-md">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="left"
        class="text-white"
        inline-label
        :breakpoint="300"
      >
        <q-tab class="bg-primary" name="history" icon="lock" label="history" />
        <q-tab class="bg-primary" name="alarms" icon="alarm" label="Alarms" />
        <q-tab class="bg-primary" name="movies" icon="movie" label="Movies" />
      </q-tabs>
      <div class="q-pa-md">
        <q-tab-panels
          v-model="tab"
          animated
          class="text-white text-center"
        >
          <q-tab-panel name="history">
            <data-table :ctitle='title' :ccolumns="soeData.columns" :cdata="soeData.data"></data-table>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <data-table :ctitle='title'></data-table>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <data-table :ctitle='title'></data-table>
          </q-tab-panel>
        </q-tab-panels>
      </div>
  </div>
  </div>
</div>
</template>
<script>
import DataTable from 'components/DataTable'

export default {
  name: 'UserHistory',
  data () {
    return {
      title: '用户历史数据',
      tab: 'history',
      soeData: {
        columns: [{
          name: '序号',
          required: true,
          label: '序号',
          align: 'center',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        }, {
          name: '时间',
          required: true,
          label: '时间',
          align: 'center',
          field: '时间',
          format: val => `${val}`,
          sortable: true
        },
        {
          name: '短地址',
          required: true,
          label: '短地址',
          align: 'center',
          field: '短地址',
          format: val => `${val}`,
          sortable: true
        }, {
          name: '状态',
          required: true,
          label: '状态',
          align: 'center',
          field: '状态',
          format: val => `${val}`,
          sortable: true
        }],
        data: [{
          name: '2', 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1'
        },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' },
        { 序号: 1, 时间: '1600833843.174', 短地址: '测试', 状态: '0 -> 1' }
        ]
      }
    }
  },
  components: {
    DataTable
  }
}
// 取数据，绑定
</script>
