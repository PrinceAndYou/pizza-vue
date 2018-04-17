<template>
	<div class="layui-row">
		<div class="layui-form layui-col-lg4">
			<div class="logo-box">
				<img src="../../assets/images/logo.jpg" width="300" alt="">
			</div>
			<div class="layadmin-user-login-box layadmin-user-login-body layui-form">
		        <div class="layui-form-item">
		            <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="LAY-user-login-username"></label>
		            <input v-model="user.uname" type="text" name="username" id="LAY-user-login-username" lay-verify="required" placeholder="用户名" class="layui-input">
		        </div>
		        <div class="layui-form-item">
		            <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-password"></label>
		            <input v-model="user.password" type="password" name="password" id="LAY-user-login-password" lay-verify="required" placeholder="密码" class="layui-input">
		        </div>
		        <div class="layui-form-item" style="margin-bottom: 20px;">
		            <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
		            <a href="forget.html" class="layadmin-user-jump-change layadmin-link" style="margin-top: 7px;">忘记密码？</a>
		        </div>
		        <div class="layui-form-item">
		            <button @click="commitLogin" class="layui-btn layui-btn-fluid" lay-submit="" lay-filter="LAY-user-login-submit">登 入</button>
		        </div>
		        <div class="layui-trans layui-form-item layadmin-user-login-other">
		          <label>社交账号登入</label>
		          <a href="javascript:;"><i class="layui-icon layui-icon-login-qq"></i></a>
		          <a href="javascript:;"><i class="layui-icon layui-icon-login-wechat"></i></a>
		          <a href="javascript:;"><i class="layui-icon layui-icon-login-weibo"></i></a>
		          
		          <a href="reg.html" class="layadmin-user-jump-change layadmin-link">注册帐号</a>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
	import api from '../../api/api'
	export default {
		data (){
			return {
				user:{
					uname:'',
					password:''
				}
			}
		},
		// beforeRouteEnter(to,from,next){
		// 	next(vm => {
		// 		vm.$store.dispatch("setUser",null);
		// 	});
		// },
		methods:{
			commitLogin(){
				api.login(this.user).then(res=>{
					console.log(res);
					if(res.userName){
						// this.$store.dispatch("setUser",res.userName);
						// this.$store.push({name:"HomeLink"});
						this.$router.push({path:'/'})
					}else{
						alert('用户密码错误');
						// this.$store.dispatch("setUser",null);
					}
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>
<style scoped>
	.layui-form{
		margin:0 auto;
		float: none;
	}
	.layadmin-user-login-body .layui-form-item{
		position: relative;
	}
	.layadmin-user-login-body .layui-input{
		padding-left: 38px;
	}
	.layadmin-user-login-icon{
		position: absolute;
	    left: 1px;
	    top: 1px;
	    width: 38px;
	    line-height: 36px;
	    text-align: center;
	    color: #d2d2d2;
	}
	.layui-form-checkbox[lay-skin=primary]{
		float: left;
	}
	.layadmin-user-jump-change {
    	float: right;
	}
	.layadmin-link {
	    color: #029789!important;
	}
</style>