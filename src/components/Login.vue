<template>
  <div id="login">
    <!-- 头部 -->
    <header>
      <a class="return">
        <img src="../assets/return.png">
      </a>
      <p class="tit">登录</p>
      <a href>
        <img class="backindex" src="../assets/logo.png">
      </a>
    </header>
    <img src="../assets/upload.gif" class="loading">
    <div class="marBott"></div>
    <!-- 内容 -->
    <div class="main">
      <input type="text" class="username" placeholder="请输入手机号码/邮箱">
      <div class="eyes">
        <a class="eyes_box" @click="eyes=!eyes">
          <img src="../assets/guan.png"  v-if="eyes">
          <img src="../assets/kai.jpg" v-else> 
        </a>
        <input type="password" class="input_text_password mima_dd" placeholder="请输入密码"  v-show="eyes">
        <input type="text" class="input_text_password mima_wz"  placeholder="请输入密码" v-show="!eyes">
        
      </div>

      <a class="login">登录</a>
      <p>
        <a class="Pwd" @click="s">忘记密码</a>
        <a href="./Register.vue">注册用户</a>
      </p>
      <p class="cooperation">
        <span>———————</span>&nbsp;&nbsp;合作账号登录&nbsp;&nbsp;
        <span>———————</span>
      </p>
      <div class="loginIcon">
        <!--<a href=""><img src="img/sina.png" /></a>-->
        <a class="qqlogin">
          <img src="../assets/qq.png">
        </a>
        <!--<a class="qqlogin"><img src="img/qq.png" /></a>-->
        <a class="wechatlogin">
          <img src="../assets/wechat.png">
        </a>
        <!--<a><img src="img/alipayIcon.png" /></a>-->
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="cover" style="height: 667px;" @click="disappear" v-show="isShow"></div>
    <!-- 忘记密码的弹框 -->
    <div class="inPwd" :style="`bottom:${shows.bottom}%`">
      <div class="inPwdMain">
        <a href="modify1.html#103">通过手机找回密码</a>
        <a href="registerforgetbymail.html">通过邮箱找回密码</a>
      </div>
      <div class="inPwdMain">
        <a class="cancel" @click="disappear">取消</a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      eyes: true,
      isShow: false,
      speed: 8,
      shows: {
        bottom: -100,
      },
    };
  },
  methods: {
    // 弹框出现
    s() {
      this.isShow = !this.isShow;
      let _this = this;
      // 定时器，弹框从下往上出现
      let timer = setInterval(function() {
        if (_this.shows.bottom > -10) {
          _this.shows.bottom = -10;
          clearInterval(timer);
        }
        _this.shows.bottom = _this.shows.bottom + _this.speed;
      }, 50);
    },
    // 弹框消失
    disappear() {
      this.isShow = false;
      this.shows.bottom = -100;
    },
  },
});
</script>



<style lang="scss" scoped>
@import url(../css/base.css);
header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background-size: 100%;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  z-index: 999;
  background: white;
  top: 0;
  left: 0;
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
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
header p {
  float: left;
  display: inline-block;
  width: 80%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
}
.backindex {
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 3rem;
}
.loading {
  position: absolute;
  left: 35%;
  top: 40%;
  height: 10rem;
  display: none;
  z-index: 20;
}
.marBott {
  margin-top: 6.6rem;
}
.main {
  width: 90%;
  padding: 5%;
}
.main input {
  display: block;
  width: 94%;
  margin-bottom: 5%;
  border: solid 0.1rem #cdcdcd;
  padding: 5% 3%;
  color: #999;
  font-size: 1.1rem;
}
// .main .mima_dd{
//   display: block;
// }
.main .eyes {
  position: relative;
}
.main .eyes a {
  position: absolute;
  top: 50%;
  margin-top: -1.2rem;
  right: 1rem;
}
.main .eyes a img {
  width: 2.6rem;
  right: 0;
  top: 0;
}
.main a.login {
  display: block;
  width: 94%;
  margin-bottom: 3%;
  background: #ff3333;
  padding: 4.5% 3%;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.main p {
  margin-bottom: 8rem;
  text-align: center;
  font-size: 1.2rem;
  color: #999;
}
.main p a {
  font-size: 1.2rem;
  color: #999;
}
.main p a:nth-child(1) {
  float: left;
}
.main p a:nth-child(2) {
  float: right;
}
.main .cooperation {
  margin-bottom: 5%;
}
.main .loginIcon {
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.qqlogin {
  margin-right: 2rem;
}
.wechatlogin,
.qqlogin {
  display: inline-block;
  width: 6rem;
  height: 6rem;
}
img {
  max-width: 100%;
  height: auto;
  width: auto\9;
  -ms-interpolation-mode: bicubic;
  display: block;
}
.wechatlogin {
  margin-left: 2rem;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #999999;
  opacity: 0.4;
  z-index: 10;
  // display: none;
}
.inPwd {
  width: 90%;
  padding: 5%;
  position: fixed;
  bottom: -100%;
  z-index: 100;
  //   display: none;
}
.inPwd .inPwdMain {
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  background: white;
}
.inPwd a:nth-child(1) {
  border-bottom: solid 0.1rem #cdcdcd;
}

.inPwd a {
  display: block;
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  line-height: 6rem;
  margin: 0 5%;
  width: 90%;
}
.inPwd a:nth-child(1) {
  border-bottom: solid 0.1rem #cdcdcd;
}
</style>
