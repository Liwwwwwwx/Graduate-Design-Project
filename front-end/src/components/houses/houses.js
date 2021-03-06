import React, { Component } from 'react';
import { Table, Icon, Layout,Input,Form,Modal,Button} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import Forms from './addhouses';
import 'whatwg-fetch';

const {Search} = Input;

class Houser extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:[
                
            ],
            visible:false,
        };
        this.columns = [
            {
              title: '房屋构造',
              dataIndex: 'h_constraction',
              key: 'structure',
              render: text => <a>{text}</a>,
            },
            {
              title: '面积',
              dataIndex: 'h_area',
              key: 'area',
            },
            {
              title: '地址',
              dataIndex: 'h_address',
              key: 'address',
            },
            {
                title: '出售信息',
                dataIndex: 'h_sell_info',
                key: 'selling',
            },
            {
                title: '基础设备',
                dataIndex: 'h_equipment',
                key: 'equipment',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record,index) => (
                  <span >
                      <NavLink 
                        style={{padding:10}} 
                        to={{pathname:'/modho/'+index}}>
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
        fetch('/houseInfo', {
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
        fetch('/houseInfo/insertone', {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
                'Accept':'Access-Control-Allow-Origin'
            },
            body:JSON.stringify({
                　'name':this.formRef.getItemsValue().name,
                　'idenity' : this.formRef.getItemsValue().idenity,
                  'phone':this.formRef.getItemsValue().number,
                  'homeowners':this.formRef.getItemsValue().family,
                  'address':this.formRef.getItemsValue().address,
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
        //console.log(index)
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);//index为获取的索引，后面的 1 是删除几行
        fetch('/houseInfo/del',{
            method:'POST',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                　　'h_id' : id
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
                <span>房屋信息</span>
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
 
export default Houser;