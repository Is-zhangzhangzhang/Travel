<template>
    <div class="answer-div">
      <el-row>
        <img src="../../../static/images/common/head-portrait1.jpg"/>
        <a href="javascript(0)" class="writer-name">娜比</a>
        <small>提了一个问题·2019-2-14-00:00</small>
      </el-row>
      <el-row class="answer-artical">
        <a href="javascript:void(0)">纽约自然博物馆门票还能认捐吗？</a>
        <span class="mul-ellipsis">明天就要过去啦！不知道网购哪种上网卡合适？携程上出售的北
          京机场现提的上网卡时间上已经来不及、请问还有其它推荐吗？只上网、不
          打电话、上网信号要好。大概使用12天携程上出售的北京机场现提的上网卡时
          间上已经来不及、请问还有其它推荐吗？</span>
      </el-row>
      <el-row class="answer-feedback">
        <div>
          <small><i class="far fa-eye"></i>1000个浏览</small>
          <small><i class="far fa-heart"></i>20000个点赞</small>
        </div>
        <div>
          <small>最新回答</small>
          <a href="javascript(0)" class="writer-name">小可爱</a>
          <img src="../../../static/images/common/head-portrait2.jpg"/>
        </div>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'answerList'
}
</script>

<style scoped>
  .answer-div{
    padding: 5px;
    margin: 30px 0;
    text-align: left;
  }
  .answer-div:hover{
    box-shadow: 0 0 10px #f4fff0;
    background-color: rgba(255, 205, 93, 0.11);
  }
  .ellipsis{
    font-size: 0.9rem;
    max-width: 180px;
  }
  svg{
    margin-right: 3px;
  }
/*==========头像============*/
  .answer-div img{
    border-radius: 50%;
    width: 50px;
    vertical-align: middle;
  }
  .answer-div img:hover{
    box-shadow: 0 0 10px #fff;
  }
  .answer-div .writer-name,
  .answer-div .answer-artical span{
    font-size: 0.9rem;
  }
  .answer-div small{
    color: #8e8e8e;
  }
  .answer-div .answer-artical a{
    display: block;
    margin: 10px 0;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .answer-div .answer-artical span{
    color: #666666;
  }
  .answer-div .answer-feedback{
    margin-top: 20px;
  }
  .answer-div .answer-feedback img{
    width: 40px;
  }
  .answer-div .answer-feedback div:first-child{
    float: left;
    margin: 10px 0;
  }
  .answer-div .answer-feedback div small{
    padding: 5px;
  }
  .answer-div .answer-feedback div:first-child small:first-child{
    border-right: 1px solid #ccc;
  }
  .answer-div .answer-feedback div:last-child{
    float: right;
  }
</style>
