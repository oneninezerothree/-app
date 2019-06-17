<template>
<div id="bigbox">
    <header>
    <a class="return"><img src="../assets/return.png"></a>
    <div class="search">
        <a href=""></a>
        <form action="">
        <input class="searchTxt" type="search" id="searchtext" value="">
        </form>
        <a class="deleteBtn" v-on:click="searchac">搜索</a>
    </div>
    </header>
    <div class="lastSearch">
        <div class="lastSearchTit">
            <h2>最近搜索</h2>
            <a class="delete" style="display: none;"><img src="img/del.png"></a>
        </div>
        <div class="lastSearchList" v-for="(a,indexs) in lastsearch" v-text="lastsearch[indexs]"></div>
    </div>
    <div class="hotSearch">
        <h2 class="hotSearchTit">热门搜索</h2>
        <div class="hotSearchList">
            
        </div>

    </div>
 </div>   
</template>
<script>
 export default {
     data() {
         return {
             lastsearch:["无搜索历史"]
         }
     },
     methods: {
        searchac:function(){
            var search =document.querySelector("#searchtext")
            if(search.value){
            this.lastsearch=[...this.lastsearch,search.value]
            if(this.lastsearch.length>=5){
                 this.lastsearch.splice(0,1)
            }
         }}
     },
  
 }
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 4.0rem;
    overflow: hidden;
    padding: 0.5rem 0;
    background: white;
    border-bottom: 0.1rem solid #ccc;
    z-index: 999;
}
header .return {
    float: left;
    display: inline-block;
    width: 10%;
    height: 4.0rem;
    text-align: center;
}
a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
}
header .return img {
    width: 0.8rem;
    height: 1.6rem;
    margin: 1rem auto;
}
header .search {
    float: left;
    display: inline-block;
    width: 70%;
    padding-left: 3.2rem;
    border: solid 1px #666;
    border-radius: 2.0rem;
    color: #999;
    background: url(../assets/search1.png) 0.5rem 0.5rem no-repeat;
    background-size: 1.6rem;
    margin: 0.5rem;
}
header .search .searchTxt {
    float: left;
    width: 80%;
    height: 2.5rem;
    line-height: normal;
    font-size: 1.0rem;
    outline: none;
    border:0 solid red;
}
header .search .deleteBtn {
    width: 2.6rem;
    height: 2.6rem;
    line-height: 2.6rem;
    float: right;
    background: center center no-repeat;
    background-size: 70%;
}
.lastSearch, .hotSearch {
    width: 94%;
    padding: 3% 3% 0;
}

.lastSearch .lastSearchTit {
    width: 100%;
    height: 3.0rem;
}
.lastSearch .lastSearchTit h2, .hotSearchTit {
    width: 50%;
    height: 3.0rem;
    line-height: 3.0rem;
    color: #333;
    font-weight: normal;
    font-size: 1.2rem;
    float: left;
}
.lastSearch .lastSearchTit a {
    height: 3.0rem;
    float: right;
    display: block;
}
.lastSearch .lastSearchTit a img {
    width: 1.6rem;
    float: right;
    display: block;
}
.lastSearch .lastSearchList {
    width: 100%;
    color: #999999;
}
.lastSearch, .hotSearch {
    width: 94%;
    padding: 3% 3% 0;
    text-align: left;
}
.hotSearchTit {
    width: 100%;
}
#bigbox{
    position:relative;
}

</style>
