<template>
<div class="classify" style="display: block;">
			<ul class="inClassifyCon inClassifyConAct" id="listbodyL">
				<li class="inClassifyList" v-for="(a,indexs) in akg">
					<a class="classifyTit" href="/home/indexNav/香港直邮">
						<img class="classifyBg" src="../assets/1.png">
						<div class="classifyTitTxt"><p>{{akg[indexs].head}}-</p></div>
					</a>
					<div class="classifyTxt limitheight">
					<a v-for="(s,index) in akg[indexs].body">{{akg[indexs].body[index]}}</a></div>
				</li>
			</ul>
			<ul class="inClassifyBrand " id="listbodyR">
				<li class="inClassifyBrandList">
					<a class="classifyBrandTit" href="allClassifyBrand.html">
						<img class="classifyBg" src="../assets/brand.jpg">
						<!--<div class="classifyBrandTitTxt">
							<p>查看全部品牌</p>
						</div>-->
					</a>
					<h2>— 推荐品牌 —</h2>
					<dl>
						<dt><a>数码电器</a></dt>
						<dd>
							<a href="commodityList.html#keyname=大金"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=日立"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=松下"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=索尼"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=铁三角"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=夏普"><img src="../assets/花王.png"></a>
						</dd>
						<dt><a>营养保健</a></dt>
						<dd>
							<a href="commodityList.html#keyname=dhc"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=fancl"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=明治"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=小林制药"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=新谷酵素"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=医食同源"><img src="../assets/花王.png"></a>
						</dd>
						<dt><a href="">美妆护肤</a></dt>
						<dd>
							<a href="commodityList.html#keyname=fancl"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=HABA"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=kose"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=莎娜"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=玉之肌"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=资生堂"><img src="../assets/花王.png"></a>
						</dd>
						<dt><a href="">母婴用品</a></dt>
						<dd>
							<a href="commodityList.html#keyname=贝亲"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=固力果"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=和光堂"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=花王"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=明治"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=森永"><img src="../assets/花王.png"></a>
						</dd>
						<dt><a href="">家居生活</a></dt>
						<dd>
							<a href="commodityList.html#keyname=虎牌"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=京瓷"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=孔雀"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=三次元"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=膳魔师"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=象印"><img src="../assets/花王.png"></a>
						</dd>
						<dt><a>食品饮料</a></dt>
						<dd>
							<a href="commodityList.html#keyname=AGF"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=ROYCE"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=花田牧场"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=卡乐比"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=山本汉方"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=白色恋人"><img src="../assets/花王.png"></a>
						</dd>

						<dt><a>成人用品</a></dt>
						<dd>
							<a href="commodityList.html#keyname=jex"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=TENGA"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=TOYS-SAKAI"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=冈本"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=日暮里"><img src="../assets/花王.png"></a>
						</dd>
						<dd>
							<a href="commodityList.html#keyname=相模"><img src="../assets/花王.png"></a>
						</dd>						
					</dl>
				</li>
			</ul>
		</div>
        </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default {
 data(){
     return {akg:null,}
 },
  methods: {
    getMainInfo:function(){
    axios.get('https://www.easy-mock.com/mock/5cff6a399eef1b66cf63b376/example/query')
	.then(this.getMainInfoSucc)},
	 getMainInfoSucc:function(res){
		 this.akg=res.data
		 console.log(this.akg[0].body[0])
	 }
  },
  mounted() {
     this.getMainInfo()
  },
}
</script>
<style lang="scss" scoped>
.classify {
    margin-top: 8.2rem;
}
.classify ul.inClassifyConAct {
    display: block;
}
.classify .inClassifyCon, .classify .inClassifyBrand {
    width: 100%;
    display: none;
}
.classify .inClassifyCon .inClassifyList {
    width: 100%;
    border-bottom: solid 1.0rem #ddd;
}
.classify .inClassifyCon .inClassifyList .classifyTit, .classifyBrandTit {
    width: 100%;
    display: block;
    position: relative;
}
a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
}
.classify .inClassifyCon .inClassifyList .classifyTit img, .classifyBrandTit img {
    width: 100%;
}
.classify .inClassifyCon .inClassifyList .classifyTit .classifyTitTxt, .classifyBrandTit .classifyBrandTitTxt {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.6);
}
.classify .inClassifyCon .inClassifyList .classifyTit .classifyTitTxt :nth-child(1) {
    font-size: 1.8rem;
    margin-top: 2.8rem;
}
.classify .inClassifyCon .inClassifyList .classifyTxt {
    width: 90%;
    padding: 0 5%;
    font-size: 1.1rem;
    overflow: hidden;
}
.limitheight {
    height: 6.2rem;
}
.classify .inClassifyCon .inClassifyList .classifyTxt a {
    display: inline-block;
    text-align: left;
    margin: 0.3rem 1.5rem 0.3rem 0;
    color: #333;
}
.inClassifyBrand .inClassifyBrandList h2 {
    height: 3.6rem;
    line-height: 3.6rem;
    font-size: 1.4rem;
    font-weight: normal;
    text-align: center;
}
.inClassifyBrand .inClassifyBrandList dl {
    width: 90%;
    margin: 0 5%;
}
.inClassifyBrand .inClassifyBrandList dl dt a {
    background: #333;
    display: inline-block;
    color: white;
    padding: 1% 3%;
    margin: 3% 0;
}
.inClassifyBrand .inClassifyBrandList dl dd {
    width: 22.5%;
    margin: 0.5%;
    display: inline-block;
    width:76px;
    height:76px;
    
}
.inClassifyBrand .inClassifyBrandList dl {
     text-align:left;
}
img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    -ms-interpolation-mode: bicubic;
    display: block;
}

</style>
