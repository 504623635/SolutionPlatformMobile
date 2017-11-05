<template>
  <div class="login">
    <div class="login-flex">
      <div class="login-logo">
        <h1>LOGO</h1>
      </div>
  
      <div class="login-form">
        <group>
          <x-input title=""  placeholder="请输入用户名">
            <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
            <i  class="fa fa-user-o"></i>
            </div>
          </x-input>
        </group>
  
        <group>
            <x-input title=""  placeholder="请输入密码">
              <div slot="label" style="padding-right:10px;display:block;" width="24" height="24">
              <i  class="fa fa-key"></i>
              </div>
            </x-input>
          </group>
  
        <div class="login-submit">
          <x-button type="primary">登录</x-button>
        </div>
      </div>
  
      <div class="login-links">
        <a href=""
           class="vux-1px-r">注册账号</a>
        <a href="">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading, Toast,XInput,Group,XButton } from 'vux'

export default {
  name: 'Login',
  components: {
    Loading,
    Toast,
    XInput,
    Group,
    XButton 
  },
  data () {
    return {
      msg: 'Hello World!',
      user: '',
      pass: '',
      LoginData: {}
    }
  },
  methods: {
    loginSubmit () {
      // this.$vux.loading.show({
      //   text: '登录中...'
      // })
      // setTimeout(() => {
      //   this.$vux.loading.hide()
      //   if (this.user === this.LoginData.UserName && this.pass === this.LoginData.Password) {
      //     this.$vux.toast.show({
      //       text: '登录成功！'
      //     })
      //   } else {
      //     this.$vux.toast.show({
      //       text: '账号或密码错误！',
      //       type: 'cancel',
      //       width: '180px'
      //     })
      //   }
      // }, 2000)
    },
    loadLogin () {
      // this.$http.get('/login')
      //   .then((res) => {
      //     this.LoginData = res.data
      //   })
      //   .catch((res) => {
      //     console.log(res)
      //   })
    }
  },
  created () {
    this.loadLogin()
  }
}
</script>

<style  scoped lang="less">
@import '../../assets/css/theme.less';
.login {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.login-flex {
  width: 100%;
}

.login-logo {
  text-align: center;
  margin-bottom: 100px;
  font-size: 16px;
}

.login-form {
  padding: 0 50px;
}



.login-submit {
  margin-top: 30px;
  text-align: center;
}

.login-submit button {
  width: 100%;
  background-color: @base-color;
  color: #fff;
  line-height: 44px;
  font-size: 16px;
  border: 0;
  border-radius: 44px;
}

.login-links {
  text-align: center;
  margin-top: 20px;
  font-size: 0;
}

.login-links a {
  font-size: 12px;
  padding: 0 10px;
  color: #0076FF
}
</style>
