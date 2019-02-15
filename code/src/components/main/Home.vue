<template>
  <div>
    <el-header>
    <div class="top-inner">
      <el-row type="flex">
        <el-col :span="3">
          <a href="javscript:void(0)" class="top-logo">
            <img src="@/assets/images/common/logo-top.png" alt="乐游社区">
            <span>乐游</span>
          </a>
        </el-col>
        <!--<el-col :span="3" :offset="18"><a href="javscript:void(0)">关于我们</a></el-col>-->
        <el-col :span="21">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#1e1b29"
            border-bottom="0px"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1" class="top-msg">
              <template slot="title"><i class="el-icon-message"></i></template>
              <el-menu-item index="1-1">评论</el-menu-item>
              <el-menu-item index="1-2">赞</el-menu-item>
            </el-submenu>
            <el-submenu index="2" class="top-setting">
              <template slot="title"><i class="el-icon-setting"></i></template>
              <el-menu-item index="2-1">我的资料</el-menu-item>
              <el-menu-item index="2-2">修改密码</el-menu-item>
            </el-submenu>
            <el-submenu index="3" class="top-new">
              <template slot="title"><i class="el-icon-edit-outline"></i></template>
              <el-menu-item index="3-1">游记攻略</el-menu-item>
              <el-menu-item index="3-2">乐游问答</el-menu-item>
              <el-menu-item index="3-3">结伴同游</el-menu-item>
              <el-menu-item index="3-4">行程定制</el-menu-item>
            </el-submenu>
            <el-submenu index="4" class="top-aboutme">
              <template slot="title">
                <img class="head-protrait" src="../../assets/images/common/head-portrait.jpg"/>
                <span>娜比</span>
              </template>
              <el-menu-item index="4-1">我的首页</el-menu-item>
              <el-menu-item index="4-2">我的问答</el-menu-item>
              <el-menu-item index="4-3">我的帖子</el-menu-item>
              <el-menu-item index="4-4">我的行程</el-menu-item>
              <el-menu-item index="4-5">我的收藏</el-menu-item>
              <el-menu-item index="4-6">我的草稿</el-menu-item>
              <el-menu-item index="4-7">退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </el-header>
    <div class="slide"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  @import "../../assets/css/common.css";
  .el-header .el-menu{
    float:right
  }
  .slide{
    height: calc( 100vh - 60px);
    width: 100vw;
    overflow: hidden;
    background-repeat: no-repeat;
    animation: myslide 10s infinite;
    -webkit-animation: myslide 10s infinite;
  }
  @-webkit-keyframes myslide{
    0%{
      background: url("../../assets/images/home/home3.jpg") no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    50%{
      background: url("../../assets/images/home/home2.jpg") no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    100%{
      background: url("../../assets/images/home/home1.jpg") no-repeat;
      background-attachment: fixed;
      background-size: cover;}
  }
</style>
