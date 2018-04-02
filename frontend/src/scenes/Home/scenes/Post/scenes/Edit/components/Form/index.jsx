import React from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const onFieldsChange = (props, changedFields) => {
  props.onChange(changedFields);
};

const mapPropsToFields = (props) => {
  console.log('mapPropToFields: ', props)
  return {
    title: Form.createFormField({
      ...props.title,
      value: props.title.value,
    }),
    body: Form.createFormField({
      ...props.body,
      value: props.body.value,
    }),
  };
};

const onValuesChange = (_, values) => {
  console.log(values);
};

const settings = {
  onFieldsChange,
  mapPropsToFields,
  onValuesChange,
};

const EditForm = Form.create(settings)((props) => {
  const {
    getFieldDecorator,
    visible,
    onCancel,
    onSubmit,
  } = props.form;
  console.log(props)
  return (
    <Modal
        visible={true}
        title="EDIT  POST"
        okText="Save"
        onCancel={onCancel}
        onOk={onSubmit}
      >
      <Form>
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Body">
          {getFieldDecorator('body', {
            rules: [{ required: true, message: 'Please input an awesome content :)' }],
          })(<TextArea rows={4} />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default EditForm;
