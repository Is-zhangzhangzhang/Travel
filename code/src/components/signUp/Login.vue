<template>
  <div class="main-section">
    <h2>登录乐游社区</h2>
    <el-form :model="lgForm">
      <el-form-item prop="username"
                    :rules="[{required:true, message: '输入不能为空', trigger:'blur'}]">
        <el-input placeholder="手机号/用户名" v-model="lgForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password"
                    :rules="[{required:true, message:'密码不能为空', trigger:'blur'}]">
        <el-input type="password" placeholder="密码" v-model="lgForm.password"></el-input>
        <a href="javascript:void(0)" id="lg-a-forget">忘记登录密码？</a>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" id="lg-btn">登录</el-button>
        <div class="lg-div-reg">
          <span>没有乐游账号？<a href="javascript:void(0)" @click="lgToReg">立即注册</a></span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      lgForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    lgToReg () {
      this.$emit('toRegister')
    }
  }
}
</script>

<style scoped>
  @import "../../assets/css/signUp.css";
</style>
