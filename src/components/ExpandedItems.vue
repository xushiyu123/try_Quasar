<template>
  <div
    class="q-pa-md"
    style="max-width: 350px"
  >
    <q-list
      class="rounded-borders"
      v-for="item in ListItems"
      :key="item.label"
    >
      <q-expansion-item
        expand-separator
        :to="item.path"
        :icon="item.icon"
        :label="item.label"
      >
        <!-- <q-card>
          <q-card-section>
            ##
          </q-card-section>
        </q-card> -->
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: 'ExpandedItems',
  created() {
  },
  data() {
    return {
      ListItems: [{
        label: 'user', icon: 'person', path: '/user_history'
      }, {
        label: 'steps', icon: 'directions', path: '/signal'
      }, {
        label: 'drafts', icon: 'drafts', path: '/plot'
      }]
    }
  }
}
</script>
