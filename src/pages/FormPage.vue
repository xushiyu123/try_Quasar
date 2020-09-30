<template>
  <div class="q-pa-md"
       style="max-width: 400px">

    <q-form @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md">
      <q-input filled
               v-model="name"
               label="姓名 *"
               lazy-rules
               :rules="[ val => val && val.length > 0 || '请输入姓名']" />
      <!--
      <q-toggle v-model="accept"
                label="I accept the license and terms" /> -->
      <q-select filled
                v-model="sex"
                :options="['男','女']"
                label="性别" />
      <q-input filled
               v-model="birthday"
               label="出生日期"
               lazy-rules
               :rules="[ val => val && val.length > 0 || '请输入出生日期']">
        <template v-slot:append>
          <q-icon name="time" />
        </template>
      </q-input>
      <q-date v-model="birthday"
              title="出生日期"
              today-btn />
      <div>
        <q-btn label="提交"
               type="submit"
               color="primary" />
        <q-btn label="重置"
               type="reset"
               color="primary"
               flat
               class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
  name: 'FormPage',
  data () {
    return {
      name: null,
      sex: null,
      birthday: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.sex = null
      this.birthday = null
      this.accept = false
    }
  }
}
</script>
