<template>
	<div class="bgdiv">
		<div class="login-t">
			欢迎登录xx管理系统
		</div>
		<div class="login-form">
			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" label-position="top" class="demo-ruleForm">
				<el-form-item label="用户名" prop="account">
					<el-input v-model="ruleForm2.account"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm2.pass"></el-input>
				</el-form-item>
				<div class="login-bt">
					<el-form-item>
						<el-button @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="submitForm('ruleForm2')" :loading="loading">登录</el-button>
					</el-form-item>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			var validateAccount = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					account: '',
					pass: ''
				},
				rules2: {
					account:[
					{ validator: validateAccount, trigger: 'blur' }
					],
					pass:[
					{ validator: validatePass, trigger: 'blur' }
					]
				},
				loading:false,
				userInfo:{}
			};
		},
		methods: {
			//查询用户信息
			getUserInfo: function(account, pwd) {
				console.log(account)
				console.log(pwd)
				this.$axios.post('https://localhost:8888/user', {
					username: account,
					pwd: pwd
				})
				.then(response => {
					console.log(response);
					this.userInfo = response.data.userInfo;
					if(this.userInfo!=null && this.userInfo._id!=null){
						sessionStorage.setItem("user",JSON.stringify(this.userInfo));
						console.log(this.userInfo)
						var redirect = decodeURIComponent(this.$route.query.redirect || '/');
						window.location.href=redirect
						// this.$router.push({
						// 	path: redirect
						// }); 
					}else{
						this.loading = false;
						alert('密码错误或用户不存在');
					}
				})
				.catch(response => {
					console.log(response);
				})
			},
			submitForm(formName) {
				this.loading = true;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.getUserInfo(this.$refs[formName].model.account, this.$refs[formName].model.pass);
					} else {
						console.log('error submit!!');
						this.loading = false;
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style type="text/css">
	body {
		background: url(/static/bg.jpg) no-repeat top center;
	}
	
	.bgdiv{
		width: 500px;
		margin: 250px auto;
		border: 1px solid #8c96a4;
		border-radius: 5px;
	}
	.login-t{
		height: 60px;
		border-bottom: 1px solid #8c96a4;
		text-align: center;
		line-height: 62px;
		color: white;
		font-weight: bold;
		font-size: 20px;
	}
	.login-form{
		width: 400px;
		margin: 20px auto;
	}
	.login-bt{
		float: right;
	}
	.el-form-item__label{
		color:white;
	}

</style>