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
        name="user_name"
        label="姓名"
        rules={[{ required: true, message: '请输入姓名' }]}
        >
        {getFieldDecorator('user_name')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item name="Proprty_fees" label="物业费">
        {getFieldDecorator('Proprty_fees')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item label="供暖费"  >
        {getFieldDecorator('Water_fees')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item label="煤气费"  >
        {getFieldDecorator('gas')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item label="电费" >
        {getFieldDecorator('Electricity_fees')(   
            <Input />
        )}
        </Form.Item>
        <Form.Item label="缴费状态" help="">
        {getFieldDecorator('Charge_state')(   
            <Input />
        )}
        </Form.Item>
    </Form>
     );
  }
}
 
export default Form.create()(Forms);