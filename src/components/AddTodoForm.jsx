import React from 'react';
import { DatePicker, Form, Input, Modal, Select, Switch } from 'antd';
import { priorityValues } from '../config';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 36 },
    sm: { span: 24 },
  },
};

const AddTodoForm = Form.create()(
  ({ visible, onCancel, onSubmit, onChangeDate, onConfirmDate, form }) => {
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Add a new Todo"
        okText="Submit"
        onCancel={() => onCancel(form)}
        onOk={() => onSubmit(form)}
      >
        <Form layout="vertical">
          <FormItem label="ID">
            {getFieldDecorator('id', {
              rules: [
                {
                  required: true,
                  message: 'ID is required.'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Title is required.'
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="Description">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Description is required.'
                }
              ]
            })(<Input />)}
          </FormItem>          
          <FormItem label="Priority">
            {getFieldDecorator('priority')(
              <Select style={{ width: 120 }}>
                {
                  priorityValues.map(val => <Option key={val} value={val}>{val}</Option>)
                }
              </Select>
            )}
          </FormItem>
          <FormItem label="IsDone">
            {getFieldDecorator('isDone')(
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                defaultChecked={false}
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Created Date"
          >
            {getFieldDecorator('createdDate')(
              <DatePicker
                showTime
                size="default"
                style={{ width: '240px' }}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select Time"
                onChange={onChangeDate}
                onOk={onConfirmDate}
              />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
);

export default AddTodoForm;