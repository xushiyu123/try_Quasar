<template>
  <div class="q-pa-md flex flex-center">
    <q-knob
      v-model="value"
      show-value
      size="40px"
      :thickness="0.22"
      color="orange"
      track-color="grey-3"
      class="q-ma-md"
    />
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Konb',
  data () {
    return {
      value: this.value
    }
  }
}
</script>
