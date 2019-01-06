<template>
  <div>
    <el-container>
      <el-header>
        <div class="top-inner">
          <el-row type="flex">
            <el-col :span="3">
              <a href="javscript:void(0)" class="top-logo">
                <img src="../assets/images/index/logo-top.png"  alt="乐游社区">
                <span>乐游</span>
              </a>
            </el-col>
            <el-col :span="3" :offset="18"><a href="javscript:void(0)">关于我们</a></el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <el-row gutter="30" type="flex" align="middle" class="main-nav">
            <el-col :span="3"><img src="../assets/images/index/login-main.png" alt="乐游社区"></el-col>
            <el-col :span="9" :offset="12">
              <el-button type="warning" size="large">登录</el-button>
              <el-button type="danger" plain size="large">注册</el-button>
            </el-col>
        </el-row>
        <el-row>
          <div class="block">
          <span class="demonstration">
            <el-carousel trigger="click" height="calc( 100vh - 140px )">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </span>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-main,el-header{
    margin: 0;
    padding: 0;
  }
  .el-header{
    background-color: #1e1b29;
    color: #fff;
  }
  .top-inner{
    margin: 0 auto;
    min-width: 800px;
    max-width: 80%;
  }
  .top-inner a{
    text-decoration: none;
    color: #fff;
    margin: 5px 0;
    display: inline-block;
    line-height: 50px;
  }
  .top-logo > img{
    height: 50px;
    width: auto;
    float: left;
  }
  .top-logo > span{
    font-size: 1.5rem;
    float: left;
  }
  .top-inner a:hover{
    text-shadow: 0 0 8px #fff;
  }
  .main-nav{
    margin: 0 auto !important;
    height: 100px;
    min-width: 800px;
    width: 50%;
    background-color: rgba(255,255,255,.9);
  }
  .main-nav > .el-col > img{
    height: 70px;
    margin: 15px 0;
  }
  .el-carousel__item:nth-child(n) {
    background-size: cover;
    background-image: url("../assets/images/index/carousel1.jpg");
  }
  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/
  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>
