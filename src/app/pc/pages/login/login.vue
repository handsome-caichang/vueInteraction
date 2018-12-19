<template>
	<div class="middle">
		<div class="content">
			<div class="left">
				<span class="regBtn" @click="togoRegister"></span>
			</div>
			<div class="right">
				<div class="loginBody">
					<div class="righttop">
						<div class="loginTab pwdLoginTab checkLoginTab">密码登录</div>
					</div>
					<div class="rightmid">
						<div class="pwdLoginPanel loginPanel">
							<div class="log-input-container">
								<div class="log-line" >
									<div class="log-txt" v-if="!loginName">帐号/手机号码</div>
									<input  type="text" v-model="loginName" autocomplete="off" maxlength="34" class="log-input input2" />
									<div class="logIcoNew logIcoCacct">&nbsp;</div>
								</div>
								<div class="log-line" >
									<div  v-if="!loginPassword" class="log-txt">密码</div>
									<input type="password" v-model="loginPassword" autocomplete="new-password" maxlength="20" class="log-input input2" />
									<div class="logIcoNew logIcoPwd">&nbsp;</div>
								</div>
							</div>
						</div>
						<div class="worn" :style='{"display": errFlag ? "block": "none"}'>{{errMsg}}</div>
						<div class="loginBtn" @click="loginClick">登&nbsp;&nbsp;录</div>
						<div class="clear"></div>
					</div>
				</div>	
				<div class="login_otherAcct">
					<span class="login_other"></span>
					<a class="registerHref" @click="togoRegister" >立即注册</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {login} from 'pcApi/jie'
import { mapMutations } from 'vuex';
	export default {
		name: 'login',
		data() {
			return {
				loginName: '',
				loginPassword: '',
				errFlag: false,
				errMsg: '请输入密码'
			}
		},
		methods: {
			...mapMutations([
				'set_userInfo'
			]),
			togoRegister() {
				this.$router.push('/register')
			},
			loginClick() {
				if (!this.loginName) {
					this.errFlag = true;
					this.errMsg = '请输入账号'
				}else if(!this.loginPassword) {
					this.errFlag = true;
					this.errMsg = '请输入密码'
				}else {
					login({
						loginName:this.loginName,
						password: this.loginPassword
					}).then(res => {
						if (res.errorCode == 0) {
							this.set_userInfo(res.data);
							this.$router.replace('/home')
						}
					})
				}
			},
		}
	}
</script>

<style scoped>
  @import './login.scss';
    
</style>