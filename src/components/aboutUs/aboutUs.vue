<template>
	<div id="aboutUs" class="layui-row">
		<div class="layui-tab-brief layui-col-md8 layui-col-md-offset2 about-tab" lay-filter="docDemoTabBrief">
		    <ul class="layui-tab-title">
			    <li class="layui-this">
					<router-link to="/history">历史订单</router-link>
				</li>
			    <li>
			    	<router-link to="/orderDocument">点餐文档</router-link>
			    </li>
			    <li>
			    	<router-link to="/expressInfo">快递信息</router-link>
			    </li>
			    <li>
			    	<router-link to="/contactUs">联系我们</router-link>
			    </li>
		    </ul>
			<div class="layui-tab-content" style="height: 100px;">
			    <router-view></router-view>
		    </div>	
		</div> 	
	</div>
</template>
<script>
	export default {
		name: 'aboutUs'
	}
</script>
<style scoped>
	#aboutUs .about-tab{
		margin-top: 20px;
		text-align: left;
	}
</style>