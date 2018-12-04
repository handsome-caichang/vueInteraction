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
							<input type="text" placeholder="请输入手机号进行验证" autocomplete="new-password" id="mobile" maxlength="11">
						</div><span class="msg">
							<i></i><font></font>
						</span>
					</div>
                    <div class="u-input">
					<label>密码</label><!--
					--><div class="inputWrapper">
						<input type="password" placeholder="4-20个字符，区分大小写" autocomplete="new-password" id="pwd" onpaste="return false;" maxlength="20">
						<i class="vis z-on"></i>
					</div><!--
					--><span class="msg">
						<i></i><font></font>
					</span>
				</div>
                <div class="u-input">
                    <label>验证码</label><div class="inputWrapper">
                        <input class="short" type="text" placeholder="请输入短信验证码" autocomplete="off" id="mobileCode" maxlength="4">
                        <button class="button" id="mobileCodeBtn">获取验证码</button>
                    </div><span class="msg">
                        <i></i><font id="mobileCodeMsg"></font>
                    </span>
                </div>
                <div id="resendNotice2" class="u-resendNotice" style="display: none;">
                    若仍未收到验证码，请点击> <a target="_blank" href="/qq.jsp?s=209">联系客服</a>
                </div>
				</div>
                <div class="codeTips">
                    <span class="codeTips-triangle-tips"></span>
                    <span class="tips" style="padding-top: 17px;">无法获取手机验证码？请</span>
                    <span class="tips">1.确认手机号码无欠费</span>
                    <span class="tips">2.打开“飞行模式”</span>
                    <span class="tips">3.静候 2 秒关闭“飞行模式”</span>
                    <span class="tips">4.在此获取验证码</span>
                    <span class="tips">或者，电话联系客服：400-039-9000</span>
                </div>
				<div class="regService">
					<!-- <label>
						<label class="u-checkBox">
							<input type="checkbox" id="agree"><i></i>
						</label>
						我同意<a href="http://www.fkw.com/contract.html" target="_blank" rel="nofollow">《凡科网平台注册协议》</a>
					</labe> -->
				</div>
			</div>
			<div class="bottomBar">
				<font class="msg" id="regMsg"></font>
				<button class="u-bigBtn" id="regBtn">免费注册</button>
			</div>
			<div class="toLogin">
				已有帐号？<a hidefocus="true" href="/login" >直接登录</a>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        name: 'register'
    }
</script>
<style scoped>
  @import './register.scss';
    
</style>
