import React, { Component } from 'react';
import { Layout } from 'antd';
import { Button, Modal, Form, Input, notification} from 'antd';


class Forms extends Component {
  state = {  }
  getItemsValue = ()=>{    
    const valus= this.props.form.getFieldsValue();       
    return valus;
  } 
  render() { 
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return ( 
      <Form
        // form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
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
        <Form.Item label="地址" >
        {getFieldDecorator('address')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item name="position" label="职位">
        {getFieldDecorator('position')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item label="合同" help="">
        {getFieldDecorator('contract')(   
            <Input />
        )}
        </Form.Item>
    </Form>
     );
  }
}
 
export default Form.create()(Forms);