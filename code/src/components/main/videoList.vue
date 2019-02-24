<template>
  <div class="strategy">
    <el-row>
      <!--左：视频-->
      <el-col :span="10" class="video-wrapping">
        <video src="../../assets/video/sp1.mp4" muted="muted" loop="loop" type="video/mp4"></video>
      </el-col>
      <!--右：标题-->
      <el-col :span="14" class="video-intro">
        <el-row>
          <el-col :span="9">
            <el-tag type="warning">日本</el-tag>
            <el-tag type="danger">樱花</el-tag>
          </el-col>
          <el-col :span="15">
            <span class="time">在2019年2月14日 00:00 发表</span>
          </el-col>
        </el-row>
        <el-row>
          <img src="../../../static/images/common/head-portrait1.jpg"/>
          <a href="#"><el-tag>vlog</el-tag>&nbsp;免签小国藏着大大的能量（塞尔维亚：强烈推荐苏博蒂察！)（多多多多多图）</a>
        </el-row>
        <el-row class="video-artical">
          <span>
                  这次一共坐了三次城际大巴，全部都是到车站随买随走，基本买完票只要等十几分钟就可以出发，除了离开苏博蒂察时等了将近一个小时才发车。
                  贝尔格莱德到诺维萨德：车程大概一个半小时，车票每人770第纳尔。
                  诺维萨德到苏博蒂察：车程不到两小时，车票每人970第纳尔。
                  苏博蒂察到贝尔格莱德：在售票窗口买的时候只顾着买最近的一趟车，但碰巧买到了一辆慢车，绕了非常多小镇子，几乎没怎么走高速路，停了非常多站，用了大概四个小时才到。车票每人1060第纳尔。
                  另外要注意的是，行李箱要额外收费，每件行李60第纳尔
                </span>
        </el-row>
        <el-row class="video-feedback">
          <el-col :span="6"><i class="far fa-eye"></i><span>1000</span></el-col>
          <el-col :span="6"><i class="far fa-star"></i><span>200</span></el-col>
          <el-col :span="6"><i class="far fa-comment-dots"></i><span>10000</span></el-col>
          <el-col :span="6"><i class="far fa-heart"></i><span>20000</span></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'videoList'
}
</script>

<style scoped>
  .strategy{
    position: relative;
    min-width: 500px;
    width: 100%;
    height: auto;
    margin: 28px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 20px 5px #ccc;
}
  /*.strategy:hover:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: block;
    z-index: 100;
    border-radius: 8px;
  }*/
  .strategy .video-wrapping{
    height: 200px;
    overflow: hidden;
    background-color: #000;
  }
  .strategy .video-wrapping video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .strategy .video-intro{
    padding: 10px;
  }
  .strategy .video-intro > .el-row:nth-child(1) .time{
    display: inline-block;
    margin-top: 6px;
    font-size: 0.8rem;
    color: #8e8e8e;
    float: right;
  }
  /*标题+头像*/
  .strategy .video-intro > .el-row:nth-child(2){
    margin-top: 15px;
  }
  .strategy .video-intro > .el-row:nth-child(2) img{
    box-shadow: 0 0 3px #ccc;
    border-radius: 50%;
    width: 60px;
    float: right;
  }
  .strategy .video-intro > .el-row:nth-child(2) img:hover{
    cursor: pointer;
    box-shadow: 0 0 15px rgb(249, 162, 50);
  }
  .strategy .video-intro > .el-row:nth-child(2) a:nth-child(1){
    font-size: 0.8rem;
    display: block;
  }
  .strategy .video-intro > .el-row:nth-child(2) a,
  .strategy .video-artical span{
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical;
    padding: 0 2px;
  }
  .strategy .video-intro > .el-row:nth-child(2) a:hover{
    color: rgb(249, 162, 50);
  }
  .strategy .video-artical span{
    margin-top: 5px;
    font-size: 0.8rem;
  }
  .strategy .video-feedback .el-col:not(:last-child){
    border-right: 1px solid #ccc;
  }
  .strategy .video-feedback svg{
    display: inline-block;
    margin-right: 3px;
  }
  .strategy .video-feedback{
    font-size: 0.7rem;
    color: #808080;
    padding: 5px 0;
    margin-top: 10px;
  }
</style>
