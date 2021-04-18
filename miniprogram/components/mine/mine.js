// components/mine/mine.js
const db = wx.cloud.database()
const users = db.collection("users")
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		userinfo:null
	},
	lifetimes:{
		created(){
			//再次进入,判断是否缓存有用户数据
			wx.getStorage({
				key: "userinfo",
				success: (res)=> {
				//   console.log(res.data);
				  if(res.data){
					  this.setData({
						  userinfo:res.data
					  })
				  }
				}
			})
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		mylike(){//我的喜欢
			if(this.data.userinfo){
				wx.navigateTo({
					url: '../../pages/Collection/Collection',
				  })
			}else{
				wx.showToast({
					icon:"none",
					  title: "请先登录！"
				})
				return;
			}
		},
		userbtn(){//用户个人信息页面
			if(this.data.userinfo){
				wx.navigateTo({
					url: '../../pages/user/user',
				  })
			}else{
				wx.showToast({
					icon:"none",
					  title: "请先登录！"
				})
				return;
			}
		
		},
		setupbtn(){//设置页面
			wx.navigateTo({
			  url: '../../pages/setup/setup',
			})
		},
		historybtn(){//播放历史
			if(this.data.userinfo){
				wx.navigateTo({
					url: '../../pages/history/history',
				  })
			}else{
				wx.showToast({
					icon:"none",
					  title: "请先登录！"
				})
				return;
			}
		
		},
		getUserProfile(e){//获取用户信息
			wx.getUserProfile({
				desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				success: (res) => {
				  this.setData({
					userinfo: res.userInfo,
				  })
					console.log(this.data.userinfo)
					wx.cloud.callFunction({
						name:"getOpenid",
						data:{},
						success:(res)=>{
							console.log(res.result)
							wx.cloud.callFunction({
								name:"setUserInfo",
								data:{
									userInfo:{
										...this.data.userinfo,
										_id:res.result
									}
								}
							})
							//本地缓存
							wx.setStorage({
								key:"userinfo",
								data:{
									...this.data.userinfo,
									_id:res.result
								}
							})
						}
					})
				}
			  })
			
		}
	}
})
