<template>
  <!-- 登录页面 -->
  <q-layout id="app"
            view="HHH lpR FFF">
    <q-header reveal
              elevated>
      <q-toolbar>
        <q-toolbar-title>DERI</q-toolbar-title>
      </q-toolbar>
      <div class="headImg"></div>
    </q-header>
    <q-page-container>
      <div class="main q-pa-md">
        <div class="main-title row justify-center">
          高级微网控制器
        </div>
        <div class="form row justify-center">
          <q-card class=" col-2">
            <q-card-section class="bg-primary text-white">
              <div class="form-title text-center">登 录</div>
            </q-card-section>
            <q-card-section>
              <q-form>
                <div class="form-item">
                  <q-input filled
                           clearable
                           square
                           outlined
                           placeholder="请输入用户名"
                           clear-icon="close"
                           v-model="username"
                           label='用户名'
                           stack-label
                           error-message="用户名不能为空"
                           :rules="[val => val.length > 0]">
                    <template v-slot:prepend>
                      <q-icon name="account_box" />
                    </template>
                    <!-- <template v-slot:error>
                      <div v-if="username == ''">
                        用户名不能为空
                      </div>
                    </template> -->
                  </q-input>
                </div>
                <div class="form-item">
                  <q-input v-model="password"
                           filled
                           square
                           outlined
                           placeholder="请输入密码"
                           :type="isPwd ? 'password' : 'text'"
                           label="密码"
                           error-message="密码不能为空"
                           :rules="[val => val.length > 0]">
                    <template v-slot:append>
                      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd" />
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </div>
                <div class="form-item">
                  <router-link to="/SignUp">注册</router-link>
                </div>
                <div class="form-item">
                  <q-btn class="full-width"
                         label="登录"
                         type="submit"
                         color="primary" />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page-container>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">南京徳睿能源研究院有限公司 DERI Energy Research Institute</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<style lang="scss" scoped>
q-header{
  line-height: 60px;
}

q-footer{
  opacity: 0.5;
}

.main {
  margin-top: 5%;

  .main-title{
    font-weight: 700;
    font-size: 28px;
    color: white;
    padding-bottom: 30px;
  }

  .form-title{
    font-size: 16px;
  }

  .form-item{
    padding: 10px 0;
    font-size: 14px;

    a{
      float: right;
      color: #551A8B;
      padding-bottom: 10px;
    }
  }
}

</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    // 登录
    // logIn(){

    // }
  }
}
</script>
