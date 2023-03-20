/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-15 19:58:12
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-15 22:20:15
 */
import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'

function LoginItemC() {
  const {loginStore } = useStore()
 const [ form ] = Form.useForm();
 const navigate  = useNavigate()
//  const [ messageApi,contextHolder ] = message.useMessage();
//  const { setFieldsValue} = form[0]
  // form[0]
  // // console.log(setFieldsValue,'setFieldsValue')
  useEffect(()=>{
    form.setFieldsValue({
      username: '13811111111',
      password: '246810'
    })
  },[form])
  const onFinish = async(values: any) => {
    // vaules 放置的所有表单项中用户输入的内容
    console.log('Success:', values)
   
    try{
      await loginStore.getToken({
        mobile: values.username,
        code: values.password,
      })
     navigate('/', {replace:true})
     message.success('登录成功!')

    } catch (e){
      message.error(e.response?.data?.message || '登录失败')
    }
   
  }

  const onFinishFailed = (errorInfo: any) => {
    //
    console.log('Failed:', errorInfo)
  }

  return (
    <>
    <Form
      form = { form }
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[
          { pattern: /^[A-Za-z0-9]{9,15}$/, message: '请输入正确的账户信息' },
          { required: true, message: '请输入账户!' },
        ]}
      >
        <Input maxLength="11"  />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password  maxLength="6"  />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  )


}
// const { loginStore } = useStore()
// eslint-disable-next-line react-hooks/rules-of-hooks
// console.log(useStore(), '1')
export default LoginItemC
