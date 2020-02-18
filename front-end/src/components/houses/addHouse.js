import React, { Component } from 'react';
import { Layout } from 'antd';
import { Button, Modal, Form, Input, notification} from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

const openNotificationWithIcon = type => {
  notification[type]({
    message: '提交成功',
  });
};

class AddH extends Component {
  state = {  }
  handleDelete(e){
    this.props.form.resetFeild();
  }
  render() { 
    return ( 
      <Layout>
        <div style={{
            marginTop:12,
            borderBottom:'1px solid #bbb',
            paddingBottom:5,
            fontSize:14,
            marginRight:15,
            color:'#607D8B'}}>
          <Link to='/residents' style={{color:"#607D8B"}}>小区住户信息</Link>>>添加信息
        </div>
        <Form style={{width:500,marginLeft:'280px',marginTop:'25px'}}>
            <Form.Item label="房屋构造" help="">
              <Input />
            </Form.Item>
            <Form.Item label="面积" hasFeedback >
              <Input placeholder="11位数字" />
            </Form.Item>
            <Form.Item label="出售信息" hasFeedback >
              <Input placeholder="已售/未售" />
            </Form.Item>
            <Form.Item label="地址" hasFeedback >
              <Input />
            </Form.Item>
            <Form.Item label="基础设备" help="">
              <Input />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" onClick={() => openNotificationWithIcon('success')}>
                提交
              </Button>
              <Button htmlType="cancel" style={{marginLeft:'15px'}} onClick={()=>this.handleDelete()}>
                取消
              </Button>
            </Form.Item>
        </Form>
      </Layout>
     );
  }
}
 
export default AddH;
