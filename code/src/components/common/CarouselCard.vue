<template>
  <div class="carousel-card-div">
    <div class="carsousel-card-bg" ref="cardBg"></div>
    <div class="carousel-card-main">
      <el-row>
        <el-col :span="17">
          <transition-group tag="ul" name="cardImgFade" class="card-main-img">
            <li v-for="(image,index) in carouselCardImg"
                v-show="index===carsouselCardImgIndex" :key="'cardImg'+index">
              <img :src="image"/>
            </li>
          </transition-group>
        </el-col>
        <el-col :span="7">
            <ul class="carsousel-card-menu">
              <li v-for="(item,index) in carouselMenu"
                  :key="index"
                  :class="{'card-menu-active': item.hover}"
                  @mouseenter="cardListHover(index)"
                  @mouseleave="play(index)">
                <div class="card-menu-header" v-show="item.hover">
                  <img :src="item.hearderImg"/>
                </div>
                <div class="carsouel-menu-text mul-ellipsis">
                  <span>{{ item.title }}</span>
                </div>
              </li>
            </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselCard',
  data () {
    return {
      carsouselCardImgIndex: 0,
      timer: '',
      carouselCardImg: [
        '../../../static/images/carouselCard/carouselCard1.jpg',
        '../../../static/images/carouselCard/carouselCard2.jpg',
        '../../../static/images/carouselCard/carouselCard3.jpg',
        '../../../static/images/carouselCard/carouselCard4.jpg',
        '../../../static/images/carouselCard/carouselCard5.jpg'
      ],
      carouselMenu: [
        {
          hearderImg: '../../../static/images/common/head-portrait1.jpg',
          title: '新年开始，来一场说走就走的香港迪士尼之旅',
          hover: false
        },
        {
          hearderImg: '../../../static/images/common/head-portrait2.jpg',
          title: '暖冬之旅：念念港澳+寻味顺德（香港、澳门、顺德三地新玩法）',
          hover: false
        },
        {
          hearderImg: '../../../static/images/common/head-portrait3.jpg',
          title: '发现香港｜从港味电影到梦幻童话，四天三晚亲子自由行攻略',
          hover: false
        },
        {
          hearderImg: '../../../static/images/common/head-portrait4.jpg',
          title: '趁4月未到，与百年缆车做最后的告别，再次暴走打卡香港必体验项目 (附港珠澳大桥通关攻略）',
          hover: false
        },
        {
          hearderImg: '../../../static/images/common/head-portrait5.jpg',
          title: '【PhoebeJIA】我们没有变老，只是变得更好|| 香港',
          hover: false
        }
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.cardAutoPlay()
      }, 4000)
    })
  },
  watch: {
    carsouselCardImgIndex () {
      this.bgImgChange()
    }
  },
  methods: {
    cardAutoPlay () {
      this.carsouselCardImgIndex++
      if (this.carsouselCardImgIndex === 5) {
        this.carsouselCardImgIndex = 0
      }
    },
    play (index) {
      this.timer = setInterval(() => {
        this.cardAutoPlay()
      }, 4000)
      this.carouselMenu[index].hover = false
    },
    /*
    * hover文字列表时：
    * 1.修改当前carsouselCardImgIndex
    * 2.停止定时器
    * 3.把列表hover的class添加上去，即修改carouselMenu[index]的值为true
    * 4.显示头像
    * */
    cardListHover (index) {
      this.carsouselCardImgIndex = index
      this.cardImgChangeStop()
      this.carouselMenu[index].hover = true
    },
    cardImgChangeStop () {
      clearInterval(this.timer)
      this.timer = null
    },
    bgImgChange () {
      this.$refs.cardBg.style.background = 'url(' + this.carouselCardImg[this.carsouselCardImgIndex] + ')'
    }
  }
}
</script>

<style scoped>
  .cardImgFade-enter-active,
  .cardImgFade-leave-active{
    transition: opacity 0.5s ease-in-out;
  }
  .cardImgFade-enter {
    opacity: 0.5;
  }
  .cardImgFade-leave {
    opacity: 0;
  }
  li{
    list-style-type: none;
  }
  .carousel-card-div{
    position: relative;
  }
  .carousel-card-div .carsousel-card-bg{
    height: 450px;
    width: 100%;
    transition: all 0.5s;
    background: url("../../../static/images/carouselCard/carouselCard1.jpg") no-repeat;
    background-size: cover;
    -webkit-filter: blur(8px);
    filter: blur(8px);
    border: 1px solid #ccc;
    z-index: -1;
  }
  .carousel-card-div > .carousel-card-main{
    width: 80%;
    max-width: 1080px;
    min-width: 900px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .carousel-card-div > .carousel-card-main .card-main-img{
    z-index: -1;
  }
  /*图片*/
  .carousel-card-div > .carousel-card-main > .el-row > .el-col:first-child{
    height: 450px;
    min-width: 765px;
    width: 100%;
    overflow: hidden;
  }
  .carousel-card-div > .carousel-card-main > .el-row > .el-col:first-child img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  /*图片右边标题+头像*/
  .carousel-card-div > .carousel-card-main > .el-row > .el-col:nth-child(2){
    min-width: 300px;
    max-width: 100%;
    height: 450px;
    background: #ffffff;
    position: absolute;
    right: 0;
  }
  .carousel-card-div > .carousel-card-main .carsousel-card-menu li{
    display: flex;
    cursor: pointer;
    align-items: center;
    list-style-type: none;
    height: 88px;
  }
  .carousel-card-div > .carousel-card-main .carsousel-card-menu li:not(:last-child) {
    border-bottom: 1px solid #ececec;
  }
  .carousel-card-div > .carousel-card-main  .carsousel-card-menu li > .card-menu-header img{
    height: 76px;
    border-radius: 50%;
    border: 4px solid #f5f5f5;
    margin-left: -42px;
  }
  .carousel-card-div > .carousel-card-main .carsouel-menu-text{
    font-size: 1.1rem;
    color: #696969;
    text-align: left;
    padding: 0 15px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  /*li hover的样式*/
  .card-menu-active{
       height: 96px;
       background: #f5f5f5;
       border-right: 5px solid rgb(231, 125, 3);
  }
</style>
