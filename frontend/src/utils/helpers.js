import { Modal } from 'antd';

const { confirm } = Modal;

export function showDeleteConfirm(callback, id) {
  confirm({
    title: 'Are you sure delete this item?',
    content: '',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      callback(id);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}