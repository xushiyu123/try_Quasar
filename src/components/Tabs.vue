<template>
  <div id="tabs">
    <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails"></q-tab>
        <q-tab name="alarms" icon="alarm" label="Alarms"></q-tab>
        <q-tab name="movies" icon="movie" label="Movies"></q-tab>
        <q-tab name="photos" icon="photo" label="Photos"></q-tab>
        <q-tab name="videos" icon="slow_motion_video" label="Videos"></q-tab>
        <q-tab name="addressbook" icon="people" label="Address Book"></q-tab>
      </q-tabs>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
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
