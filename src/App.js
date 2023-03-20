// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthComponent } from '@/components/AuthComponent'
import './App.css';
import List from './List'

import { Input,cSpace,Table } from 'antd';
import Home from './pages/Home'
import Publish  from './pages/Publish'
import Article from './pages/Article'
const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const App: React.FC = () => (
  <BrowserRouter>
    <div className='App'>
      <Routes>
         {/* 创建route 路径 */}
         {/* loyout 需要鉴权 */}
         <Route path='/' element={
          // 进行鉴权 
          <AuthComponent>
            <Layout>
              
            </Layout>
          </AuthComponent>
         }>
           <Route index element={<Home></Home>}></Route>
           <Route path='publish' element={<Publish></Publish>}></Route>
           <Route path='article' element={<Article></Article>}></Route>
         </Route>
         <Route path='/login' element={<Login ></Login>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);

// class App  extends React.Component{

// }
export default App
