// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
	env:"cloud-6g2eag9x591e689e"
})
const db = cloud.database()
const users = db.collection("users")
// 云函数入口函数
exports.main = async (event, context) => {
	console.log(users)
	return await users.add({
		data:event.userInfo//存储用户
	})
}