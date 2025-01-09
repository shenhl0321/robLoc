// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	'zn-CN': {
		simplifiedChinese: '中文简体',
		english: '英文',
		login: '登录',
		register: '注册',
		inputMobile: '请输入手机号',
		inputPassword: '请输入密码',
		forgetPassword: '忘记密码',
		codeLogin: '验证码登录',
		getSmsCode: '获取短信验证码',
		passwordLogin: '密码登录',
		registerRightNow: '立即注册',
		certain: '确定',
		cancel : '取消',
		submit: '提交',
		save : '保存',
		loginRightNow: '立即登录',
		inputCode: '请输入验证码',
		sendCode: '发送验证码',
		codeSendTo : '验证码已发送至',
		codeError : '验证码错误，请重新输入',
		verify: '验证',
		jump : '跳过',
		
		homePage: '首页',
		startReserve: '立即预定',
		ableReserve: '可预定',
		hadReserved: '已预定',
		noReserve: '不可预订',
		windows : '靠窗',
		road : '过道',
		income : '入口',
		today : '今天',
		Monday : '周一',
		Tuesday : '周二',
		Wednesday : '周三',
		Thursday : '周四',
		Friday : '周五',
		Saturday : '周六',
		Sunday : '周日',
		seatReserve: '工位预定',
		reserveMorning: '预定上午',
		reserveNoon: '预定下午',
		reserveDay: '预定全天',
		morning: '上午',
		noon: '下午',
		allDay: '全天',
		seatNum : '工位号',
		seatStatus : '状态',
		seatCertain : '确定抢位',
		productNew: '最新产品',
		seeAll: '查看全部',
		productList : '产品列表',
		productDetail : '产品详情',
		set : '设置',
		header : '头像',
		nickName : '昵称',
		name : '姓名',
		duty : '职位',
		companyEmail : '公司邮箱',
		mobileNum : '手机号码',
		
		personal : '个人中心',
		mine : '我的',
		myReserve : '我的预定',
		myMessage : '我的消息',
		exit : '退出',
		reserved : '已预订',
		proceed : '进行中',
		end : '已结束',
		cancel : '已取消',
		reserveTime : '预定时间',
		reserveCancel : '取消预定',
		noData : '暂无数据',
	
	    reserveMessage : '预定消息',
		you : '您于',
		reserve : '预订',
		seatSuccess : '座位成功！',
		
		inputRightPhone : '请输入正确手机号码',
		success : '操作成功',
		selectedRightAnswer : '请选择正确答案',
		answerError : '答案错误',
		networkError : '网络错误',
		
		language : '语言',
		china : '中国',
		english : '英国',
		germany : '德国',
		resetGetCode : '重新获取验证码',
		timeOutResetGetCode : '秒后重新获取验证码'

	},
	'en-US': {
		login: 'login'
	},
	
	'ge-DE': {
		login: 'login'
	},
};

const i18n = new VueI18n({
	locale: 'zn-CN', // set default locale
	messages, // set locale messages
});

export default i18n;