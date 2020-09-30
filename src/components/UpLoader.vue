<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-uploader
        style="max-width: 300px"
        url="hfile:///d:/upload/"
        label="文件类型要求 (zip)"
        multiple
        :filter="checkFileType"
        @rejected="onRejected"
      />
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 5px 0;
  padding: 0;
}
</style>
<script>
export default {
  name: 'UpLoader',
  methods: {
    checkFileSize(files) {
      return files.filter(file => file.size < 2048)
    },

    checkFileType(files) {
      return files.filter(file => file.type === '*/zip')
    },

    onRejected(rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} 请将文件打包为rar压缩文件再上传！`
      })
    }
  }
}
</script>
