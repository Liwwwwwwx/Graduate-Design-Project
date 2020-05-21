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
        fetch('/chargeInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },            
        }).then(response => response.json())
            .then(result => {
                console.log(result.data[this.props.match.params.id]);
                this.setState({dataSource:result.data[this.props.match.params.id]})
            }).catch(function (e) {
            console.log("fetch fail");
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let history = this.props.history;
        this.props.form.validateFields((errors,values)=>{
            if (!errors) {
                console.log('Received values of form: ', values);
                fetch('/chargeInfo/update', {
                    method: "POST",
                    mode: "cors",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        　　'user_id':values.user_name,
                            'Proprty_fees' : values.Proprty_fees,
                            'Water_fees':values.Water_fees,
                            'gas':values.gas,
                            'Electricity_fees':values.Electricity_fees,
                            'Charge_state':values.Charge_state,
                       　　}),
                    
                }).then(response => response.json())
                    .then(result => {
                        // console.log(result);
                        // this.setState({dataSource:result.data[this.props.match.params.id]})
                        
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
                <Link to="/house" style={{color:"#607D8B"}}>房屋信息</Link>>>修改信息
                </div>
                <div style={{border:'1px solid #ccc',marginTop:10,marginRight:15}}>
                         {/* 基本信息 */}
                    <Form  {...layout}
                        onSubmit={this.handleSubmit} 
                        className="login-form"
                        style={{padding:10}}    
                    >
                         <Form.Item
                            name="structure"
                            label="房屋构造"
                            rules={[{ required: true }]}
                            >
                            {getFieldDecorator('structure')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item name="area" label="面积">
                            {getFieldDecorator('area')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="地址"  >
                            {getFieldDecorator('address')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="出售信息"  >
                            {getFieldDecorator('selling')(   
                                <Input />
                            )}
                            </Form.Item>
                            <Form.Item label="基础设备" >
                            {getFieldDecorator('equipment')(   
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