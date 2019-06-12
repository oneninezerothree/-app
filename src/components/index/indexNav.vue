<template>
  <div class="tabClassify">
    <div class="swiper-container banner1">
      <div class="swiper-wrapper">
        <a class="swiper-slide" href>
          <img :src="img">
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="secondNav">
      <ul>
        <li class="SecActive">{{title}}</li>
      </ul>
    </div>
    <div class="commodity">
      <ul class="inCommodity clearfix">
        <li productid="65283" class="inCommodityList" v-for="(item,i) in arr" :key="i">
          <router-link :to="'/details/' + item.id">
            <img
              :src="require('../../images/index' + (Math.floor(Math.random() * 10) + 1) +'.jpg')"
            >
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      arr: [],
      img: null
    };
  },
  created() {
    this.getcontent();
  },
  watch: {
    $route: "getcontent"
  },
  methods: {
    getcontent() {
      this.title = this.$route.params.title;
      if (this.$route.params.title.slice(0, 2) == "保税") {
        this.img = require("../../images/navmeni1.jpg");
      } else if (this.$route.params.title.slice(0, 2) == "中国") {
        this.img = require("../../images/navmeni2.jpg");
      } else if (this.$route.params.title.slice(0, 2) == "日本") {
        this.img = require("../../images/navmeni3.jpg");
      } else {
        this.img = require("../../images/navmeni4.jpg");
      }
      this.$axios({
        method: "get",
        url: "https://www.easy-mock.com/mock/5cf515414bb49512a3416cfe/MXgoods"
      })
        .then(response => {
          this.arr = [];
          let a = [];
          //这里使用了ES6的语法
          a.push(...response.data.data.goods);
          a.forEach((item, index) => {
            item.info = item.info.split("\n\n");
            if (
              item.info[0].split(" ")[0].slice(0, 2) ==
              this.$route.params.title.slice(0, 2)
            ) {
              this.arr.push(item);
            }
          });
        })
        .catch(error => {
          console.log(error); //请求失败返回的数据
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabClassify {
  width: 100%;
  margin-top: 8.1rem;
  background-color: white;
}
.secondNav ul {
  display: flex;
  border-bottom: 1px solid #cccccc;
}
.secondNav ul li {
  flex: auto;
  font-size: 1.1rem;
  padding: 1.1rem 0;
  /*margin: 0 4rem;*/
}
.SecActive {
  background: url("../../images/tab_bg.png") no-repeat bottom;
  color: red;
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
