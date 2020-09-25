<template>
  <div class="q-pa-md">
    <q-btn
      color="secondary"
      @click="toggle"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    />
  </div>
</template>
<script>
// 在Vue文件之外
import { AppFullscreen } from 'quasar'

// 请求全屏模式：
AppFullscreen.request()
  .then(() => { // v1.5.0+
    // success!
  })
// 退出全屏模式：
AppFullscreen.exit()
  .then(() => { // v1.5.0+
    // success!
  })

export default {
  name: 'FullScreenBtn',
  data () {
    return {}
  },
  methods: {
    toggle (e) {
      const target = document.querySelector('#q-app')
      this.$q.fullscreen.toggle(target)
        .then(() => {
          // success!
        })
        .catch((err) => {
          alert(err)
          // uh, oh, error!!
          // console.error(err)
        })
    }
  }
}
</script>
