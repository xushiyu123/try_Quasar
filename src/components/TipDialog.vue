<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn flat icon="visibility" @click="open('center')" />
    <q-dialog v-model="dialog" :maximized="maximizedToggle" persistent>
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip
              v-if="maximizedToggle"
              content-class="bg-white text-primary"
              >最小化</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip
              v-if="!maximizedToggle"
              content-class="bg-white text-primary"
              >最大化</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">关闭</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="bg-grey">
          <data-table
            :ctitle="title"
            :ccolumns="soeData.columns"
            :cdata="soeData.data"
          ></data-table>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 2px;
}
</style>
<script>
import DataTable from 'components/DataTable'

export default {
  name: 'TipDialog',
  data () {
    return {
      dialog: false,
      maximizedToggle: false,
      title: '对话框',
      soeData: {
        columns: [
          {
            name: '序号',
            required: true,
            label: '序号',
            align: 'center',
            field: '序号',
            format: (val) => `${val}`,
            sortable: true
          },
          {
            name: '时间',
            required: true,
            label: '时间',
            align: 'center',
            field: '时间',
            format: (val) => `${val}`,
            sortable: true
          },
          {
            name: '短地址',
            required: true,
            label: '短地址',
            align: 'center',
            field: '短地址',
            format: (val) => `${val}`,
            sortable: true
          },
          {
            name: '状态',
            required: true,
            label: '状态',
            align: 'center',
            field: '状态',
            format: (val) => `${val}`,
            sortable: true
          }
        ],
        data: [
          {
            序号: 1,
            时间: '1600833843.174',
            短地址: '测试',
            状态: '0 -> 1'
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
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    }
  }
}
</script>
