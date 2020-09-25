<template>
  <div id="tabs">
    <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs
        v-model="tab"
        align='left'
        class="bg-primary text-white shadow-2"
        inline-label
        infinite
      >
        <q-tab name="history" icon="lock" label="history" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class=" text-white text-center"
        >
          <q-tab-panel name="history">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    citems: {
      type: Array
    }
  },
  data () {
    return {
      tab: true
    }
  }
}
</script>
