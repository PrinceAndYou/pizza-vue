<template>
	<div id="manage" class="layui-row layui-col-space10">
		<div class="add-box layui-col-lg8">
			<h1>添加新的Pizza种类</h1>
			<form class="layui-form">
				<div class="layui-form-item">
				    <label class="layui-form-label">品种</label>
				    <div class="layui-input-block">
				     	<input type="text" v-model="newPizza.type" autocomplete="off" placeholder="请输入Pizza种类" class="layui-input">
				    </div>
			    </div>
				<div class="layui-form-item">
				    <label class="layui-form-label">描述</label>
				    <div class="layui-input-block">
				      	<textarea placeholder="请添加说明" v-model="newPizza.description" class="layui-textarea"></textarea>
				    </div>
			    </div>
			    <h3>尺寸1</h3>
				<div class="layui-form-item">
				    <label class="layui-form-label">尺寸</label>
				    <div class="layui-input-block">
				      	<input type="text" v-model="newPizza.size1" autocomplete="off" placeholder="请输入Pizza尺寸" class="layui-input">
				    </div>
			    </div>
				<div class="layui-form-item">
				    <label class="layui-form-label">价格</label>
				    <div class="layui-input-block">
				      	<input type="text" v-model="newPizza.price1" autocomplete="off" placeholder="请输入Pizza尺寸" class="layui-input">
				    </div>
			    </div>
				<h3>尺寸2</h3>
				<div class="layui-form-item">
				    <label class="layui-form-label">尺寸</label>
				    <div class="layui-input-block">
				      	<input type="text" v-model="newPizza.size2" autocomplete="off" placeholder="请输入Pizza尺寸" class="layui-input">
				    </div>
			    </div>
				<div class="layui-form-item">
				    <label class="layui-form-label">价格</label>
				    <div class="layui-input-block">
				      	<input type="text" v-model="newPizza.price2" autocomplete="off" placeholder="请输入Pizza尺寸" class="layui-input">
				    </div>
			    </div>
			    <input type="button" class="layui-btn" id="add-btn" @click="addPizza()" value="添加">    			    
			</form>
		</div>
		<div class="menu-box layui-col-lg4">
			<h1>菜单管理</h1>
			<p class="menu-top">
				<span class="left">品种</span>
				<span class="right">删除</span>
			</p>
			<ul class="menu-list">
				<li v-for="item in menuList">
					<span class="left">{{ item.type }}</span>
					<span class="right" @click="deletePizza(item)"><i class="layui-icon">&#x1006;</i></span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import api from '../../api/api'
	export default {
		name: 'manage',
		data(){
			return {
				menuList: [],
				newPizza: {}
			}
		},
		created(){
			this.searchPizzaData();
		},
		methods:{
			searchPizzaData(){
				api.searchPizza().then(res=>{
					if(res.state=="success"){
						this.menuList = res.content;
					}
				})				
			},
			deletePizza(data){
				var _this = this;
				layer.open({
					title:'提示',
				    content: '确定要删除此类型吗？',
				    skin: 'layui-layer-demo',
				    anim: 1,
  					shadeClose: true, //开启遮罩关闭
				    btn: ['确定', '取消'],
				    yes: function(index, layero){
						api.deletePizza({id:data.id}).then(res=>{
							_this.searchPizzaData();//加载菜单
							layer.msg('删除成功');
						}, err=>{
							console.log(err);
						})
				    },
				    no: function(index, layero){
				    
				    }
				});
			},
			addPizza(){
				api.addPizza(this.newPizza).then(res => {
					if (res.state=="success") {
						layer.msg('添加成功');
						this.newPizza = {};//清空表单
						this.searchPizzaData();//加载菜单

					}
				}, err => {
					console.log(err);
				})
			}
		}
	}
</script>
<style scoped>
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	#manage{
		width: 70%;
		margin: 0 auto;
	}
	.layui-form .layui-form-item{
		margin-bottom: 30px;
	}
	h1{
		line-height: 100px;
	}
	h3{
		line-height: 35px;
	}
	#add-btn{
		padding: 0 100px;
		background: #393D49;
	}
	.menu-top{
		height: 40px;
		border-top: 1px solid #ccc;
	}
	.menu-list li{
		overflow: hidden;
		border-top: 1px solid #ccc;
	}
	.menu-top span{
		line-height: 40px;
		padding: 0 20px;
		font-size: 17px;
		font-weight: 600;
	}
	.menu-list span{
		line-height: 40px;
		padding: 0 20px;
		font-size: 15px;
	}
</style>