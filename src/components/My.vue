<template>
  <div id="my">
    <div class="user">
      <div class="setting">
        <router-link to="./Login.vue">
          <img src="../assets/setting.png">
        </router-link>
      </div>
      <div class="userInfo">
        <img src="../assets/moxi.png">
        <p class="userName">{{$cookie.get('user')}}</p>
        <p class="grades" @click="del">{{$cookie.get('user')?'退出登陆':''}}</p>
      </div>
      <p class="give">签到送摩币</p>
    </div>
    <div class="order">
      <div class="myOrder">
        <a class="my">
          <img src="../assets/order.png">
          <span>我的订单</span>
        </a>
        <a class="all">
          查看全部订单
          <img src="../assets/more.png">
        </a>
      </div>
      <ul class="moreOrder">
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order1.png">
            </div>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order2.png">
            </div>
            <p>待发货</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order3.png">
            </div>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order4.png">
            </div>
            <p>待评价</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="order">
      <div class="myOrder mydaigou">
        <a class="my">
          <img src="../assets/order.png">
          <span>我的代购订单</span>
        </a>
        <a class="all">
          查看全部订单
          <img src="../assets/more.png">
        </a>
      </div>
      <ul class="moreOrder moredaigou">
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order1.png">
            </div>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order2.png">
            </div>
            <p>待发货</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order3.png">
            </div>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a>
            <div class="moreOrderImg">
              <img src="../assets/order4.png">
            </div>
            <p>待评价</p>
          </a>
        </li>
      </ul>
    </div>
    <ul class="classify">
      <li class="borRight">
        <a class="wallet">
          <img src="../assets/wallet.png">
          <p>我的钱包</p>
        </a>
      </li>
      <li class="borRight">
        <a href="getcoupon.html" class="coupon">
          <img src="../assets/youhui.png">
          <p>优惠券领取</p>
        </a>
      </li>
      <li class="borRight">
        <a class="userCollection">
          <img src="../assets/Collection.png">
          <p>我的收藏</p>
        </a>
      </li>
      <li class="borRight borTop">
        <a href="userTask.html" class="userTask">
          <img src="../assets/task.png">
          <p>我的任务</p>
        </a>
      </li>
      <li class="borRight borTop">
        <a href="Communitydemand.html" class="helpCenter">
          <img src="../assets/help.png">
          <p>社区管理</p>
        </a>
      </li>
      <li class="borRight borTop">
        <a class="deliveryAddress">
          <img src="../assets/address.png">
          <p>收货地址</p>
        </a>
      </li>
      <li class="borTop borRight">
        <a href="feedback.html" class="feedback">
          <img src="../assets/opinion.png">
          <p>意见反馈</p>
        </a>
      </li>
      <li class="borTop"></li>
      <li class="borTop"></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    del() {
      this.$cookie.delete("user");
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(../css/base.css);
.user {
  width: 90%;
  padding: 5%;
  background: url(../assets/bg-tu.png) 0 0 no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.user .setting {
  width: 100%;
  overflow: hidden;
}

.user .setting img {
  width: 1.6rem;
  float: right;
}

.user .userInfo {
  margin: 10% 0 0;
}

.user .userInfo img {
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  border: white solid 0.1rem;
  border-radius: 50%;
  padding: 1%;
}

.user .userInfo p {
  width: 100%;
  text-align: center;
  color: white;
}

.user .userInfo .userName {
  font-size: 1.2rem;
  line-height: 2.4rem;
}

.user .userInfo .grades {
  font-size: 1rem;
}

.user .give {
  color: white;
  padding: 2% 5%;
  display: inline-block;
  background: #ff3333;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
  font-size: 0.9rem;
}

.order {
  width: 100%;
  background: white;
}

.order .myOrder {
  width: 90%;
  padding: 0% 5%;
  overflow: hidden;
  height: 4rem;
  line-height: 4rem;
  border-bottom: solid 0.1rem #ddd;
}

.order .myOrder a,
.order .myOrder a img {
  display: inline-block;
}

.order .myOrder a.my {
  width: 50%;
  float: left;
  font-size: 1.2rem;
  color: #333;
  text-align: left;
}

.order .myOrder a.all {
  width: 50%;
  float: right;
  font-size: 1rem;
  color: #666;
  text-align: right;
}

.order .myOrder .my img {
  width: 1rem;
  margin-right: 5%;
  padding-top: 1%;
}

.order .myOrder .all img {
  width: 0.6rem;
  margin-left: 5%;
  padding-top: 1%;
}

.order .moreOrder {
  width: 90%;
  padding: 2% 5%;
  margin-bottom: 1rem;
  display: -webkit-flex;
  display: flex;
}

.order .moreOrder li {
  width: 18.5%;
  display: inline-block;
  text-align: center;
  background: white;
  flex: auto;
  -webkit-flex: auto;
}

.order .moreOrder li .moreOrderImg {
  position: relative;
}

.order .moreOrder li img {
  width: 2.2rem;
  margin: 5% auto;
}
.order .moreOrder li p {
  font-size: 1.1rem;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.order .moreOrder li i {
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  position: absolute;
  right: 16%;
  top: -12%;
  padding: 5%;
  background: #ff3333;
  border-radius: 0.8rem;
  color: white;
  font-size: 0.8rem;
}
.classify {
  width: 100%;
  overflow: hidden;
  background: white;
}
.classify li {
  width: 33%;
  display: inline-block;
  text-align: center;
  padding: 10% 0;
  float: left;
  /*margin: auto;*/
}
.classify li img {
  width: 3.3rem;
  margin: 0 auto 10%;
}
.classify li p {
  font-size: 1.2rem;
  margin: 0 auto 10%;
  color: #666;
}
.borRight {
  border-right: solid 0.1rem #ddd;
}
.borTop {
  border-top: solid 0.1rem #ddd;
}
</style>
