import React, { Component } from 'react';
import { Layout,Form,Input,InputNumber,Button } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import { Descriptions, Radio } from 'antd';
import 'whatwg-fetch';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

class Modify extends Component {
    constructor(props){
        super(props);
        this.state = { 
            dataSource:[],
         };
    };
    componentDidMount(){
        fetch('/userInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
                'Accept':'Access-Control-Allow-Origin'
            }, 
        }).then(response => response.json())
            .then(result => {
                this.setState({dataSource:result.data[this.props.match.params.id]})
                console.log(this.state.dataSource);
            }).catch(function (e) {
            console.log("fetch fail");
        });
        // console.log(this.props.match.params.id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let history = this.props.history;
        this.props.form.validateFields((errors,values)=>{
            if (!errors) {
                console.log('Received values of form: ', values);
                fetch('/userInfo/update', {
                    method: "POST",
                    mode: "cors",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        　　'name':values.name,
                            'idenity' : values.idenity,
                            'phone':values.number,
                            'homeowners':values.family,
                            'address':values.address,
                            'contract':values.contract,
                       　　}),
                    
                }).then(response => response.json())
                    .then(result => {
                        // console.log(result);
                        this.setState({dataSource:result.data[this.props.match.params.id]})
                        
                    }).catch(function (e) {
                    console.log("fetch fail");
                });
                
              }
        })

      }

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return ( [
            <Layout>
                <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    marginRight:15,
                    color:'#607D8B'}}>
                <Link to="/residents" style={{color:"#607D8B"}}>小区住户信息</Link>>>修改信息
                </div>
                <div style={{border:'1px solid #ccc',marginTop:10,marginRight:15}}>
                         {/* 基本信息 */}
                    <Form  {...layout}
                        onSubmit={this.handleSubmit} 
                        className="login-form"
                        style={{padding:10}}    
                    >
                         <Form.Item
                            name="name"
                            label="姓名"
                            rules={[{ required: true, message: '请输入姓名' }]}
                            >
                            {getFieldDecorator('name')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item name="number" label="电话号码">
                            {getFieldDecorator('number')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="身份证号"  >
                            {getFieldDecorator('idenity')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="地址" >
                            {getFieldDecorator('address')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="家庭成员" help="">
                            {getFieldDecorator('family')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="合同" help="">
                            {getFieldDecorator('contract')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    提交
                                </Button>                           
                            </Form.Item>
                        </Form>                               
                </div>
            </Layout>
        ]
            
         );
    }
}
 
export default Form.create()(Modify);