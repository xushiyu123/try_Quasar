<template>
  <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar> -->
          DERI
        </q-toolbar-title>
        <q-btn flat icon="menu" >
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <q-btn-group id="statics" v-for="item in citems" :key= "item">
                <q-btn label="{item}" />
              </q-btn-group>
              <q-separator vertical inset class="q-mx-lg" />
            </div>
          </q-menu>
        </q-btn>
        <right-dialog></right-dialog>
        <!-- <q-btn flat icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-header>
</template>
<script>
import RightDialog from 'components/RIghtDialog'

export default {
  name: 'PublicHeader',
  data () {
    return {
      right: true
    }
  },
  components: {
    RightDialog
  },
  props: {
    citems: {
      type: Array
    }
  },
  methods: {
    toggle (e) {
    }
  }
}
</script>
