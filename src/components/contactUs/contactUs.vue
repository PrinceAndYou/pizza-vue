<template>
	<div class="contactUs">
		<div class="layui-row">
			<div class="layui-col-xs1 layui-col-xs-offset1 contact-label">
				联系商家:
			</div>
			<div class="layui-col-xs7 contact-val">
				{{ phone }}
			</div>			
		</div>
		<div class="layui-row">
			<div class="layui-col-xs1 layui-col-xs-offset1 contact-label">
				店铺名称:
			</div>
			<div class="layui-col-xs7 contact-val">
				{{ shopName }}
			</div>			
		</div>	
		<div class="layui-row">
			<div class="layui-col-xs1 layui-col-xs-offset1 contact-label">
				商铺地址:
			</div>
			<div class="layui-col-xs7 contact-val">
				{{ adress }}
			</div>			
		</div>		
	</div>
</template>
<script>
	export default{
		name:"contactUs",
		data(){
			return {
				phone: 13095519555,
				shopName: 'pizza之家',
				adress: '近江时代大厦C座1101'
			}
		}
	}
</script>
<style scoped>
	.contactUs .layui-row{
		line-height: 30px;
	}
	.contactUs .layui-row>div{
		font-size: 16px;
	}
</style>