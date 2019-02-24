<template>
  <div class="note-page">
    <el-header>
      <div class="top-inner">
        <el-row type="flex">
          <el-col :span="3">
            <a href="javscript:void(0)" class="top-logo">
              <img src="../../../static/images/common/logo-top.png" alt="乐游社区">
              <span>乐游</span>
            </a>
          </el-col>
          <el-col :offset="13" :span="8">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
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
                  <img class="head-protrait" src="../../../static/images/common/head-portrait1.jpg"/>
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
    <div class="note-top-title">
        <el-row>
          <el-col :span="8"><h1>游记 | 攻略 | vlog</h1></el-col>
          <el-col :span="6">
            <el-button plain type="primary">我的帖子</el-button>
            <el-button icon="el-icon-edit" type="warning">发新帖</el-button>
          </el-col>
        </el-row>
      </div>
    <div class="note-carousel-card">
      <carousel-card></carousel-card>
    </div>
    <el-main>
      <el-tabs tab-position="top">
        <el-tab-pane label="游记">
          <note-list></note-list>
          <note-list></note-list>
          <note-list></note-list>
          <note-list></note-list>
        </el-tab-pane>
        <el-tab-pane label="攻略">
          <note-list></note-list>
          <note-list></note-list>
          <note-list></note-list>
          <note-list></note-list>
        </el-tab-pane>
        <el-tab-pane label="vlog"></el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>

<script>
import carouselCard from '@/components/common/CarouselCard'
import noteList from '@/components/main/noteList'
export default {
  name: 'Note',
  components: {carouselCard, noteList}
}
</script>

<style>
  @import "../../assets/css/common.css";
  /*==========标题：游记攻略+button：发新帖 我的帖子=======*/
  .note-page .note-top-title{
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
  .note-page .note-top-title>.el-row{
    margin: 0 auto;
    min-width: 980px;
    max-width: 80%;
    padding: 0;
  }
  /*游记攻略*/
  .note-page h1{
    text-align: left;
    color: rgb(231, 125, 3);
    padding-left: 0;
  }
  /*button：发新帖 我的帖子*/
  .note-page .note-top-title > .el-row > .el-col:nth-child(2){
    min-width: 250px;
    float: right;
  }
  .note-page .note-top-title button{
    font-size: 1rem;
  }
  /*===========游记内容列表=============*/
  .note-page .el-main{
    width: 80%;
    min-width: 900px;
    max-width: 1080px;
    margin: 0 auto;
  }
  .el-tabs a{
    text-decoration: none;
    color: #000;
  }
  .el-tabs a:hover{
    color: rgb(249, 162, 50);
  }
  /*修改tabs标签页颜色*/
  .el-tabs__active-bar{
    background-color: rgb(231, 125, 3);
    width: 40px !important;
  }
  .el-tabs__item{
    color: #686a6e;
    font-size: 1.2rem;
  }
  .el-tabs__item:hover{
    color: rgb(231, 125, 3);
  }
  .el-tabs__item.is-active{
    color: rgb(231, 125, 3);
  }
  .el-tabs__nav{
    font-size: 1.2rem;
  }
  /*修改noteList css*/
  .note .note-content .note-artical {
    line-clamp: 3 !important;
    -webkit-line-clamp: 3 !important;
  }
  @media screen and (min-width: 1220px){
    .note .note-content .note-artical {
      line-clamp: 4 !important;
      -webkit-line-clamp: 4 !important;
    }
  }
  .note  .note-content > div:first-child{
    width: calc(100% - 250px) !important;
  }
  .note  .note-content > div:last-child{
    width: 250px !important;
    max-height: 150px !important;
    overflow: hidden;
  }
  .note  .note-content > div:last-child img{
    width: 210px;
  }
</style>
