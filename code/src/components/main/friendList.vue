<template>
  <el-row class="friend-div">
    <div class="friend-img-div" @mouseenter="detailShow = true"
         @mouseleave="detailShow = false">
      <img src="../../../static/images/common/随便.jpg"/>
      <div class="bot-info">
        <h2><i class="fas fa-map-marker-alt"></i>上海 | 3人</h2>
        <p><i class="fas fa-calendar-alt"></i>2019.02.01 - 2019.03.01</p>
      </div>
      <transition name="fade">
        <div class="friend-detail" v-show="detailShow">
          <el-row>
            <img src="../../../static/images/common/head-portrait1.jpg"/>
            <small>娜比</small>
          </el-row>
          <h3 class="ellipsis">新西兰南岛精华游，本人会拍照开车无人机，加入小伙伴有福了</h3>
          <p><i class="fas fa-map-marker-alt"></i>上海 | 3人</p>
          <p><i class="fas fa-calendar-alt"></i>2019.02.01 - 2019.03.01</p>
          <p class="mul-ellipsis">
            参考了南岛的攻略，直接走精华路段和景色优美的民宿。这样不累，又能享受旅行的意义。
            12号基督城进入，
            peel-普卡基湖-mount cook-lake hawea
            lake hawea-queenstown
            20号queenstown飞走。
            本人走过20多个国家，有丰富的旅游经验，不墨迹。目前有两个男，欢迎各位小伙伴加入，开放1-2个名额，这样开车方便，寻志同道合的小伙伴加入。
            本人其他技能，拍照，无人机，开车，做饭。。。
          </p>
        </div>
      </transition>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'friendList',
  data () {
    return {
      detailShow: false
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.8s ease-in-out;
  }

  .fade-enter, .fade-leave-active {
    transform: translateY(200px);
    /*opacity: 0;*/
  }

  svg {
    display: inline-block;
    margin-right: 8px;
  }

  .friend-div {
    margin-top: 40px;
    margin-right: 15px;
    cursor: pointer;
  }

  .friend-img-div {
    position: relative;
    width: 100%;
    min-width: 320px;
    height: 450px;
    overflow: hidden;
    box-shadow: 0 0 10px #ccc;
  }

  .friend-img-div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .friend-img-div .bot-info {
    position: absolute;
    padding: 25px;
    text-align: left;
    color: #fff;
    bottom: 0;
  }

  .friend-img-div .bot-info h3 {
    margin-bottom: 10px;
  }

  .friend-img-div .bot-info p {
    font-size: 1.2rem;
    margin: 10px 0 30px;
  }

  .friend-img-div .friend-detail {
    position: absolute;
    bottom: 0;
    z-index: 100;
    width: 100%;
    padding: 25px;
    background: #fff;
    text-align: left;
    box-sizing: border-box;
  }

  .friend-img-div .friend-detail img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .friend-img-div .friend-detail p {
    display: inline-block;
    font-size: 0.8rem;
    color: #898989;
    margin: 5px 0;
  }

  .friend-img-div .friend-detail p:nth-of-type(2) {
    float: right;
  }

  .friend-img-div .friend-detail p:nth-of-type(2):after {
    content: "";
    overflow: hidden;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .friend-img-div .friend-detail .ellipsis {
    margin: 5px 0;
    max-width: 100%;
  }

  .friend-img-div .friend-detail .mul-ellipsis {
    -webkit-line-clamp: 2;
    line-clamp: 2;
    display: -webkit-box;
  }
</style>
