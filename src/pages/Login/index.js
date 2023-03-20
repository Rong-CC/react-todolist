/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-15 13:50:13
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-15 20:03:30
 */
import { Card } from 'antd'
import  LoginForm  from './components/Form/index'
import './index.scss'
function Login (){
    return(
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src="//www.baidu.com/img/flexible/logo/pc/result@2.png" alt='logo'></img>
                <LoginForm></LoginForm>
            </Card>
        </div>
    )
}
export default Login