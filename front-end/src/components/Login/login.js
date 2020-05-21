import React, { Component } from 'react';
import {Layout,  Icon } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css';
import 'whatwg-fetch';

// fetch('/login/land', {
//     method: "POST",
//     mode: "cors",
//     headers:{
//         'Content-Type': 'application/json',
//     },
//     body:JSON.stringify({
//         　　'name' : 'values.userName',
//             'psw' : 'values.password'
//        　　}),
    
// }).then(response => response.json())
//     .then(result => {
//         console.log(result);
//     }).catch(function (e) {
//     console.log("fetch fail");
// });

class  NormalLoginForm extends Component {
    constructor(props){
        super(props);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let history = this.props.history;
        this.props.form.validateFields((errors,values)=>{
            if (!errors) {
                // console.log('Received values of form: ', values);
                // console.log(values.userName);
                fetch('/login/land', {
                    method: "POST",
                    mode: "cors",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        　　'name' : values.userName,
                            'psw' : values.password
                       　　}),
                    
                }).then(response => response.json())
                    .then(result => {
                        console.log(result);
                        if(result.status=='400'){
                            alert(result.msg)
                        }
                        if(result.status=='200'){
                            history.push('/residents');
                        }
                        
                    }).catch(function (e) {
                    console.log("fetch fail");
                });
                
              }
        })

      }
      
    render() {
        const { getFieldDecorator } = this.props.form;
         return (
            <Layout>
                <div className="login">
                    <div className="logo-text"
                    >
                        <p className="text" 
                        >小区物业管理系统</p>
                    </div>
                    <div className="form-text">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item hasFeedback>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' },

                                    ],
                                })(
                                    <Input addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' },
                                    ],
                                })(
                                    <Input addonBefore={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>                           
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

const Login = Form.create({name: 'normal_login' })(NormalLoginForm);
export default Login;
