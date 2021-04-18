// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
	env:"cloud-6g2eag9x591e689e"
})
const db = cloud.database()
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
	var presenttime = new Date().getTime();
	try {
		return await db.collection('history').where({//删除过期的播放历史
			browsingtime: _.lt(presenttime-86400000*3)
		}).remove()
	  } catch(e) {
		console.error(e)
	}
}