<template>
  <footer>
    <div class="inFooter" v-if="isShowMfooter">
      <p class="index" @click="foo(1)">
        <router-link to="/home">
          <img
            class="indeximg"
            :src="num==1?require('../../images/indexAct.png'):require('../../images/index.png')"
          >
          <span :style="num==1?'color:#FF3333;':''">首页</span>
        </router-link>
      </p>
      <p @click="foo(2)">
        <router-link to>
          <img
            :src="num==2?require('../../images/classifyAct.png'):require('../../images/classify.png')"
          >
          <span :style="num==2?'color:#FF3333;':''">分类</span>
        </router-link>
      </p>
      <p @click="foo(3)">
        <router-link to>
          <img
            :src="num==3?require('../../images/activityAct.png'):require('../../images/activity.png')"
          >
          <span :style="num==3?'color:#FF3333;':''">活动</span>
        </router-link>
      </p>
      <p @click="foo(4)">
        <router-link to>
          <img
            :src="num==4?require('../../images/shoppingCartAct.png'):require('../../images/shoppingCart.png')"
          >
          <span :style="num==4?'color:#FF3333;':''">购物车</span>
        </router-link>
      </p>
      <p @click="foo(5)">
        <router-link to>
          <img
            :src="num==5?require('../../images/userCenterAct.png'):require('../../images/userCenter.png')"
          >
          <span :style="num==5?'color:#FF3333;':''">我的</span>
        </router-link>
      </p>
    </div>
  </footer>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      num: 1
    };
  },
  methods: {
    foo: function(number) {
      return (this.num = number);
    },
  },
  computed:{
    isShowMfooter(){
      return this.$store.state.count
    }
  },
  // mounted() {
  // return  this.$store.commit('increment',0)
  // },
});
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
  .inFooter {
    width: 90%;
    padding: 0% 5%;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: white;
    border-top: solid 0.1rem #d1d1d1;
    z-index: 1000;
    p {
      box-flex: 1;
      -webkit-box-flex: 1;
      flex: auto;
      padding: 1% 0 1% 0;
      img {
        height: 2.5rem;
        margin: 0 auto;
      }
      .indeximg {
        width: 2.8rem;
      }
      span {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 0.9rem;
        color: #666;
        line-height: 1.8rem;
      }
    }
  }
}
</style>

