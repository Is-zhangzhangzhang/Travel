<template>
  <div class="note">
    <!--头像行-->
    <el-row class="header-content">
      <!--作者头像-->
      <div class="header-writer">
        <img src="../../../static/images/common/head-portrait1.jpg"/>
      </div>
      <!--发表时间+作者名字+标签-->
      <div class="header-right">
        <el-row>
          <a href="javascript:viod(0)" class="writer-name">我的名字是娜比</a>
          <div class="tag">
            <el-tag>台湾</el-tag>
            <el-tag type="success">伯克利</el-tag>
            <el-tag type="warning">大提琴</el-tag>
            <el-tag type="danger">演员</el-tag>
          </div>
        </el-row>
        <el-row>
          <span>在2019年2月14日 00:00 发表</span>
          <span style="float: right">最后回复于3小时前</span>
        </el-row>
      </div>
    </el-row>
    <!--内容行-->
    <el-row class="note-content">
      <div>
        <a href="#"><el-tag type="danger">游记</el-tag>&nbsp;2018秋·免签小国藏着大大的能量（塞尔维亚：强烈推荐苏博蒂察！)（多多多多多图）</a>
        <div class="note-artical">
                <span>
                  这次一共坐了三次城际大巴，全部都是到车站随买随走，基本买完票只要等十几分钟就可以出发，除了离开苏博蒂察时等了将近一个小时才发车。
                  贝尔格莱德到诺维萨德：车程大概一个半小时，车票每人770第纳尔。
                  诺维萨德到苏博蒂察：车程不到两小时，车票每人970第纳尔。
                  苏博蒂察到贝尔格莱德：在售票窗口买的时候只顾着买最近的一趟车，但碰巧买到了一辆慢车，绕了非常多小镇子，几乎没怎么走高速路，停了非常多站，用了大概四个小时才到。车票每人1060第纳尔。
                  另外要注意的是，行李箱要额外收费，每件行李60第纳尔
                </span>
        </div>
      </div>
      <div><img src="../../../static/images/home/travelNote/游记预览图片.jpg"/></div>
    </el-row>
    <el-row class="note-feedback">
      <el-col :span="6"><i class="far fa-eye"></i><span>点击量：1000</span></el-col>
      <el-col :span="6"><i class="far fa-star"></i><span>收藏：200</span></el-col>
      <el-col :span="6"><i class="far fa-comment-dots"></i><span>评论：10000</span></el-col>
      <el-col :span="6"><i class="far fa-heart"></i><span>赞：20000</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'travelNote'
}
</script>

<style scoped>
  .note{
    margin-top: 15px;
    /*border-bottom: 1px solid #ccc;*/
    min-width: 500px;
  }
  /*游记攻略 头像*/
  .note .header-content > div,
  .note .note-content > div{
    float: left;
    display: inline-block;
  }
  .note .header-content .header-writer{
    min-width: 75px;
    text-align: left;
  }
  .note .header-content .header-writer img{
    box-shadow: 0 0 3px #ccc;
    border-radius: 50%;
    width: 60px;
    vertical-align: middle;
  }
  .note .header-content .header-writer,
  .note .header-content .header-right,
  .note .header-content .header-right .tag{
    display: inline-block;
  }
  .note .header-content .header-right{
    padding-right: 15px;
    text-align: left;
  }
  .note .header-content .header-right a:hover{
    color: rgb(249, 162, 50);
  }
  .note .header-content .header-right .writer-name{
    font-size: 0.9rem;
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .note .header-content .header-right > .el-row:last-child span{
    display: inline-block;
    margin-top: 5px;
    font-size: 0.8rem;
    color: #8e8e8e;
  }
  .note .header-content .header-right .tag{
    margin-left: 10px;
  }
  /*标题+图片*/
  .note .note-content{
    margin-top: 5px;
  }
  @media screen and (min-width: 1200px){
    .note .note-content > div:first-child{
      width: 70%;
    }
    .note  .note-content > div:last-child{
      width: 30%;
    }
  }
  .note .note-content > div:first-child{
    width: 67%;
  }
  .note  .note-content > div:last-child{
    width: 33%;
    padding-top: 8px;
    max-height: 120px;
    /*overflow: hidden;*/
  }
  .note .note-content > div:first-child a{
    padding: 5px;
    text-align: left;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .note .note-content .note-artical{
    margin-top: 8px;
    text-align: left;
    font-size: 0.9rem;
    line-height: 22px;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .note  .note-content > div:last-child img{
    object-fit: cover;
  }
  .note .note-feedback .el-col{
    /*float: left;*/
    /*list-style-type: none;*/
    font-size: 0.7rem;
    color: #808080;
    margin: 10px 0;
    padding: 5px 0;
  }
  .note .note-feedback .el-col:hover{
    cursor: pointer;
    color: rgb(249, 162, 50);
  }
  .note .note-feedback .el-col:not(:last-child){
    border-right: 1px solid #ccc;
  }
  .note .note-feedback svg{
    margin-right: 3px;
  }
</style>
