import React, { Component } from 'react';
import { Table, Divider, Tag, Icon, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

const {Search} = Input;

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '物业费',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: '供暖费',
      dataIndex: 'heating',
      key: 'heating',
    },
    {
        title: '电费',
        dataIndex: 'electricity',
        key: 'electricity',
      },
    {
        title: '共计',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: '缴费状态',
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
            <NavLink to={{pathname:'/addres'}}><Icon type="edit"/></NavLink>
            <a style={{padding:10}}><Icon type="delete"/></a>
        </span>
      ),
    },
  ];

  
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    name: i,
    property: `Edward King ${i}`,
    heating: `London, Park Lane no. ${i}`,
    electricity:i,
    state:`${i}`,
    total:`${i}`
  });
}

class Charge extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout>
                <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    color:'#607D8B'}}>
                收费管理
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
 
export default Charge;
