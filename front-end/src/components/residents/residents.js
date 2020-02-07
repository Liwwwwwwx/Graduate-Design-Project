import React, { Component } from 'react';
import { Table, Divider, Tag, Icon, Layout,Input} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

import Detail from '../detail';

const {Search} = Input;

const columns = [
    {
      title: '房主基本信息',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '家庭成员',
      dataIndex: 'member',
      key: 'member',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '购房时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '合同',
        dataIndex: 'contract',
        key: 'contract',
        render:()=>(
            <span>
                <a href="http://www.baidu.com">http://www.baidu.com</a>
            </span>
        ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span >
            <NavLink 
                style={{padding:10}} 
                to={{pathname:'/detail'}}>
            <Icon type="eye"/>
            </NavLink>
            <NavLink to={{pathname:'/addres'}}><Icon type="edit"/></NavLink>
            <a style={{padding:10}}><Icon type="delete"/></a>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      member: 32,
      address: '1号楼一单元402',
      time:'2019-07-06',
    //   contract:"http://www.baidu.com",
    //   tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      member: 42,
      address: '1号楼一单元402',
      time:'2019-07-06',
    //   contract:"http://www.baidu.com",
    //   tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      member: 32,
      address: '1号楼一单元402',
      time:'2019-07-06',
    //   contract:"http://www.baidu.com",
    //   tags: ['cool', 'teacher'],
    },
  ];

class Resident extends Component {
    state = {  }
    
    render() { 
        return ( 
            // <li>单元</li>
            <Layout>
                <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    color:'#607D8B'}}>
                小区住户信息
                </div>
                <div style={{marginTop:15}}>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                </div>
                <Table columns={columns} dataSource={data} style={{marginTop:20}} />
            </Layout>
            
         );
    }
}
 
export default Resident;