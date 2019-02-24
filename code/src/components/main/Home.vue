<template>
  <div>
    <el-header>
    <div class="top-inner">
      <el-row type="flex">
        <el-col :span="3" style="text-align: left">
          <a href="javscript:void(0)" class="top-logo">
            <img src="../../../static/images/common/logo-top.png" alt="乐游社区">
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
    <div class="slide">
      <div class="nav-content">
        <el-row>
          <el-col :span="6" @click="goAnchor('#travel-note')">
            <img class="nav-content-icon3" src="../../../static/images/home/icon/strategy.png" height="366" width="673"/>
            <span>游记攻略</span>
          </el-col>
          <el-col :span="6" @click="goAnchor('#travel-note')">
            <img class="nav-content-icon" src="../../../static/images/home/icon/answer.png" height="463" width="463"/>
            <span>你问我答</span>
          </el-col>
          <el-col :span="6" @click="goAnchor('#travel-note')">
            <img class="nav-content-icon3" src="../../../static/images/home/icon/makeFriend.png"/>
            <span>结伴同游</span>
          </el-col>
          <el-col :span="6" @click="goAnchor('#travel-note')">
            <img class="nav-content-icon" src="../../../static/images/home/icon/schedule.png" height="261" width="268"/>
            <span>行程定制</span>
          </el-col>
        </el-row>
        <el-row>
          <span><i class="el-icon-view"></i>&nbsp;去哪里？中国&nbsp;美国&nbsp;墨尔本&nbsp;日本&nbsp;意大利&nbsp;西班牙&nbsp;法国&nbsp;不要犹豫！带上我们，Go Go Go！踏上精彩旅程，我们一起看世界！</span>
        </el-row>
      </div>
      <div class="slide-arrow">
        <div><i class="el-icon-arrow-down"></i></div>
      </div>
    </div>
    <div class="home-main">
      <div id="travel-note">
        <el-row class="preview-header"><el-col>游记攻略</el-col></el-row>
        <el-row class="preview-intro"><el-col>记录旅程美好，了解旅游攻略~</el-col></el-row>
        <el-row>
          <el-col :span="12" class="note-list-div">
            <note-list></note-list>
            <hr>
            <note-list></note-list>
            <hr>
            <note-list></note-list>
            <el-row>
              <a href="#" class="look-more">查看更多</a>
            </el-row>
          </el-col>
          <el-col :span="12" class="strategy-list-div">
            <video-list></video-list>
            <video-list></video-list>
            <video-list></video-list>
            <el-row>
              <a href="#" class="look-more">查看更多</a>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div id="answer">
        <el-row class="preview-header"><el-col>你问我答</el-col></el-row>
        <el-row class="preview-intro"><el-col>有什么问题都可以来问我哦~！</el-col></el-row>
        <el-row>
          <el-col :span="12">
            <answer-list></answer-list>
            <answer-list></answer-list>
          </el-col>
          <el-col :span="12">
            <answer-list></answer-list>
            <answer-list></answer-list>
          </el-col>
        </el-row>
        <el-row>
          <a href="#" class="look-more">查看更多</a>
        </el-row>
      </div>
      <div id="friend">
        <el-row class="preview-header"><el-col>结伴同游</el-col></el-row>
        <el-row class="preview-intro"><el-col>还在愁没人陪我去旅行？一个人旅行酒店太贵，吃得太少，没人给你拍照？</el-col></el-row>
        <el-row>
          <el-col :span="8"><friend-list></friend-list></el-col>
          <el-col :span="8"><friend-list></friend-list></el-col>
          <el-col :span="8"><friend-list></friend-list></el-col>
        </el-row>
      </div>
    </div>

    <el-footer>
      <span>@张嘉怡毕业设计 如有侵权删</span>
    </el-footer>
  </div>
</template>

<script>
import noteList from '@/components/main/noteList'
import videoList from '@/components/main/videoList'
import answerList from '@/components/main/answerList'
import friendList from '@/components/main/friendList'
export default {
  name: 'Home',
  components: {noteList, videoList, answerList, friendList},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    goAnchor (selector) {
      console.log('anchor')
      // let anchor = this.$el.querySelector(selector)
      // document.body.scrollTop = anchor.offsetTop
    }
  }
}
</script>

<style>
  @import "../../assets/css/common.css";
  html,body{
    scroll-behavior: smooth;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  a:hover{
    color: rgb(210, 138, 41);
  }
  /*============图片幻灯片============*/
  .slide{
    position: relative;
    min-height: 600px;
    max-height: calc( 100vh - 60px);
    height: 800px;
    /*min-width: 100vw;*/
    overflow: hidden;
    background-repeat: no-repeat;
    background: url("../../../static/images/home/home1.jpg");
    animation: myslide 20s infinite;
    -webkit-animation: myslide 20s infinite;
  }
  @-webkit-keyframes myslide{
    0%{
      background: url("../../../static/images/home/home1.jpg") no-repeat;
    }
    20%{
      background: url("../../../static/images/home/home2.jpg") no-repeat;
    }
    40%{
      background: url("../../../static/images/home/home3.jpg") no-repeat;
    }
    60%{
      background: url("../../../static/images/home/home4.jpg") no-repeat;
    }
    80%{
      background: url("../../../static/images/home/home5.jpg") no-repeat;
    }
    100%{
      background: url("../../../static/images/home/home1.jpg") no-repeat;
    }
  }
  .slide .nav-content{
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    width: 80%;
    max-width: 1200px;
    min-width: 900px;
    margin: 0 auto;
    padding: 15px;
    background-color: #ffffff;
    font-size: 1.1rem;
    color: #7f7f7f;
    font-weight: bold;
  }
  .slide .nav-content .el-col:not(:last-child){
    border-right: 1px solid #ccc;
  }
  .slide .nav-content .el-col:hover{
    cursor: pointer;
    color: rgb(249, 162, 50);
    background-color: #eaeaea;
    text-shadow:0px 0px 2px #c1c1c1;
  }
  .slide .nav-content .nav-content-icon{
    width: 80px;
    height: auto;
    vertical-align: middle;
  }
  .slide .nav-content .nav-content-icon3{
    height: 75px !important;
    width: auto !important;
    margin-top: 5px;
    vertical-align: middle;
  }
  .slide .nav-content span{
    display: inline-block;
    margin:0 10px;
  }
  @media screen and (max-width: 1080px){
    .slide .nav-content span{
      display: inline-block;
      margin: 10px 0;
      width: 100%;
    }
  }
  /*白色导航栏底部小文字*/
  .slide .nav-content .el-row:nth-child(2){
    text-align: left;
    margin-top: 18px;
    padding-left: 20px;
    font-weight: normal;
    font-size: 0.9rem;
  }
  /*向下箭头*/
  .slide .nav-content .el-row:nth-child(3){
    font-size: 2rem;
  }
  .slide .slide-arrow{
    width: 100%;
    position: absolute;
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    bottom: 8px;
    text-align: center;
  }
  .slide .slide-arrow:hover{
    cursor: pointer;
    text-shadow: 0 0 50px #ffffff;
  }
  /*=============游记推荐列表===============*/
  .home-main{
    padding-top: 30px;
    /*background: linear-gradient(#fff,#fff,#fff, rgba(39, 162, 230, 0.23),#ffd89b);*/
    /*background: linear-gradient(#49a596,#86C3B4,#C8DCC3,#BCD0D1,#F4E301);*/
    /*background: linear-gradient(#fff,#fff, rgba(209, 226, 255, 0.58), rgba(178, 215, 239, 0.34),rgba(178, 215, 239, 0.6), rgba(214, 205, 176,0.6));*/
  }
  .preview-header{
    font-size: 2.2rem;
    min-width: 1040px;
  }
  .preview-intro{
    margin: 5px 0;
    font-size: 0.9rem;
    min-width: 1040px;
  }
  .look-more{
    color: #909090;
    border: 2px solid #909090;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
  }
  .look-more:hover{
    color: rgb(223, 147, 44);
    border-color: rgb(223, 147, 44);
  }
  #travel-note,
  #answer,
  #friend{
    padding-top: 30px;
    margin: 0 auto 30px auto ;
    width: 80%;
    max-width: 1200px;
    min-width: 1040px;
  }
  #travel-note .preview-intro{
    margin-bottom: 20px;
  }
  #travel-note > .el-row:nth-child(3){
    min-width: 1040px;
  }
  #travel-note > .el-row > .note-list-div{
    border-right: 1px solid #ccc;
    padding: 10px 10px 0 0;
  }
  #travel-note > .el-row > .strategy-list-div{
    padding: 10px 0 0 20px;
  }
  #travel-note .note-list-div .look-more{
    margin-top: 9px;
  }
  #travel-note .note-list-div,
  #travel-note .strategy-list-div{
    min-width: 520px;
  }
  /*==============你问我答==============*/
  #answer{
    margin-top: 50px;
    padding: 30px;
    color: #000;
  }
  #answer > .el-row:nth-child(3) > .el-col:first-child{
    border-right: 1px solid #ccc;
  }
  #answer > .el-row:nth-child(3) > .el-col{
    padding: 0 15px;
  }
</style>
