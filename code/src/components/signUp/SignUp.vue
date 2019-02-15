<template>
  <div class="wrapping">
      <div class="container">
          <div class="top-logo">
            <img src="../../assets/images/login/login.png"/>
            <span>·登录</span>
          </div>
          <login v-if="show" @toRegister="changeShowValue"></login>
          <register v-else></register>
      </div>
  </div>
</template>
<script>
import login from '@/components/signUp/Login'
import register from '@/components/signUp/Register'
export default {
  name: 'SignUp',
  components: {login, register},
  mounted () {
    let flag = this.$route.params.flag
    if (!isNaN(flag)) {
      this.show = flag
    }
  },
  data () {
    return {
      show: 1 // 1登录，0注册
    }
  },
  methods: {
    //  子组件Login 触发的自定义事件，修改show值跳转到注册
    changeShowValue () {
      this.show = 0
    }
  }
}
</script>

<style scoped>
  .wrapping{
    min-width: 100vw;
    min-height: 100vh;
    background-image: url("../../assets/images/login/login-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .container{
    width: 380px;
    /*background-color: #fff;*/
    margin: 0 auto;
    padding-top: 100px;
  }
  .container .top-logo > img{
    height:65px;
    vertical-align: middle;
  }
  .container .top-logo > span{
    color: rgb(249,162,50);
    font-size: 2rem;
    font-weight: bold;
  }
  .container .main-section{
    margin-top:45px;
    padding-top: 20px;
    background-color: #fff;
  }
</style>
