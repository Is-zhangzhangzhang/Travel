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
            <el-col :span="4">
              <img src="../assets/images/index/login-main.png" alt="乐游社区">
            </el-col>
            <el-col :span="6">
              <div><strong>爱分享，乐旅游</strong></div>
            </el-col>
            <el-col :span="9" :offset="5">
              <el-button type="warning" @click="login_modal">登录</el-button>
              <el-button type="danger" plain>注册</el-button>
            </el-col>
        </el-row>
        <el-row>
          <div class="block">
          <span class="demonstration">
            <el-carousel trigger="click" height="calc( 100vh - 160px )">
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
  methods: {
    login_modal () {
      const h = this.$createElement
      this.$msgbox({
        title: '登录',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '登录中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action})
      })
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
  .main-nav > .el-col:nth-child(2) > div{
    margin-left: 15px;
    padding-left: 15px;
    font-size: 18px;
    text-align: left;
    border-left: 2px solid rgb(249,162,50);
    color: rgb(249,162,50);
  }
  .el-carousel__item h3 {
    color: #9c9898;
    font-size: 18px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  }
  .el-carousel__item{
    background-size: cover;
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(5) {
    background-image: url("../assets/images/index/carousel1.jpg");
  }
  .el-carousel__item:nth-child(6) {
    background-image: url("../assets/images/index/carousel2.jpg");
  }
  .el-carousel__item:nth-child(3) {
    background-image: url("../assets/images/index/carousel5.jpg");
  }
  .el-carousel__item:nth-child(4) {
    background-image: url("../assets/images/index/carousel4.jpg");
  }
  /*@media screen and (max-width: 1000px){*/
    /*.el-carousel__item:nth-child(0) {*/
      /*background-image: url("../assets/images/index/carousel1-small.jpg");*/
    /*}*/
  /*}*/
  .main-nav > .el-col > button{
    font-size: 1.2rem;
  }
  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/
  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>
