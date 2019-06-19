<template>
  <div id="car">
    <header>
      <a class="return" href="/home">
        <img src="../assets/return.png">
      </a>
      <p class="tit">购物车</p>
    </header>
    <div class="marBott"></div>
    <div class="nullCommodity" :style="nullshop?'display:block':''">
      <img src="../assets/shoppingCartBg.png">
      <p>没有相关商品</p>
      <a href="/" class="hotTit">
        ————
        <span>去逛逛“爆款单品”吧~</span> ————
      </a>
      <div class="commodity">
        <ul class="inCommodity"></ul>
      </div>
    </div>
    <!-- 商品内容 -->
    <div class="main">
      <div class="shoppingCart parent1" style="display: block;">
        <div class="checkAll" :style="!nullshop?'display:block':'display:none'">
          <div class="checkAllSty">
            <span class="titOne" @click="selectedall" :class="{active:checkbool}">
              <input class="checkClass" id="inCheckAll_1" type="checkbox">
            </span>
            <span class="profrom"></span>
          </div>
          <button @click="bool=!bool" v-text="bool?'编辑':'完成'"></button>
        </div>
        <!-- 商品信息 -->
        <div class="inShoppingCart" v-for="(g,index) in goods" :key="index">
          <div class="inShoppingCartList">
            <div class="open">
              <div
                class="listOne"
                :class="{active:g.selected}"
                @click=" g.selected = !g.selected ;selected(g.id,g.selected)"
              >
                <input class="checkClass" name="subBox1" type="checkbox">
              </div>
              <a href="javascript:">
                <div class="inShoppingCartCont">
                  <img :src="require('../images/index' + g.img +'.jpg')">
                  <!-- :src="require('../images/index' + id +'.jpg')" -->
                  <div class="inShoppingCartTxt">
                    <p class="tit" v-if="bool">{{'【'+ g.info[0].split(' ')[0] + '】' + g.info[1]}}</p>
                    <div class="edit" v-if="!bool">
                      <input
                        class="cut"
                        type="button"
                        value="-"
                        @click="prev(g.id,g.count,index)"
                        v-bind:disabled="g.count === 1"
                      >
                      <input
                        class="num"
                        type="text"
                        ref="values"
                        :value="g.count"
                        @change="val(g.id,g.count,index)"
                      >
                      <input class="add" type="button" value="+" @click="next(g.id,g.count,index)">
                    </div>
                    <p>
                      <span class="free">包邮</span>
                      <span class="number" v-if="bool">
                        X
                        <label>{{g.count}}</label>
                      </span>
                    </p>
                    <span class="price">
                      ￥
                      <label>{{g.info[2].split('￥')[1]}}</label>
                      <s>￥{{g.info[2].split('￥')[2]}}</s>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div class="close" v-if="!bool" @click="del(g.id)">删除</div>
          </div>
        </div>
      </div>
      <!-- 商品 -->
    </div>
    <!-- 总价 -->
    <div class="total">
      <div class="inTotal">
        <div class="totalCheckAll">
          <span class="checkSty titAll" @click="selectedall" :class="{active:checkbool}">
            <input class="checkClass" id="inTotalCheckAll" type="checkbox" value>
          </span>
          <span>全选</span>
        </div>
        <div class="allPrice">
          <p>
            合计：
            <span>{{priceall}}</span>
          </p>
          <p>(不含运费)</p>
        </div>
        <input type="button" class="copy" value="结算">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      id: "",
      num: 1,
      nullshop: false,
      bool: true,
      checkbool: true,
      goods: this.$store.state.goodsList,
      check_goods: [],
      re: "",
      priceall: 0
    };
  },
  methods: {
    //改变商品数量
    val(id, count, index) {
      this.$refs.values[index].value;
      this.$store.commit("updataCar", {
        id: id,
        count: this.$refs.values[index].value
      });
      this.price();
    },
    //加
    next(id, count, index) {
      this.$refs.values[index].value++;
      this.$store.commit("updataCar", {
        id: id,
        count: this.$refs.values[index].value
      });
      this.price();
    },
    //减
    prev(id, count, index) {
      this.$refs.values[index].value--;
      this.$store.commit("updataCar", {
        id: id,
        count: this.$refs.values[index].value
      });
      this.price();
    },
    //删除
    del(id) {
      let delshop = confirm("你确定要删除此商品吗？");
      if (delshop) {
        this.$store.commit("removeFormCar", id);
        this.price();
        alert('删除商品成功');
      }
    },
    //选中单个
    selected(id, selected) {
      this.$store.commit("removeFormCar", { id: id, selected: selected });

      this.checkbool = this.goods.every(item => {
        if (item.selected) {
          return true;
        }
      });
      this.price();
    },
    //全选
    selectedall() {
      if (this.checkbool) {
        this.goods.forEach(item => {
          item.selected = false;
        });
        this.checkbool = !this.checkbool;
      } else {
        this.goods.forEach(item => {
          item.selected = true;
        });
        this.checkbool = !this.checkbool;
      }
      this.price();
    },
    //计算总价
    price() {
      this.priceall = 0;
      this.goods.forEach(item => {
        if (item.selected) {
          this.priceall += parseInt(item.info[2].split("￥")[1] * item.count);
          return true;
        }
      });
    }
  },
  created() {
    this.$store.state.count = 1;
    if (this.goods.length) {
      this.nullshop = false;
    } else {
      this.nullshop = true;
    }
    return (this.checkbool = this.goods.every(item => {
      if (item.selected) {
        this.priceall += parseInt(item.info[2].split("￥")[1] * item.count);
        return true;
      }
    }));
  },
  computed: {
    //   //总价
    //   total_price() {
    //     let price = 0;
    //     this.check_goods.forEach(item => {
    //       //总价 = 价格 * 数量
    //       price += Number(item.price) * Number(item.num);
    //     });
    //     return price;
    //   },
    //   total_num() {
    //     let t_num = 0;
    //     this.check_goods.forEach(item => {
    //       t_num += Number(item.num);
    //     });
    //     return t_num;
    //   },
    //   goodsList() {
    //     return this.$store.state.goodsList;
    //   }
  },

  watch: {}
});
</script>


<style lang="scss" scoped>
@import url(../css/base.css);
.active {
  background-image: url(../assets/input_on.png) !important;
}
html,
body {
  background: #f3f3f3;
}
header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  z-index: 20;
  top: 0;
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
header p {
  float: left;
  display: inline-block;
  width: 40%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
  margin: 0 20%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.marBott {
  margin-top: 5.1rem;
}
.nullCommodity {
  width: 100%;
  margin: 5% 0%;
  display: none;
}
.nullCommodity img {
  margin: 20% auto 0;
  height: 10rem;
}
.nullCommodity p {
  text-align: center;
  line-height: 3.5rem;
  font-size: 1rem;
  color: #ccc;
}

.hotTit {
  display: block;
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  padding: 2% 0;
  font-size: 1.2rem;
  color: #333;
}

.hotTit span {
  border: solid 0.1rem #333;
  padding: 3% 8%;
}
.shoppingCart {
  background: white;
  margin-top: 1rem;
}
.shoppingCart .checkAll {
  width: 90%;
  padding: 0 5%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.1rem;
  color: #333;
  border-bottom: 0.1rem solid #ccc;
}
.titOne,
.listOne,
.titAll {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  cursor: pointer;
  margin: 0.7rem 0.7rem 0 0;
  text-align: center;
  background: url(../assets/input.png) 0 0 no-repeat;
  background-size: 100%;
}
.profrom {
  float: left;
}
.checkClass {
  opacity: 0;
  cursor: pointer;
  filter: alpha(opacity=0);
}
.shoppingCart .checkAll button {
  float: right;
  background: transparent;
  font-size: 1.1rem;
  height: 3rem;
  line-height: 3rem;
  color: #333;
  width: 5rem;
}
.inShoppingCart {
  width: 100%;
  padding: 0 1rem 0 1.5rem;
  overflow: hidden;
  background: white;
}
.inShoppingCartList {
  padding: 3% 0% 0% 0%;
  overflow: hidden;
  position: relative;
  height: 8.5rem;
}
.open {
  width: 100%;
  background: white;
  position: absolute;
  left: 0%;
  z-index: 11;
}
.titOne,
.listOne,
.titAll {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  cursor: pointer;
  margin: 0.7rem 0.7rem 0 0;
  text-align: center;
  background: url(../assets/input.png) 0 0 no-repeat;
  background-size: 100%;
}

.checkClass {
  opacity: 0;
  cursor: pointer;
  filter: alpha(opacity=0);
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.inShoppingCart .inShoppingCartCont {
  width: 90%;
  border-bottom: 0.1rem solid #ccc;
  float: right;
  padding-bottom: 5%;
}
.inShoppingCart .inShoppingCartTxt {
  width: 60%;
  float: left;
  text-align: left;
}
.inShoppingCart img {
  width: 6rem;
  height: 7rem;
  margin-right: 3%;
  border: 0.1rem solid #ddd;
  float: left;
}
.inShoppingCart .inShoppingCartTxt p.tit {
  width: 100%;
  color: #666;
  font-size: 1.2rem;
  line-height: 1.5rem;
  height: 3rem;
  overflow: hidden;
}
.inShoppingCart .inShoppingCartTxt p span.free {
  color: #333;
  padding: 1% 3%;
  display: inline-block;
  margin: 1% 20px;
  font-size: 1.1rem;
}
.inShoppingCart .inShoppingCartTxt p span.number {
  color: #333;
  padding: 1% 3%;
  float: right;
}
.inShoppingCart .inShoppingCartTxt span.price {
  font-size: 1.1rem;
  color: #ff3333;
  overflow: hidden;
  padding-bottom: 3%;
}
.inShoppingCart .inShoppingCartTxt span.price s {
  color: #666;
  padding-left: 5%;
  font-size: 1rem;
}
.close {
  width: 13%;
  background: #ff3333;
  position: absolute;
  right: 2rem;
  z-index: 15;
  color: white;
  text-align: center;
  line-height: 8rem;
}
.inShoppingCartTxt .edit button {
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  float: left;
  margin-right: 0.2rem;
  border: 1px solid gray;
  background: white;
}
.inShoppingCartTxt .edit input {
  width: 5rem;
  height: 3.3rem;
  text-align: center;
  line-height: 3rem;
  float: left;
  margin-right: 0.2rem;
  border: 1px solid gray;
}
.inShoppingCartTxt .edit .cut,
.inShoppingCartTxt .edit .add {
  width: 3rem;
  height: 3.5rem;
  text-align: center;
  line-height: 3rem;
  float: left;
  margin-right: 0.2rem;
  border: 1px solid gray;
  background: white;
}
.total {
  width: 90%;
  padding: 3% 5%;
  position: fixed;
  bottom: 4.8rem;
  border-top: solid 0.1rem #ccc;
  color: #666;
  z-index: 99;
  opacity: 0.8;
  background: #f3f3f3;
}
.total .totalCheckAll {
  width: 20%;
  float: left;
  font-size: 1.2rem;
}
.total .allPrice {
  width: 50%;
  float: left;
}
.titOne,
.listOne,
.titAll {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  cursor: pointer;
  margin: 0.7rem 0.7rem 0 0;
  text-align: center;
  background: url(../assets/input.png) 0 0 no-repeat;
  background-size: 100%;
}
.total .totalCheckAll span:nth-child(2) {
  margin: 0.7rem 0.7rem 0 0;
  display: inline-block;
}
.total .allPrice {
  width: 50%;
  float: left;
}
.total .allPrice p {
  width: 70%;
  text-align: right;
  font-size: 1.1rem;
}
.total .allPrice p:nth-child(1) span {
  font-size: 2rem;
  color: #333;
}
.total .copy {
  width: 30%;
  height: 3.5rem;
  background: #ff3333;
  color: white;
  font-size: 1.5rem;
  font-family: "微软雅黑";
  float: right;
}
</style>
