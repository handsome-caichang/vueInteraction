<template>
	<div class="middle">
		<div class="content">
			<div class="left">
				<span class="regBtn" @click="togoRegister"></span>
			</div>
			<div class="right">
				<div class="loginBody">
					<div id="normalLogin">
						<div class="righttop">
							<div class="loginTab pwdLoginTab checkLoginTab" _loginMode="pwdLogin">密码登录</div>
						</div>
						<div id="log-form" class="rightmid">
							<div class="pwdLoginPanel loginPanel">
								<div class="log-input-container">
									<div class="clear" style="font-size:0px;"></div>
									<div class="log-line" id="rowCacct">
										<div class="log-txt" v-if="!loginName">帐号/手机号码</div>
										<input  type="text" v-model="loginName" autocomplete="off" maxlength="34" class="log-input input2" />
										<div class="logIcoNew logIcoCacct">&nbsp;</div>
									</div>
									<div class="log-line" id="rowPwd">
										<div id="passwordLabel" v-if="!loginPassword" class="log-txt">密码</div>
										<input type="password" v-model="loginPassword" autocomplete="new-password" maxlength="20" class="log-input input2" />
										<!-- <input type='txt' autocomplete='new-password' maxlength='20' class='log-input input2' /> -->
										<!-- <div id='showPassword' class='log-showPwd loginWindowImg' _show='true'></div> -->
										<div class="logIcoNew logIcoPwd">&nbsp;</div>
									</div>
									<div id="log-valid-line" class="log-line" style="display:none;">
										<div class="log-txt" style="width:116px; left:12px;">验证码</div>
										<input id="log-valid" type="text" class="log-input input2" style="width:116px; padding-left:12px;" />
										<img id="log-valid-img" title="看不清？点击换一张" />
										<span id="log-refresh-btn" title="看不清？点击换一张"></span>
									</div>
								</div>
							</div>
							<div id="error" class="worn"></div>
							<div id="login-button" class="loginBtn">登&nbsp;&nbsp;录</div>
							<div class="clear"></div>
						</div>
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
	export default {
		name: 'login',
		data() {
			return {
				loginName: '',
				loginPassword: ''
			}
		},
		methods: {
			togoRegister() {
				this.$router.push('/register')
			}
		}
	}
</script>

<style scoped>
  @import './login.scss';
    
</style>