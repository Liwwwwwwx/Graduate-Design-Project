import React, { Component } from 'react';
import { Table, Divider, Tag, Icon, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

import Detail from './detail';

const {Search} = Input;

// 表头
const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
        title: '保修故障',
        dataIndex: 'failure',
        key: 'failure',
    },
    {
      title: '报修日期',
      dataIndex: 'time',
      key: 'time',
    },
    {
        title: '受理人',
        dataIndex: 'person',
        key: 'person',
    },
    {
        title: '报修状态',
        dataIndex: 'state',
        key: 'state',
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
    failure: `London, Park Lane no. ${i}`,
    time:`${i}`,
    person:`http://www.${i}`,
    state:`已解决`
  });
}


  

class Fault extends Component {
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
                人事
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
 
export default Fault;