<template>
<div class="q-pa-md">
<q-list bordered>
  <q-item clickable v-ripple v-for="item in citems" :key= "item">
    <q-item-section>{{item}}
    </q-item-section>
    <q-space ></q-space>
    <q-item-section avatar>
      <q-icon color="primary" name="inbox" />
    </q-item-section>
  </q-item>
</q-list>
</div>
</template>
<script>
export default {
  name: 'List',
  props: {
    citems: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>
