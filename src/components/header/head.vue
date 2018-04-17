<template>
	<div class="layui-header layui-row">
	    <!-- 头部区域（可配合layui已有的水平导航） -->
	    <div class="top-logo-box layui-col-sm2">
	    	<router-link to="/">
	    		<i class="layui-icon">&#xe62e;</i><span>pizza点餐系统</span>
	    	</router-link>
	    </div>
	    <ul class="layui-nav layui-col-sm4 layui-menu">
	        <li class="layui-nav-item"><router-link to="/">主页</router-link></li>
	        <li class="layui-nav-item"><router-link :to="{name:'pizzaMenu'}">菜单</router-link></li>
	        <li class="layui-nav-item"><router-link :to="{name:'manage'}">商品管理</router-link></li>
	        <li class="layui-nav-item"><router-link :to="{name:'aboutUs'}">关于我们</router-link></li>
	    </ul>
	    <ul class="layui-nav layui-layout-right layui-col-sm3 layui-manage">
	        <li class="layui-nav-item">
	        	<a href="javascript:;">
	              <img src="../../assets/images/头像.jpg" height="100%" width="100%" class="layui-nav-img">
	          秋叶
	        	</a>
		        <dl class="layui-nav-child">
		          <dd><a href="">基本资料</a></dd>
		          <dd><a href="">安全设置</a></dd>
		        </dl>
	        </li>
	        <li class="layui-nav-item"><router-link to="/login">退了</router-link></li>
	    </ul>
  </div>
</template>
<script>
	export default {
		name:"head-top"
	}
</script>
<style scoped>
	.layui-header{
		background: #393D49;
		height: 60px;
	}
	.layui-menu{
		min-width: 370px;
	}
	.layui-manage{
		min-width: 250px;
	}
	.title{
		color:#fff;

	}
	.top-logo-box{
		text-align: center;
		height: 100%;
		box-sizing: border-box;
	}
	.top-logo-box span{
		color:#fff;
		font-size: 20px;
		line-height: 60px;
	}
	.top-logo-box i{
		color: #9bc9f1;
		font-size: 30px;
		padding: 0 5px;
		line-height: 60px;
	}
</style>