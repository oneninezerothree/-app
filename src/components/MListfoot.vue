<template>
    <div class="footer">		<div class="marTop"></div>
		<div id="topcontrol" title="Scroll Back to Top" style="display: block;" v-on:click="top">
			<img src="../assets/goTop.png">
		</div>
		<footer>
			<div class="inFooter">
				<p class="index">
					<a href="../index.html">
						<img class="indeximg" src="../assets/index.png">
						<span>首页</span>
					</a>
				</p>
				<p class="current">
					<a href="classify.html">
						<img src="../assets/activity.png">
						<span>分类</span>
					</a>
				</p>
				<p>
					<a href="activity.html">
						<img src="../assets/activity.png">
						<span>活动</span>
					</a>
				</p>
				<p>
					<a href="shoppingCart.html" class="shoppingcart">
						<img src="../assets/shoppingCart.png">
						<span>购物车</span>
						<label style="display: none;"></label>
					</a>
				</p>
				<p>
					<a href="userCenter.html">
						<img src="../assets/userCenter.png">
						<span>我的</span>
					</a>
				</p>				
			</div>
		</footer>
</div>
</template>
<script>
export default {
    methods: {
        top:function(){
          window.scrollTo(0,0)
        }
    },
}
</script>
<style lang="scss" scoped>
.marTop {
    margin-bottom: 5.0rem;
}
#topcontrol {
    position: fixed;
    bottom: 7rem;
    right: 1rem;
    opacity: 1;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    z-index: 1000;
    display: none;
}
footer {
    width: 100%;
}
.inFooter {
    width: 90%;
    padding: 0% 5%;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: solid 0.1rem #d1d1d1;
}
footer .inFooter p {
    -webkit-box-flex: 1.0;
    flex: auto;
    padding: 1% 0 1% 0;
}
a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
}
footer .inFooter p img {
    height: 2.5rem;
    margin: 0 auto;
}
.indeximg {
    width: 2.8rem;
}
footer .inFooter p span {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.8rem;
}
#topcontrol img{
    width: 4rem;
    height: 4rem;
  
}

</style>
