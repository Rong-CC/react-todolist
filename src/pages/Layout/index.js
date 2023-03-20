import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { useStore } from '@/store'
import './index.scss'
import { useEffect } from 'react'

const { Header, Sider } = Layout
// 确定退出

function GeekLayout() {
  const navigate = useNavigate()
  const { userStore, loginStore , channelStore} = useStore()
  const { pathname } = useLocation()
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      onClick: () => { navigate('/')},
      label: '数据概览',
    },
    {
      key: '/publish',
      icon: <DiffOutlined />,
      onClick: () => { navigate('/publish')},
      label: '内容管理',
    },
    {
      key: '/article',
      icon: <EditOutlined />,
      onClick: () => { navigate('/article')},
      label: '发布文章',
    },
  ]
    useEffect(() => {
      userStore.getUserInfo()
      channelStore.loadChannelList()
    }, [userStore,channelStore])
  const onConfirm = () => {
    // 退出登录 删除token 跳回到登录
    loginStore.loginOut()
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{ userStore.userInfo.name }</span>
          <span className="user-logout">
            <Popconfirm
              onConfirm={onConfirm}
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* 高亮原理：defaultSelectedKeys === item key */}
          {/* 获取当前激活的path路径？ */}
          {/* 
          defaultSelectedKeys: 初始化渲染的时候生效一次
          selectedKeys: 每次有值更新时都会重新渲染视图
       */}
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={pathname}
            selectedKeys={pathname}
            items= {menuItems}
            style={{ height: '100%', borderRight: 0 }}
          >
           
          </Menu>
        </Sider>
       
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout
