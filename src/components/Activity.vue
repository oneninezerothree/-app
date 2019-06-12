<template>
  <div>
    <header>
      <p class="tit">活动</p>
      <a href="/home">
        <img class="backindex" src="../assets/logo.png">
      </a>
    </header>
    <div class="activity">
      <ul class="activityList" >
        <li v-infinite-scroll="load" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
          <div class="activityMain" v-for="(g,index) in goodsList" :key="index">
            <a href="activityList.html#id=255">
              <img class="banner" :src="g.img">
            </a>
            <div class="activityTxt">
              <div class="activityTxtLeft">
                <p v-text="g.title"></p>
                <p v-text="g.time"></p>
              </div>
              <div activityid="255" class="activityTxtRight">
                <img src="../assets/ShareIcon.png">
                <span>分享</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import request from "../lib/request";
export default Vue.extend({
  data() {
    return {
      goodsList: [],
      timer: null,
      busy: false
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url: "https://www.easy-mock.com/mock/5cf515414bb49512a3416cfe/activity"
      });
      this.goodsList = [...this.goodsList,...data.data.data.goodsList];
    },
    load() {
      this.busy = true;
      this.timer = setTimeout(() => {
        this.getShopList();
      }, 1000);
      this.busy = false;
    }
  },
  watch: {
    goodsList() {
      console.log(this.goodsList);
    }
  }
});
</script>



<style lang="scss" scoped>
@import url(../css/base.css);
header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
}
header p {
  float: left;
  display: inline-block;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.backindex {
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 3rem;
}
.activity {
  padding-top: 5.1rem;
}
ul,
ol {
  list-style: none;
}
.activityList li {
  width: 100%;
  text-align: center;
}
.activityMain img {
  width: 100%;
}
.banner {
  height: 11rem;
}
.activityList li .activityTxt {
  width: 100%;
  background: white;
  text-align: left;
  overflow: hidden;
}
.activityList li .activityTxt .activityTxtLeft {
  width: 80%;
  float: left;
  color: #333;
}
.activityList li .activityTxt .activityTxtLeft p:nth-child(1) {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  float: left;
  font-size: 1.6rem;
  border-bottom: solid 0.1rem #ccc;
}
.activityList li .activityTxt .activityTxtLeft p:nth-child(2) {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  font-size: 1.2rem;
}
.activityList li .activityTxt .activityTxtLeft p {
  padding-left: 5%;
}
.activityList li .activityTxt .activityTxtRight {
  width: 15%;
  height: 6.5rem;
  display: inline-block;
  float: right;
  text-align: center;
  font-size: 0.9rem;
}
.activityList li .activityTxt .activityTxtRight img {
  margin: 0.4rem auto 0.2rem;
  width: 1.5rem;
}
.activityList li .activityTxt .activityTxtRight {
  width: 15%;
  height: 6.5rem;
  display: inline-block;
  float: right;
  text-align: center;
  font-size: 0.9rem;
}
</style>
