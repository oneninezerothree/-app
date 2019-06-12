<template>
  <div>
    <div class="head">
      <header>
        <h1>
          <img src="../assets/logo.png">
        </h1>
        <a href="#">搜索你感兴趣的内容</a>
      </header>
      <nav class="nav swiper-container-horizontal">
        <ul class="swiper-wrapper nav-header">
          <li
            class="swiper-slide swiper-slide-active"
            @click="navAct(0)"
            :class="navnum==0?'tabNavActive':''"
            style="margin-right: 20px;"
          >
            <router-link to="/home">推荐</router-link>
          </li>
          <li
            id="245"
            class="swiper-slide swiper-slide-next"
            @click="navAct(1)"
            :class="navnum==1?'tabNavActive':''"
            style="margin-right: 20px;"
          >
            <router-link to="/home/indexNav/保税区闪送">保税区闪送</router-link>
          </li>
          <li
            id="246"
            class="swiper-slide"
            @click="navAct(2)"
            :class="navnum==2?'tabNavActive':''"
            style="margin-right: 20px;"
          >
            <router-link to="/home/indexNav/中国现货">中国现货</router-link>
          </li>
          <li
            id="247"
            class="swiper-slide"
            @click="navAct(3)"
            :class="navnum==3?'tabNavActive':''"
            style="margin-right: 20px;"
          >
            <router-link to="/home/indexNav/日本现货">日本现货</router-link>
          </li>
          <li
            id="257"
            class="swiper-slide"
            @click="navAct(4)"
            :class="navnum==4?'tabNavActive':''"
            style="margin-right: 20px;"
          >
            <router-link to="/home/indexNav/香港直邮">香港直邮</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
    data() {
    return {
      navnum:0,
    }
  },
   created(){
    //footer消失
    this.$store.state.count = 1;
  },
  methods: {
    navAct(num){
      return this.navnum = num
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  margin-top: 6.6rem;
}
html,
body {
  font-size: 62.5%;
  position: relative;
}
.head {
  width: 100%;
  height: 7rem;
  position: fixed;
  z-index: 999;
  background: white;
  top: 0;
}

header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
}

header h1 {
  float: left;
  display: inline-block;
  width: 20%;
  height: 4rem;
  text-align: center;
}

header h1 img {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem auto;
}

header a {
  float: left;
  display: inline-block;
  height: 2.6rem;
  line-height: 2.6rem;
  width: 60%;
  font-size: 1.2rem;
  padding-left: 3.2rem;
  border: solid 1px #666;
  border-radius: 2rem;
  color: #999;
  background: url("../images/search.png") 0.5rem 0.5rem no-repeat;
  background-size: 1.6rem;
  margin: 0.5rem 0;
  text-align: left;
}
/*nav*/

nav {
  background: white;
}
.shuaxin {
  width: 10rem;
  height: 4rem;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -5rem;
  margin-top: -2rem;
}
.nav-header li:nth-child(1) {
  margin-left: 6%;
}

.nav-header li:nth-child(9) {
  margin-right: 6%;
}
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}

.nav-header .swiper-slide {
  background: #fff;
  text-align: center;
  color: #666;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  font-size: 1.25rem;
  line-height: 3rem;
  position: relative;
}
.tabNavActive {
  border-bottom: solid 2px #333;
  color: #333;
}

.tabClassify {
  width: 100%;
  margin-top: 8.1rem;
  background-color: white;
}

.tabClassify .tabClassifyList {
  width: 100%;
  text-align: center;
  overflow: hidden;
  display: none;
}
.swiper-slide a img {
  width: 100% !important;
  height: 15rem;
}
.tabClassify .tabClassifyListAct {
  display: block;
}

.swiper-pagination {
  position: absolute;
  width: 100%;
  bottom: 1rem;
}

.swiper-pagination-bullet {
  width: 1.25rem;
  height: 0.15rem;
  margin-left: 0.5rem;
  background: white;
  display: inline-block;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #333;
  opacity: 1;
}
/*sign*/

.sign {
  width: 90%;
  padding: 1% 5%;
  height: 6rem;
  overflow: hidden;
}

.sign .inSign p {
  width: 19%;
  margin: 0 2%;
  display: inline-block;
}

.sign .inSign p img {
  width: 2.6rem;
  margin: 0.5rem auto;
}

.sign .inSign p span {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #333;
}

.leaderboard {
  display: block;
  width: 100%;
  height: 10rem;
  /*background-size: cover;*/
}

.leaderboard img {
  width: 100%;
  height: 10rem;
}

.commodity {
  width: 94%;
  margin: 0 auto;
  color: #333;
}

.commodity .inCommodity {
  width: 100%;
}

.commodity .inCommodity li {
  width: 50%;
  padding: 3% 0;
  float: left;
}

.commodity .inCommodity li img {
  margin: 0 auto;
  height: 10rem;
}

.commodity .inCommodity li .CommodityLabel {
  border-left: solid 0.1rem #333;
  border-right: solid 0.1rem #333;
  padding: 0 6%;
  line-height: 1rem;
  font-size: 1rem;
  overflow: hidden;
}

.commodity .inCommodity li .CommodityLabelAdd {
  /*border-right: solid 0.1rem #333;*/
  /*padding: 0 6%;*/
  line-height: 1rem;
  font-size: 1rem;
  overflow: hidden;
}

.commodity .inCommodity li .CommodityName {
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 1.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.commodity .inCommodity li .CommodityPrice {
  font-size: 1.1rem;
  color: #ff3333;
  overflow: hidden;
}

.commodity .inCommodity li .CommodityPrice s {
  color: #666;
  padding-left: 5%;
  font-size: 1rem;
}

.secondClassify {
  width: 100%;
  height: 3rem;
  background: #f1f1f1;
}

.secondClassify .inSecondClassify {
  width: 46%;
  line-height: 2.9rem;
  display: inline-block;
  text-align: center;
}

.secondClassify span.inSecondClassifyAct {
  // background: url(../img/tab_bg.png) center bottom no-repeat;
  background-size: 30%;
}

.inSecondCommodity {
  display: none;
}

.inSecondCommodityCur {
  display: block;
}
</style>