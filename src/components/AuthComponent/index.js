/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-16 13:27:47
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-16 16:53:58
 */
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

//高级组件 
function AuthComponent({ children }){
    const isToken = getToken()
    if(isToken){
        return <> {children}</>
    }else{
        return <Navigate to="/login" replace></Navigate>
    }
}
export {
    AuthComponent 
}