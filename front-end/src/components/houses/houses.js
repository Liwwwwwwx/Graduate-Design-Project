import React, { Component } from 'react';
import { Table, Divider, Tag, Icon, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

const {Search} = Input;

const columns = [
    {
      title: '房屋构造',
      dataIndex: 'structure',
      key: 'structure',
      render: text => <a>{text}</a>,
    },
    {
      title: '面积',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '出售信息',
        dataIndex: 'selling',
        key: 'selling',
    },
    {
        title: '基础设备',
        dataIndex: 'equipment',
        key: 'equipment',
        // render:()=>(
        //     <span>
        //         <a href="http://www.baidu.com">http://www.baidu.com</a>
        //     </span>
        // ),
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
            <NavLink to={{pathname:'/addhou'}}><Icon type="edit"/></NavLink>
            <a style={{padding:10}}><Icon type="delete"/></a>
        </span>
      ),
    },
  ];

  
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    structure: i,
    area: `Edward King ${i}`,
    address: `London, Park Lane no. ${i}`,
    selling:i,
    equipment:`${i}`
  });
}

class Houser extends Component {
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
                房屋信息
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
 
export default Houser;