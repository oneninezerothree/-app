<template>
  <div class="box" v-if="arr">
    <header>
      <a class="return" @click="routerback">
        <img src="../images/return.png">
      </a>
      <p class="tit">【包邮】【{{arr.info[0].split(' ')[0]}}】{{arr.info[1]}}</p>
      <a href="shoppingCart.html" class="shoppingCart">
        <img src="../images/gouwuche.png">
      </a>
    </header>
    <div style="margin-top: 5.1rem;"></div>
    <div class="swiper-slide">
      <img :src="require('../images/index' + this.$route.params.img +'.jpg')">
    </div>
    <div class="main" protype="0" jpstock="0" cnstock="11" allstock="11" profrom="中国现货">
      <h2>【包邮】【{{arr.info[0].split(' ')[0]}}】{{arr.info[1]}}</h2>
      <div class="ProductSimple" style="display: none;">
        <div class="ProductSimpleName">测试：</div>
      </div>
      <div class="price">
        <p>
          <span class="brand">
            品牌：
            <label>味之素/AJINOMOTO</label>
          </span>
          <span class="sales">
            销量：
            <label>441</label>
          </span>
        </p>
        <p>
          <span class="place">
            产地：
            <label>{{arr.info[0].split(' ')[0].slice(0,2)}}</label>
          </span>
          <span class="allnum">
            库存：
            <label>11</label>
          </span>
        </p>
        <p id="price">
          ￥
          <label>{{arr.info[2].split('￥')[1]}}</label> &nbsp;
          <s>{{arr.info[2].split('￥')[2]}}</s>
        </p>
      </div>
      <div class="comment">
        <div class="commentImg">
          <img src="../images/niu.png">
        </div>
        <div class="commentCont">
          <h3>么么酱点评</h3>
          <p>味之素 火锅汤底 （美味鸡汤味）</p>
        </div>
      </div>
      <a class="moreComment">
        <span>其他小伙伴说</span>
        <span>
          <img src="../images/more.png">
        </span>
      </a>
      <ul>
        <li>
          <img src="../images/组 32.png">
          <p>摩西日购</p>
        </li>
        <li>
          <img src="../images/组 29.png">
          <p>正品保障</p>
        </li>
        <li>
          <img src="../images/组 30.png">
          <p>日本直邮</p>
        </li>
        <li>
          <img src="../images/组 31.png">
          <p>无忧退货</p>
        </li>
      </ul>
    </div>
    <div class="procontent list current">
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i2/1705192433/TB29XbsnJrJ8KJjSspaXXXuKpXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2BEYonS_I8KJjy0FoXXaFnVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB20IO7nN6I8KJjSszfXXaZVXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB2Z4bCnMLD8KJjSszeXXaGRpXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2Sdn6nL6H8KJjy0FjXXaXepXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB26kGVnJbJ8KJjy1zjXXaqapXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i2/1705192433/TB2DxcrnTvI8KJjSspjXXcgjXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB2.ZMYnILJ8KJjy0FnXXcFDpXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB2nFOznRfH8KJjy1XbXXbLdXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2_4zinL2H8KJjy0FcXXaDlFXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB2F0.onL2H8KJjy1zkXXXr7pXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i1/1705192433/TB2dr9SnMvD8KJjSsplXXaIEFXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB27vclnMDD8KJjy0FdXXcjvXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i2/1705192433/TB2oZ1SnSYH8KJjSspdXXcRgVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i1/1705192433/TB2c9TMnRDH8KJjSspnXXbNAVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2jKAqnSfD8KJjSszhXXbIJFXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB24WzCnIjI8KJjSsppXXXbyVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i1/1705192433/TB2jAcznTnI8KJjy0FfXXcdoVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i2/1705192433/TB2QLW5ekfb_uJkSmRyXXbWxVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2SF.ifBfM8KJjSZFhXXcRyFXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i4/1705192433/TB2YPdnXkCWBuNjy0FaXXXUlXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i1/1705192433/TB216hnXkCWBuNjy0FaXXXUlXXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
      <img
        align="absmiddle"
        class="img-ks-lazyload"
        src="https://img.alicdn.com/imgextra/i3/1705192433/TB2dRZIfvjM8KJjSZFyXXXdzVXa_!!1705192433.jpg"
        style="margin: 0px auto; padding: 0px; border: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both running; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px; width: 90%; height: auto;"
      >
    </div>
    <footer>
      <div class="inFooter">
        <p class="collection">
          <a>
            <img src="../images/favorite.png">
            <span>收藏</span>
          </a>
        </p>
        <p></p>
        <p>
          <a class="service">
            <img src="../images/kefu.png">
            <span>客服</span>
          </a>
        </p>
        <p>
          <a class="InShoppingCartBtn">加入购物车</a>
        </p>
        <p style="margin-left:1rem">
          <a class="buy">立即购买</a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: null
    };
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    },
    // add() {
    //   var idExist = this.$store.state.goodsList.find(item => {
    //     return item.id == id;
    //   });
      
    // }
  },
  created() {
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
          if (item.id == this.$route.params.pid) {
            this.arr = item;
          }
        });
      })
      .catch(error => {
        console.log(error); //请求失败返回的数据
      });
  },
  mounted() {
    return this.$store.commit("increment", 0);
  }
};
</script>
<style lang="scss" scoped>
html {
  background: #f3f3f3;
}
.box {
  overflow: hidden;
}

.shuaxin {
  width: 10rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -5rem;
  margin-top: -2rem;
}

header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  z-index: 10;
  top: 0;
}

header .return {
  float: left;
  display: inline-block;
  width: 10%;
  height: 4rem;
  text-align: center;
}

header .return img {
  width: 0.8rem;
  height: 1.6rem;
  margin: 1.2rem auto;
}

header p {
  float: left;
  display: inline-block;
  width: 55%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
  margin: 0 10%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

header .shoppingCart {
  float: left;
  display: inline-block;
  width: 15%;
  height: 4rem;
  text-align: center;
}

header .shoppingCart img {
  width: 2rem;
  height: 1.6rem;
  margin: 1.2rem auto;
}

.swiper-slide img {
  margin: 0 auto;
  height: 30rem;
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

.main {
  width: 90%;
  margin: 2% 5%;
}

.main h2 {
  color: #333;
  font-weight: normal;
  font-size: 1.4rem;
  border-bottom: solid 0.1rem #ccc;
  padding-bottom: 1%;
}

.main .price {
  width: 100%;
  padding: 2% 0;
  border-bottom: solid #ccc 0.1rem;
  overflow: hidden;
}

.main .price p {
  width: 49%;
  display: inline-block;
  color: #666;
  font-size: 1rem;
  float: left;
}

.main .price p span {
  width: 80%;
  display: inline-block;
  overflow: hidden;
}

.main .price p:nth-child(3) {
  color: #ff3333;
  font-size: 1.2rem;
}

.main .price p:nth-child(3) s {
  color: #666;
  font-size: 0.9rem;
}

.main .comment {
  width: 100%;
  padding: 5% 0;
  border-bottom: solid #ccc 0.1rem;
  overflow: hidden;
}

.main .comment .commentImg {
  width: 20%;
  float: left;
}

.main .comment .commentImg img {
  width: 100%;
  /*border-radius: 50%;*/
}

.main .comment .commentCont {
  width: 77%;
  float: right;
}

.main .comment .commentCont h3 {
  color: #333;
  font-weight: normal;
  font-size: 1.2rem;
}

.main .comment .commentCont p {
  color: #666;
  font-size: 1rem;
}

.main .moreComment {
  width: 100%;
  padding: 2% 0;
  border-bottom: solid #ccc 0.1rem;
  overflow: hidden;
  display: block;
}

.main .moreComment span {
  width: 50%;
  float: left;
  display: inline-block;
}

.main .moreComment span:nth-child(2) img {
  width: 0.8rem;
  float: right;
  margin-top: 0.1rem;
}

.main ul {
  width: 100%;
  padding: 5% 0;
  display: -webkit-flex;
  display: flex;
}

.main ul li {
  /*width: 18%;*/
  margin: 0 2%;
  /*display: inline-block;
					text-align: center;*/
  flex: auto;
  -webkit-flex: auto;
}

.main ul li p {
  line-height: 2.5rem;
}

.procontent {
  width: 100%;
}

.tab {
  width: 100%;
}

.tab .tabTit {
  width: 80%;
  border: solid 0.1rem #333;
  overflow: hidden;
  margin: 2% auto;
}

.tab .tabTit span {
  width: 49%;
  display: inline-block;
  text-align: center;
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.2rem;
  color: #333;
}

.tab .tabTit span:nth-child(1) {
  float: left;
}

.tab .tabTit span:nth-child(2) {
  float: right;
}

.tab .tabTit span.act {
  background: #333;
  color: white;
}

.list {
  overflow: hidden;
  margin-top: 10px;
  display: none;
}

div.current {
  display: block;
}

.tab .faq,
.faq img {
  width: 100%;
}

.inBuy,
.intoshopcar {
  width: 90%;
  border: solid 0.1rem #ddd;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  background: white;
  padding: 5%;
  display: none;
}

.stock {
  display: none;
}

.inBuy p,
.intoshopcar p {
  color: #333;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
}

.intoshopcar span {
  margin: 0 3%;
  font-size: 1.2rem;
  padding: 1% 2%;
  border: solid 0.1rem #ddd;
  margin-bottom: 1rem;
}

.close,
.intoshopcar .close {
  float: right;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.6rem;
  background: rgba(0, 0, 0, 0.5);
}

.inBuy span {
  margin: 0 3%;
  padding: 1% 2%;
  border: solid 0.1rem #ddd;
}

.numinfo {
  margin: 0.5rem 0;
}

.numinfo .add,
.numinfo .min {
  width: 2rem;
  height: 2rem;
  border: solid 0.1rem #ddd;
  text-align: center;
}

.numinfo .text_box {
  width: 4rem;
  height: 2rem;
  border: solid 0.1rem #ddd;
  text-align: center;
}

.inBuyAct,
.tranact {
  border: solid 0.1rem #ff3333;
  color: #ff3333;
}

.inBuy .submit,
.joinshopcar {
  width: 100%;
  background: #ff3333;
  display: block;
  text-align: center;
  padding: 3% 0;
  color: white;
  margin: 3% auto 0;
  height: 2rem;
}
/*footer寮€濮�*/

.marTop {
  margin-bottom: 5rem;
}

footer {
  width: 100%;
  padding: 0.5rem 0;
}

.inFooter {
  width: 90%;
  padding: 0% 5%;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: solid 0.1rem #d1d1d1;
  z-index: 9999;
}

footer .inFooter p {
  margin: 3% 1% 1%;
  display: inline-block;
  font-size: 1.3rem;
  float: left;
}

footer .inFooter p:nth-child(2) {
  width: 0.1rem;
  height: 3.2rem;
  border-right: solid #ccc 0.1rem;
}

footer .inFooter p img {
  width: 2.2rem;
  margin: 0 auto;
}

footer .inFooter p:nth-child(4),
footer .inFooter p:nth-child(5) {
  width: 32%;
  vertical-align: top;
}

footer .inFooter p:nth-child(4) a {
  width: 100%;
  padding: 3% 5%;
  height: 3rem;
  line-height: 3rem;
  background: #ff3333;
  display: inline-block;
  color: white;
  text-align: center;
}

footer .inFooter p:nth-child(5) a {
  width: 100%;
  padding: 3% 5%;
  height: 2.85rem;
  line-height: 2.85rem;
  border: solid 0.1rem #333;
  display: inline-block;
  color: #333;
  text-align: center;
  margin-left: 3%;
}
</style>

