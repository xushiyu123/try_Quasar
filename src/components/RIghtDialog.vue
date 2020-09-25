<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn flat icon="keyboard_arrow_right"  @click="open('right')" />
    <q-dialog v-model="dialog" :position="position">
      <q-card>
        <!-- <q-linear-progress :value="0.6" color="pink" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
        </q-card-section> -->
        <Konb></Konb>
      </q-card>
    </q-dialog>
  </div>
</template>
<style scoped>
</style>
<script>
import Konb from 'components/Konb'
export default {
  name: 'RightDialog',
  data () {
    return {
      dialog: false,
      position: 'top'
    }
  },
  components: {
    Konb
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    }
  }
}
</script>
