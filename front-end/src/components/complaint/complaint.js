import React, { Component } from 'react';
import { Table, Button, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

import 'whatwg-fetch';

const {Search} = Input;



  

class Complaint extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:[

            ],
            visible:false,
        };
        
        this.columns = [
            {
            title: '投诉人',
            dataIndex: 'user_name',
            key: 'name',
            render: text => <a>{text}</a>,
            },
            {
                title: '投诉事务',
                dataIndex: 'Complaint_content',
                key: 'complaint',
            },
            {
            title: '投诉日期',
            dataIndex: 'Complaint_time',
            key: 'time',
            },
            {
                title: '受理人',
                dataIndex: 'Complaint_receiver',
                key: 'person',
            },
            {
                title: '投诉状态',
                dataIndex: 'Complaint_state',
                key: 'state',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record,index) => (
                  <span >
                      <NavLink 
                        style={{padding:10}} 
                        to={{pathname:'/modco/'+index}}>
                        <Button type="primary" ghost
                                size="small">
                        修改
                        </Button>
                        </NavLink>
                      
                      <Button type="danger" ghost size="small" onClick={this.onDelete.bind(this,this.state.dataSource[index].user_id,index)}>删除</Button>
                  </span>
                ),
            },
        ];
    };

    componentDidMount(){
        fetch('/complaintInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },            
        }).then(response => response.json())
            .then(result => {
                this.setState({dataSource:result.data})
            }).catch(function (e) {
            console.log("fetch fail");
        });
      }

    // 弹出框
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    // 删除表格列
    onDelete(id,index){
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);//index为获取的索引，后面的 1 是删除几行
        fetch('/complaintInfo/del',{
            method:'POST',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                　　'Complaint_id' : id
               　　}),
        }).then(respose=>respose.json())
            .then(result=>{
                // console.log(result);
            }).catch(function(e){
                console.log("fetch fail");
            })
        this.setState({ dataSource });
    }
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
                投诉
                </div>
                <div style={{marginTop:15}}>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                </div>
                <Table columns={this.columns} dataSource={this.state.dataSource} style={{marginTop:20}} />
            </Layout>
            
         );
    }
}
 
export default Complaint;