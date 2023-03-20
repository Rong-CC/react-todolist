/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-15 20:32:07
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-16 13:21:27
 */
import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'
class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  getToken = async ({ mobile, code }) => {
    // 调用登录接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code,
    })
    // 存入token
    this.token = res.data.token
    setToken(this.token)
    console.log(this.token, 'token')
    //调用登录接口
    //存入token
  }
  // 退出登录
  loginOut = () => {
    this.token = ''
    removeToken()
  }
}

export default LoginStore
