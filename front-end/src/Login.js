import React, { Component } from 'react';
import {
    Row,Col,Form, Icon, Input, Button, Checkbox, Layout,
  } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect,hashHistory} from 'react-router-dom';
import App from './App';
import Resident from './components/residents/residents';


class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
            <Row>
                <Col offset={9} span={6}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' },
                                {min:7,max:10,message:'长度是6-10'}

                                ],
                            })(
                                <Input addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' },
                                {pattern:/^[a-zA-Z0~9]{6,10}$/,message:'6位数字或字母'}
                                ],
                            })(
                                <Input addonBefore={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float:"right"}}>Forgot password</a>
                            <Link  to="/residents" target="_blank">
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}} >
                                    登录
                                </Button>
                            </Link>                               
                            
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            
            </Layout>
        );
    }
}


const Login = Form.create({name: 'normal_login' })(NormalLoginForm);
export default Login;