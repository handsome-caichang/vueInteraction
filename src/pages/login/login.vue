<template>
	<div class="middle">
		<div class="content">
			<div class="left">
				<a id="reg-button" class="regBtn"></a>
			</div>
			<div class="right">
				<div class="wxLoginTips"><a class="login_WeChatCode" href="javascript:;" onclick="bindWeChatLogin();" title="微信登录"></a></div>
				<div class="wxLoginTip">
					<span class="wxLoginDesc">
						<span class="login_WeChatIm" title="微信登录"></span>
						微信安全登录
						<span class='tipTriangle'></span>
						<span class='tipTriangle2'></span>
					</span>
				</div>
				<div class="acctLoginTips"><a class="login_UersCode" href="javascript:;" onclick="userLogin();"></a></div>
				<div class="userLoginDesc">
					帐号密码登录
					<span class='tipTriangle'></span>
					<span class='tipTriangle2'></span>
				</div>
				<div class="loginBody">
					<div class="wxLoginCode">
						<div class="wxLoginIframe"></div>
						<div class="login_WeChatTips">
							<span class="weChatScannerDesc">
								<span class="login_WeChatScanner" title="微信登录"></span>
							打开微信，扫一扫登录</span>
						</div>
					</div>
					<div id="normalLogin">
						<div class="righttop">
							<div class="loginTab pwdLoginTab checkLoginTab" _loginMode="pwdLogin">密码登录</div>
							<div class="loginTab codeLoginTab" _loginMode="codeLogin">短信码登录</div>
						</div>
						<div id="log-form" class="rightmid">
							<div class="pwdLoginPanel loginPanel">
								<div class="log-input-container">
									<div class="clear" style="font-size:0px;"></div>
									<div class="log-line" id="rowCacct">
										<div class="log-txt">帐号/邮箱/手机号码</div>
										<input id="log-cacct" type="text" autocomplete="off" maxlength="34" class="log-input input2" />
										<div class="logIcoNew logIcoCacct">&nbsp;</div>
									</div>
									<div class="log-line" id="rowSacct" style="display:none;">
										<div class="log-txt">员工帐号</div>
										<input id="log-sacct" type="text" autocomplete="off" maxlength="20" class="log-input input2" />
										<div class="logIcoNew logIcoSacct">&nbsp;</div>
									</div>
									<div class="log-line" id="rowPwd">
										<div id="passwordLabel" class="log-txt">密码</div>
										<input id="log-pwd" type="password" autocomplete="new-password" maxlength="20" class="log-input input2" />
										<input id='showPwd' type='txt' autocomplete='new-password' maxlength='20' class='log-input input2' />
										<div id='showPassword' class='log-showPwd loginWindowImg' _show='true'></div>
										<div class="logIcoNew logIcoPwd">&nbsp;</div>
									</div>

									<div id="log-valid-line" class="log-line" style="display:none;">
										<div class="log-txt" style="width:116px; left:12px;">验证码</div>
										<input id="log-valid" type="text" class="log-input input2" style="width:116px; padding-left:12px;" />
										<img id="log-valid-img" title="看不清？点击换一张" />
										<span id="log-refresh-btn" title="看不清？点击换一张"></span>
									</div>

								</div>
								<div class="goin1"><a href="javascript:;" onClick="openPassword();">忘记密码？</a></div>
								<div class="option" id="staff-login-option">
									<div class="goin"><input id="staff-login" class="checkBox" type="checkbox" onclick="useSacct();"/><label class="checkItemLabel"></label><label for="staff-login">使用员工帐号登录</label></div>
								</div>
								<div class="option">
									<div class="goin"><input id="auto-login" class="checkBox" type="checkbox"/><label class="checkItemLabel"></label><label for="auto-login">两周内自动登录</label></div>
								</div>
							</div>
							<div class="codeLoginPanel loginPanel">
								<div class="log-line" id="mobile">
									<div class="log-txt">手机号码</div>
									<input id="log-mobile" type="text" autocomplete="off" maxlength="34" class="log-input input2" />
									<div class="logIcoNew logIcoMobile">&nbsp;</div>
								</div>
								<div class="log-line" id="mobileCode" style="width: 157px;">
									<div class="log-txt">短信码</div>
									<input id="log-mobileCode" style="width: 95px;" type="text" autocomplete="off" maxlength="4" class="log-input input2" />
									<div class="logIcoNew logIcoMobileCode">&nbsp;</div>
								</div>
								<div class="mobileCodeBtn" disabled="disabled">获取短信码</div>
								<div style="clear:both"></div>
								<div id="codeLogin-valid-line" class="log-line" style="display:none;">
									<div class="log-txt" style="width:116px; left:12px;">验证码</div>
									<input id="codeLogin-valid" type="text" class="log-input input2" style="width:116px; padding-left:12px;" />
									<img id="codeLogin-valid-img" title="看不清？点击换一张" />
									<span id="codeLogin-refresh-btn" title="看不清？点击换一张"></span>
								</div>
							</div>
							<div id="error" class="worn"></div>
							<div id="login-button" class="loginBtn">登&nbsp;&nbsp;录</div>
							<div class="clear"></div>
						</div>
					</div>
				</div>	
				<div class="login_otherAcct">
					<span class="login_other">其他帐号登录</span>
					<a class="login_QQI" href="javascript:;" onclick="bindQQAccount();" title="QQ登录"></a>
					<a class="registerHref" href="http://www.fkw.com/reg.html?_fromsite=false" onclick="Portal.logDog(4000118, 8);">立即注册</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login'
	}
</script>

<style scoped>
  @import './login.scss';
    
</style>