<template>
  <div id>
    <header>
      <a class="return">
        <img src="../assets/return.png">
      </a>
      <p class="tit">注册</p>
    </header>
    <div class="marBott"></div>
    <div class="main">
      <input class="num" type="tel" placeholder="请输入手机号码" ref="tels" @blur="tel" >
      <div class="errorinfo" v-html="inf3" v-show="isinf3"></div>
      <div class="code">
        <input ref="codes" class="validCode" type="tel" placeholder="请输入验证码" @blur="b">
        <!-- <div class="codeHand before">
        </div>-->
        <div class="codeGet" @click="randomCode" v-html="code" style="font-size:30px;"></div>
      </div>
      <a href="javasript:" class="help">短信验证码收不到怎么办？</a>
      <div class="errorinfo" v-html="inf" v-show="isinf"></div>
      <input class="pass1" type="password" placeholder="请输入密码" ref="pwd1" @blur="pwd1">
      <input class="pass2" type="password" placeholder="请再次输入密码" ref="pwd2" @blur="pwd2">
      <div class="errorinfo" v-html="inf1" v-show="isinf1"></div>
      <div class="errorinfo" v-html="inf2" v-show="isinf2"></div>

      <a class="login" @click="ok" :href="url">确认</a>
      <div class="errorinfo"></div>
      <div class="agree">
        <div class="checkSty">
          <img src="../assets/input.png" @click="isbg=!isbg" v-if="isbg">
          <img src="../assets/input_on.png" @click="isbg=!isbg" v-else>
          <input class="checkClass" name="subBox1" type="checkbox">
        </div>
        <p>
          我已阅读并接受MOXI用户
          <a href="registerprotocol.html">《注册协议》</a>
        </p>
      </div>
     
      <p class="service">联系客服400-660-6366</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isbg: false,
      html: "0987654321zxcvbnmkjhgfdsaqwertyuioplZXCVBNMLKJHGFDSAQWERTYUIOP",
      code: "cxk6",
      inf: "验证码错误",
      isinf: false,
      inf1: "密码不能小于6个字符",
      isinf1: false,
      inf2: "两次密码不一致",
      isinf2: false,
      inf3: "手机号码不正确",
      isinf3: false,
      url:"",
    };
  },
  methods: {
    //随机4位数的验证码
    randomCode() {
      this.code = "";
      for (let i = 0; i < 4; i++) {
        //随机数范围：0-html.length-1
        let now = parseInt(Math.random() * this.html.length); //0-html.length-1
        this.code += this.html[now];
      }
      return this.code;
    },

    //失去焦点的时候验证
    b() {
      if (this.$refs.codes.value == this.code) {
        // this.$refs.inf.value = "验证码错误"
        this.isinf = false;
      } else {
        this.isinf = !this.isinf;
      }
      // console.log(this.$refs.codes.value);
    },
    //手机号码
    tel() {
      if (this.$refs.tels.value.length == 11) {
        // this.$refs.inf.value = "验证码错误"
        this.isinf3 = false;
      } else {
        this.isinf3 = !this.isinf3;
      }
    },
    //密码
    pwd1() {
      //非空验证
      if (this.$refs.pwd1.value.length >= 6) {
        this.isinf1 = false;
      } else {
        console.log("密码不能小于6个字符");
        this.isinf1 = !this.isinf1;
      }
    },
    //重复密码
    pwd2() {
      if (this.$refs.pwd1.value == this.$refs.pwd2.value) {
        this.isinf2 = false;
      } else {
        this.isinf2 = !this.isinf2;
      }
    },
    ok() {
      if (this.$refs.pwd1.value &&this.$refs.pwd2.value &&this.$refs.codes.value) {
        this.url = "./Login.vue";
      } else {
        alert("您填写的信息有误");
      }
    }
  }
});
</script>


<style lang="scss" scoped>
@import url(../css/base.css);
html {
  font-size: 62.5%;
}
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
  width: 80%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
}
.marBott {
  padding-top: 6rem;
}
.errorinfo {
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: red;
  line-height: 2.4rem;
}
.main {
  width: 90%;
  padding: 5%;
}

.main input.num,
.main input[type="password"] {
  display: block;
  width: 94%;
  /*margin-bottom: 5%;*/
  border: solid 0.1rem #cdcdcd;
  padding: 5% 3%;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.main .pass1 {
  margin-bottom: 2%;
}
.main .code {
  /*margin-bottom: 2%;*/
  overflow: hidden;
  height: 4.3rem;
  position: relative;
}
.main .code .codeHand {
  position: absolute;
  left: 0;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  line-height: 4.3rem;
}
.main .code .codeGet {
  float: right;
}
.main .code .codeHand,
.main .code .codeGet {
  width: 50%;
  height: 4.3rem;
}
.main .code .before {
  // background:url(../assets/hand.png) center center no-repeat #333;
}
.main .code .after {
  background: #333;
}
.main .code .codeGet {
  background: url(../assets/handBg.png) right center no-repeat;
  background-size: 100% 100%;
  color: #333;
  font-size: 1.15rem;
  text-align: center;
  line-height: 4.3rem;
  float: right;
}
.main .code .codeHand {
  background-size: 3.6rem;
}
.main .validCode {
  position: absolute;
  height: 4.1rem;
  left: 0;
  color: #999;
  font-size: 1.2rem;
  width: 50%;
  border: solid 0.1rem #cdcdcd;
  display: block;
  padding-left: 3%;
}
.main .validCodePadding {
  padding-left: 0;
}
.main .help {
  font-size: 1rem;
  color: #999;
  display: block;
}

.main a.login {
  display: block;
  width: 94%;
  background: #999;
  padding: 4.5% 3%;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.main .agree p {
  text-align: left;
  font-size: 1rem;
}

.checkSty {
  width: 1.4rem;
  height: 1.4rem;
  float: left;
  cursor: pointer;
  margin: 0rem 0.7rem 0 0;
  text-align: center;
  // background: url(../assets/input.png) 0 0 no-repeat;
  background-size: 100%;
}
.checkClass {
  opacity: 0;
  cursor: pointer;
  filter: alpha(opacity=0);
}
.main p {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.2rem;
  color: #999;
}

.main .cooperation {
  margin-bottom: 5%;
}

.main p a {
  font-size: 1.2rem;
  color: #999;
}

.main p a:nth-child(1) {
  color: blue;
}

.main p a:nth-child(2) {
  float: right;
}

.main .loginIcon {
  width: 100%;
  overflow: hidden;
  margin-left: 6%;
  margin-bottom: 10%;
}

.main .loginIcon img {
  float: left;
  width: 16%;
  margin: 3%;
}

.main .service {
  font-size: 1.1rem;
}
.main .codebot {
  margin-bottom: 5%;
}
.agree {
  line-height: 1.4rem;
}
</style>
