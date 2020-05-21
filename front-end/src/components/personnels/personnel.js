import React, { Component } from 'react';
import { Table, Button, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import Forms from './addpersonnel';
import 'whatwg-fetch';

const {Search} = Input;
  

class Personnel extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:[

            ],
            visible:false,
        };
        this.columns = [
            {
              title: '姓名',
              dataIndex: 'staff_name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
                title: '家庭地址',
                dataIndex: 'staff_address',
                key: 'address',
            },
            {
              title: '职位',
              dataIndex: 'staff_position',
              key: 'position',
            },
            {
                title: '员工合同',
                dataIndex: 'staff_contract',
                key: 'contract',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record,index) => (
                  <span >
                       <NavLink 
                        style={{padding:10}} 
                        to={{pathname:'/modpe/'+index}}>
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
    }
    
    componentDidMount(){
        fetch('/staffInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },            
        }).then(response => response.json())
            .then(result => {
                this.setState({dataSource:result.data})
                // console.log(result);
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
        fetch('/staffInfo/insertone', {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
                'Accept':'Access-Control-Allow-Origin'
            },
            body:JSON.stringify({
                　'name':this.formRef.getItemsValue().name,
                  'address':this.formRef.getItemsValue().address,
                  'position':this.formRef.getItemsValue().position,
                  'contract':this.formRef.getItemsValue().contract,
               　　}),
            
        }).then(response => response.json())
            .then(result => {
                // console.log(this.state.dataSource);
            }).catch(function (e) {
            console.log("fetch fail");
        });
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
        fetch('/staffInfo/del',{
            method:'POST',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                　　'staff_id' : id
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
                <span>人事管理</span>
                <a style={{float: 'right', marginRight: '55px'}} onClick={this.showModal}>添加信息</a>
                <Modal title="修改信息"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        okText="保存"
                        cancelText="取消"
                    >
                        <Forms
                            wrappedComponentRef={(form) => this.formRef = form}      
                        />
                    </Modal>
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
 
export default Personnel;