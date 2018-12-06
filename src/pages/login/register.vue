<template>
    <div class="m-regForm">
		<div class="textLine">
			<span>注册用户</span>
			<span class="number">17,410,038<span class="font12">+</span></span>
			<span class="sep"></span>
			<span>安全运行</span>
			<span class="number">2986<span class="font12">天+</span></span>
			<span class="sep"></span>
			<span>覆盖行业</span>
			<span class="number">100<span class="font12">+</span></span>
		</div>
		<div class="regBox">
			<div class="content" id="contentId">
				<div class="m-mobiVerify">
					<div class="u-input">
						<label>手机号码</label><div class="inputWrapper">
							<input type="text" v-model="mobile" placeholder="请输入手机号进行验证" maxlength="11">
						</div><span class="msg" :class="{'z-err': (mobile !== '' && !tool.telReg.test(mobile)), 'hideImp': !mobile}">
							<i></i><font v-if="(mobile !== '' && !tool.telReg.test(mobile))">请输入正确的手机号码</font>
						</span>
					</div>
                    <div class="u-input">
						<label>密码</label><!--
						--><div class="inputWrapper">
							<input type="password" v-model="password" placeholder="4-20个字符，区分大小写" onpaste="return false;" maxlength="20">
						</div><!--
						--><span class="msg" :class="{'hideImp': !password, 'z-err': (password !== '' && password.length < 4 || password.length > 20)}">
							<i></i><font v-if="!(password !== '' && password.length >= 4 &&  password.length < 20)">密码由4-20个字符组成，区分大小写</font>
						</span>
					</div>
					<div class="u-input">
						<label>图片验证码</label><div class="inputWrapper picbox">
							<input  class="short" v-model="validateCode" type="text" placeholder="请输入手机号进行验证" maxlength="11">
							<div class="pic" :style="'background-image: url(https://mall.xiaogj.com/test/html/api/register/GetValidationImage?'+timeStamp+')'" @click="changeRegImage"></div>
						</div><span class="msg hideImp">
							<i></i><font></font>
						</span>
					</div>
					<div class="u-input">
						<label>短信验证码</label><div class="inputWrapper">
							<input class="short" v-model="smsCode" type="text" placeholder="请输入短信验证码" autocomplete="off" maxlength="4">
							<button class="button" @click="getSms" :disabled="sendMsg || (validateCode && !tool.telReg.test(mobile))">{{sendMsg?time+'s后重发':'获取验证码'}}</button>
						</div><span class="msg hideImp">
							<i></i><font></font>
						</span>
					</div>
				</div>
			</div>
			<div class="bottomBar">
				<button class="u-bigBtn" :disabled="bigFlag">免费注册</button>
			</div>
			<div class="toLogin">
				已有帐号？<a hidefocus="true" href="javascript:;" @click="gotoLogin">直接登录</a>
			</div>
		</div>
	</div>
</template>
<script>
	import tool from 'assets/js/tool';
    export default {
        name: 'register',
		data() {
			return {
				timeStamp: new Date().getTime(),
				mobile:'',
				smsCode:'',
				password:'',
				validateCode:'',
				tool,
				sendMsg: false,
				time: 0,
				timeout: null
			}
		},
		computed: {
			bigFlag() {
				if (!tool.telReg.test(this.mobile) || this.password < 4 || !this.smsCode)  {
					return true;
				}
				return false;
			}
		},
		methods: {
			gotoLogin(){
				this.$router.push('/login')
			},
			changeRegImage(){ //换一张
				this.timeStamp = new Date().getTime();
			},
			getSms() {
				this.sendMsg = true;
				this.time = 60;
				this._beginReCheck(this.time);
				this.changeRegImage();
			},
			_phoneValidate(){ //验证手机号码
				if (!this.mobile) {
					// app.toast('info','手机号不能为空。');
					return;
				}else if(!tool.telReg.test(this.mobile)){
					// app.toast('info','手机号码格式不正确，请重新输入。');
					return;
				}
				if (!this.validateCode) {
					// app.toast('info','图片验证码不能为空。');
					return;
				}
				return true;
			},
			_beginReCheck(t){
				let $this = this;
				this.timeout = setTimeout(function () {
					if (t<=0) {
						$this._resetCode();
					}else{
						$this.time = t - 1;
						$this._beginReCheck($this.time);
					}
				},1000);
			},
			_resetCode(){ //重置倒计时的相关信息
				this.timeout&&clearTimeout(this.timeout);
				this.sendMsg = false;
			}
		},
		created() {
		}
    }
</script>
<style scoped>
  	@import './register.scss';
	
</style>
