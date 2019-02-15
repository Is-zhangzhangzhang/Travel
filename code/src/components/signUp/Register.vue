<template>
  <div class="main-section">
    <h2>注册乐游社区</h2>
    <el-form :model="regForm">
      <el-form-item prop="phoneNumber"
                    :rules="[{required:true, message: '输入手机号码', trigger:'blur'}]">
        <el-input placeholder="请输入手机号" v-model="regForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item prop="captcha"
                    :rules="[{required:true, message:'请输入图片验证码', trigger:'blur'}]">
        <el-row>
          <el-col :span="15">
            <el-input type="password" placeholder="验证码" v-model="regForm.password"></el-input>
          </el-col>
          <el-col :span="9">
            <img src="../../assets/images/login/captcha.png" height="35"/>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="username"
                    :rules="[{required:true, message:'请输入用户名', trigger:'blur'}]">
        <el-input placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password"
                    :rules="[{required:true, message:'请输入密码', trigger:'blur'}]">
        <el-input placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="password2"
                    :rules="[{required:true, message:'请输入再次输入密码', trigger:'blur'}]">
        <el-input placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" id="reg-btn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      regForm: {
        phoneNumber: '',
        captcha: '',
        username: '',
        password: '',
        password2: ''
      }
    }
  }
}
</script>

<style scoped>
  @import "../../assets/css/signUp.css";
</style>
