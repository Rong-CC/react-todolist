/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-16 16:32:33
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-16 16:32:57
 */
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  getUserInfo = async () => {
    // 调用接口获取数据
    const res = await http.get('/user/profile')
    this.userInfo = res.data
  }
}

export default UserStore