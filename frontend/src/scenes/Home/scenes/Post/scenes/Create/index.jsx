import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateForm from '../Create/components/Form';
import { Button } from 'antd';
import { addPost } from '../../data/posts/actions';
import './index.css';

class Create extends Component {
  handleCreate = (e) => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.onSubmit(values);
      form.resetFields();
      this.props.onCancel(e);
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    const { visible, onCancel } = this.props;
    return (
      <div>
        <CreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={onCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

Create.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addPost: data => dispatch(addPost(data)),
});

export default connect(null, mapDispatchToProps)(Create);
