<template>
	<div id="home-box" :style="{height:bgHeight + 'px'}">
		<div class="cover-box">
			<div id="go-menu-box">
				<p class="content-title-top">Welcome to taste pizza</p>
				<p class="content-title-bottom">You're going to like it !</p>
				<router-link :to='{name:"pizzaMenu"}'>
					<button class="layui-btn" id="go-menu-btn">let's go !</button>
				</router-link>
			</div>
		</div>
		<img id="bg-img" src="../../assets/images/bg-3.jpg" height="auto"  width="100%" alt="">
	</div>	
</template>
<script>
	export default {
		name:"name",
		data(){
			return {
				bgHeight:""
			}
		},
		mounted(){
			this.bgHeight = document.documentElement.clientHeight-60;
			var box = document.getElementById('home-box');
			var img = document.getElementById('bg-img');
			box.onmouseenter = function(){
				img.style.transition = 'all 1s';
				img.style.transform = 'scale(1.1)';	
			}
			box.onmouseleave = function(){
				/*img.removeAttribute('style','transition: all 0.6s;transform: scale(1.1);');*/
				img.style.transition = 'all 1s';
				img.style.transform = 'scale(1)';					
			}
			
		}
	}
</script>
<style scoped>
	#home-box{
		overflow: hidden;
		position: relative;
	}
	.cover-box{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		z-index: 1000;
		background: rgba(0,0,0,.2);
	}
	#go-menu-box{
		width: 40%;
		height: 200px;
		min-width: 500px;
		background: rgba(255,255,255,.5);
		margin: 10% auto;
	}
	.content-title-top{
		color: #393d49;
		font-size: 40px;
		padding: 30px 0 10px;
	}
	.content-title-bottom{
		color: #393d49;
		font-size: 30px;
		padding-bottom: 20px;
	}
	#go-menu-btn{
		padding: 0 30px;
	}
</style>