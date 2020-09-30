<template>
  <div class="q-pa-md">
    <q-btn label="重置"
           push
           color="white"
           text-color="primary"
           @click="step = 1"
           class="q-mb-md" />

    <q-stepper v-model="step"
               header-nav
               ref="stepper"
               color="primary"
               animated>
      <q-step :name="1"
              title="填写表单"
              icon="settings"
              caption="必填"
              :done="step > 1"
              :header-nav="step > 1">
        <form-page></form-page>
        <q-stepper-navigation>
          <q-btn @click="
              () => {
                done1 = true
                step = 2
              }
            "
                 color="primary"
                 icon-right="keyboard_arrow_right"
                 label="下一步" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2"
              title="上传文件"
              caption="必填"
              icon="cload_upload"
              :done="step > 2"
              :header-nav="step > 2">
        <Uploader></Uploader>
        <q-stepper-navigation>
          <q-btn @click="
              () => {
                done2 = true
                step = 3
              }
            "
                 color="primary"
                 icon-right="keyboard_arrow_right"
                 label="下一步" />
          <q-btn flat
                 @click="step = 1"
                 color="primary"
                 label="上一步"
                 icon="keyboard_arrow_left"
                 class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3"
              title="Create an ad"
              icon="add_comment"
              caption="必填"
              :header-nav="step > 3">
        step 3
        <q-stepper-navigation>
          <q-btn class="bg-primary text-white"
                 @click="done3 = true"
                 label="完成" />
          <q-btn flat
                 @click="step = 2"
                 label="上一步"
                 color="primary"
                 icon="keyboard_arrow_left" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>
<script>
import Uploader from 'components/UpLoader'
import FormPage from 'pages/FormPage'

export default {
  name: 'StepperItems',
  data () {
    return {
      step: 1
    }
  },
  components: {
    Uploader,
    FormPage
  }
}
</script>
