<template>
	<div id="pizzaMenu" class="layui-row layui-col-space10">
		<div class="layui-col-lg8">
			<h2 class="menu-title">长推菜单</h2>
			<div class="layui-row menu-top">
				<div class="layui-col-xs4">
					<span>尺寸</span>
				</div>
				<div class="layui-col-xs4">
					<span>价格</span>
				</div>
				<div class="layui-col-xs4">
					<span>选单</span>
				</div>
			</div>
			<ul class="layui-row menuList">
				<li v-for="item in menuList">
					<div class="layui-row pizza-type">
						<h3 class="layui-col-xs4">{{ item.type }}</h3>
					</div>
					<div class="layui-row">
						<div class="layui-col-xs4">
							<span>{{ item.size1 }}</span>
						</div>
						<div class="layui-col-xs4">
							<span>{{ item.price1 }}</span>
						</div>
						<div class="layui-col-xs4">
							<span class="add-shop" @click="addShop({id: item.id, type: item.type, size: item.size1, price: item.price1, count: 1})"><i class="layui-icon">&#xe608;</i></span>
						</div>
					</div>
					<div class="layui-row">
						<div class="layui-col-xs4">
							<span>{{ item.size2 }}</span>
						</div>
						<div class="layui-col-xs4">
							<span>{{ item.price2 }}</span>
						</div>
						<div class="layui-col-xs4">
							<span @click="addShop({id: item.id, type: item.type, size: item.size2, price: item.price2, count: 1})" class="add-shop"><i class="layui-icon">&#xe608;</i></span>
						</div>					
					</div>		
				</li>
			</ul>
		</div>	
		<div class="layui-col-lg4">
			<h2 class="shop-title"><i class="layui-icon">&#xe698;</i></h2>
			<div class="layui-row menu-top">
				<div class="layui-col-xs3">
					<span>数量</span>
				</div>
				<div class="layui-col-xs3">
					<span>品种</span>
				</div>
				<div class="layui-col-xs3">
					<span>尺寸</span>
				</div>
				<div class="layui-col-xs3">
					<span>价格</span>
				</div>
			</div>
			<ul class="layui-row shop-list">
				<li v-for="item in shopList">
					<div class="layui-row">
						<div class="layui-col-xs3">
							<span class="count-reduce" @click="reduceCount(item)">-</span>
							<span class="pizza-count">{{ item.count }}</span>
							<span class="count-add" @click="addCount(item)">+</span>
						</div>
						<div class="layui-col-xs3">
							<span>{{ item.type }}</span>
						</div>
						<div class="layui-col-xs3">
							<span>{{ item.size }}</span>
						</div>
						<div class="layui-col-xs3">
							<span>{{ item.price }}</span>
						</div>
					</div>					
				</li>
			</ul>
			<div v-show="allPrice>0" class="layui-row all-price-box">
				<div class="layui-col-xs3">
					<span>总价格：</span><span>{{ allPrice }}</span>
				</div>
				<div class="layui-row">
					<button class="layui-btn">确认下单</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import api from '../../api/api'
	export default {
		name: 'pizzaMenu',
		data(){
			return {
				menuList: [],
				shopList: []
			}
		},
		created(){
			api.searchPizza().then(res => {
				this.menuList = res.content;
			}, err => {
				console.log(err);
			})
		},
		computed:{
			allPrice(){
				let sum = 0;
				if(this.shopList.length>0){
					for (let i = 0; i < this.shopList.length; i++) {
						sum += this.shopList[i].price;
					}
				}
				return sum;
			}
		},
		methods:{
			addShop(data){
				if(this.shopList.length>0){
					let result = this.shopList.filter(index => {
						return index.id==data.id&&index.size==data.size;
					});
					if(result.length>0){
						result[0].count++;
						result[0].price += Number(data.price);
					}else{
						data.price = Number(data.price);
						this.shopList.push(data);
					}
				}else{
					data.price = Number(data.price);
					this.shopList.push(data);
				}
			},
			reduceCount(item){
				console.log(item);
				if(item.count<=1){
					this.shopList.splice(this.shopList.indexOf(item), 1);
				}else{
					let onePrice = item.price/item.count;
					item.price -= onePrice;
					item.count--;
				}
			},
			addCount(item){
				let onePrice = item.price/item.count;
				item.price += onePrice;
				item.count++;				
			}
		}
	}
</script>
<style scoped>
	#pizzaMenu{
		width: 80%;
		margin: 0 auto;
	}
	.menuList li{
		line-height:50px;
	}
	.pizza-type h3{
		border-bottom:1px solid #ccc;
	}
	.menuList li .layui-col-xs4 span{
		line-height:30px;
		font-size:16px;
	}
	.add-shop{
		font-weight:600;
		cursor: pointer;
	}
	.add-shop .layui-icon{
		font-size: 22px;
	}
	.menu-title{
		font-weight: 600;
		line-height: 60px;
	}
	.menu-top{
		overflow: hidden;
		border-bottom: 2px solid #ccc;
	}
	.menu-top span{
		font-weight: 600;
		font-size: 16px;
		line-height: 30px;
	}
	.shop-title .layui-icon{
		font-size:23px;
		font-weight:600;
		border:2px solid #666;
		border-radius:50%;
		padding:6px 7px;
		line-height:60px;
	}
	.shop-list li{
		line-height: 60px;
		border-bottom: 1px solid #ccc;
	}
	.shop-list .layui-col-xs3 span{
		line-height:30px;
		font-size:16px;
	}
	.count-reduce,
	.count-add{
		font-size:25px;
		font-weight:600;
		border: 1px solid #ccc;
		padding: 0 5px;
		background: #ccc;
		color: #fff;
		cursor: pointer;
	}
	.pizza-count{
		line-height:30px;
		font-size:20px;	
	}
	.all-price-box{
		line-height: 40px;
	}
	.layui-btn{
		background: #393D49;
		padding: 0 50px;
	}
</style>