/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-16 12:57:04
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-16 13:04:30
 */
const key = 'pc-key'

const setToken = (token) => {
   return window.localStorage.setItem(key, token)

}
const getToken = () => {
   return window.localStorage.getItem(key)
}
const removeToken = ()=>{
  return  window.localStorage.removeItem(key )
} 

export {
    setToken,
    getToken,
    removeToken
}