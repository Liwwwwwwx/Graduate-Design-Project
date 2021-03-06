import React, { Component } from 'react';
import { Table, Divider, Tag, Icon, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

import Detail from './detail';

const {Search} = Input;

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
        title: '家庭地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
    },
    {
        title: '员工合同',
        dataIndex: 'contract',
        key: 'contract',
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

//   数据
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    name: i,
    address: `London, Park Lane no. ${i}`,
    position:`${i}`,
    contract:`http://www.${i}`
  });
}


  

class Personnel extends Component {
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
                人事管理
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
 
export default Personnel;