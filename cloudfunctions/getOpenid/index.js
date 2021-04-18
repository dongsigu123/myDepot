// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
	env:"cloud-6g2eag9x591e689e"
})

// 云函数入口函数
exports.main = async (event, context) => {
	const wxContext = cloud.getWXContext()

	return wxContext.OPENID;//获取用户openid
}