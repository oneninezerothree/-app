<template>
<div class="head">
			<header>
				<h1><img onclick="location.href='../index.html'" src="../assets/logo.png"></h1>
				<a href="search.html">搜索你感兴趣的内容 </a>
			</header>
			<div class="classifyHead" >
				<div class="inClassify" id="listhead" v-on:click="click">
					<span class="inClassifyTitAct" id="listheadL">分类</span>
					<strong>|</strong>
					<span class="" id="listheadR">品牌</span>
				</div>
			</div>
		</div>
</template>
<script>
export default {
    methods:{
    click:function(e){
        if(e.target.id=="listheadL"){
            e.target.parentNode.children[0].className="inClassifyTitAct"
            e.target.parentNode.children[2].className=""
            var listbodyL =document.getElementById("listbodyL")
            var listbodyR =document.getElementById("listbodyR")
            listbodyL.className="inClassifyCon inClassifyConAct"
            listbodyR.className="inClassifyBrand " 
            console.log(this.akg)
        }
        if(e.target.id=="listheadR"){
            e.target.parentNode.children[0].className=""
            e.target.parentNode.children[2].className="inClassifyTitAct"
            var listbodyL =document.getElementById("listbodyL")
            var listbodyR =document.getElementById("listbodyR")
            listbodyR.className="inClassifyBrand inClassifyConAct"
            listbodyL.className="inClassifyBrand "
        }
    },
    },

}
</script>
<style lang="scss" scoped>
.head {
    z-index: 999;
    position: fixed;
    background: white;
    width: 100%;
}
header {
    width: 100%;
    height: 4.0rem;
    overflow: hidden;
    padding: 0.5rem 0;
    background: white;
    margin-top:-100px;
    border-bottom: solid 0.1rem #ccc;
}
header h1 {
    float: left;
    display: inline-block;
    width: 20%;
    height: 4.0rem;
    text-align: center;
}
header h1 img {
    width: 3.0rem;
    height: 3.0rem;
    margin: 0.5rem auto;
}
header a {
    float: left;
    display: inline-block;
    height: 2.6rem;
    line-height: 2.6rem;
    width: 60%;
    font-size: 1.2rem;
    padding-left: 3.2rem;
    border: solid 1px #666;
    border-radius: 2.0rem;
    color: #999;
    background: 0.5rem 0.5rem no-repeat;
    background-size: 1.6rem;
    margin: 0.5rem 0;
}
a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
}
.classifyHead {
    width: 100%;
}
.classifyHead .inClassify {
    width: 100%;
    height: 3.1rem;
    color: #666;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background:white;
}
.classifyHead .inClassify span.inClassifyTitAct {
    border-bottom: solid 0.2rem #ff3333;
    color: #ff3333;
}

.classifyHead .inClassify strong {
    display: inline-block;
    margin-top: 0.5rem;
}
.classifyHead .inClassify span {
    width: 46.5%;
    line-height: 3.0rem;
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
    flex: auto;
}
strong {
    font-weight: normal;
    font-size:18px;
}
    
</style>
