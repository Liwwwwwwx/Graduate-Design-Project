import React, { Component } from 'react';
import { Table,Button, Layout,Input,Form,Modal,Radio} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import 'whatwg-fetch';
import Forms from './addcharge';

const {Search} = Input;

class Charge extends Component {
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
              dataIndex: 'user_name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: '物业费',
              dataIndex: 'Proprty_fees',
              key: 'property',
            },
            {
              title: '供暖费',
              dataIndex: 'Water_fees',
              key: 'heating',
            },
            {
                title: '煤气费',
                dataIndex: 'Gas_fees',
                key: 'heating',
              },
            {
                title: '电费',
                dataIndex: 'Electricity_fees',
                key: 'electricity',
              },
            {
                title: '缴费状态',
                dataIndex: 'Charge_state',
                key: 'state',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record,index) => (
                  <span >
                      <NavLink 
                        style={{padding:10}} 
                        to={{pathname:'/modch/'+index}}>
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
        fetch('/chargeInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },            
        }).then(response => response.json())
            .then(result => {
                // console.log(result.data);
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
        fetch('/chargeInfo/insertone', {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
                'Accept':'Access-Control-Allow-Origin'
            },
            body:JSON.stringify({
                　'user_id':this.formRef.getItemsValue().user_name,
                　'property' : this.formRef.getItemsValue().Proprty_fees,
                  'water':this.formRef.getItemsValue().Water_fees,
                  'electricity':this.formRef.getItemsValue().gas,
                  'gas':this.formRef.getItemsValue().Electricity_fees,
                  'state':this.formRef.getItemsValue().Charge_state,
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
        fetch('/chargeInfo/del',{
            method:'POST',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                　　'charge_id' : id
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
            <Layout>
                <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    color:'#607D8B'}}>
                <span>收费管理</span>
                <a style={{float: 'right', marginRight: '55px'}} onClick={this.showModal}>添加信息</a>
                <Modal title="添加信息"
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
 
export default Charge;
