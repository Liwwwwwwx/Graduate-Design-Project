import React, { Component } from 'react';
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
        // form={form}
      <Form
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
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
    </Form>
     );
  }
}
 
export default Form.create()(Forms);