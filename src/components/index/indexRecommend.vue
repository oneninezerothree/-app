<template>
  <main style="margin-top:8.1rem">
    <div class="swiper-container" id="pa">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../images/banner1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../images/banner2.jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="sign">
      <div class="inSign">
        <p class="check">
          <a>
            <img src="../../images/sign.png">
            <span>每日签到</span>
          </a>
        </p>
        <p>
          <a href="javascript:void(0);">
            <img src="../../images/brand.png">
            <span>品牌一览</span>
          </a>
        </p>
        <p>
          <a href="javascript:void(0);">
            <img src="../../images/shequ.png">
            <span>代购代拍</span>
          </a>
        </p>
        <p>
          <a href="javascript:void(0);">
            <img src="../../images/share.png">
            <span>天天分享</span>
          </a>
        </p>
      </div>
    </div>
    <a class="leaderboard" href="javascript:void(0);">
      <img src="../../images/5636458163882893691.jpg">
    </a>
    <div class="commodity">
      <ul class="inCommodity clearfix">
        <li productid="65283" class="inCommodityList" v-for="(item,i) in arr" :key="i">
          <router-link :to="'/details/' + item.id + '/' + item.img ">
            <img :src="require('../../images/index' + item.img +'.jpg')">
            <span class="CommodityLabel">{{item.info[0].split(' ')[0]}}</span>
            <span class="CommodityLabelAdd">{{item.info[0].split(' ')[1]}}</span>
            <p class="CommodityName">{{item.info[1]}}</p>
            <span class="CommodityPrice">
              {{'￥'+item.info[2].split('￥')[1]}}
              <s>{{'￥'+item.info[2].split('￥')[2]}}</s>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "https://www.easy-mock.com/mock/5cf515414bb49512a3416cfe/MXgoods"
    })
      .then(response => {
        //这里使用了ES6的语法
        this.arr.push(...response.data.data.goods);
        this.arr.forEach(item => {
          item.info = item.info.split("\n\n");
          item.img = Math.floor(Math.random() * 10) + 1;
        });
        // console.log(this.arr); //请求成功返回的数据
      })
      .catch(error => {
        console.log(error); //请求失败返回的数据
      });
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss">
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
