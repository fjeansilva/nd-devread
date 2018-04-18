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

export function orderPosts(posts, orderBy) {
  if (Object.keys(posts).length === 0) return [];
  const items = Object.values(posts);

  if (!orderBy) return items;

  switch (orderBy) {
    case 'ORDER_BY_VOTE_SCORE':
      return items.sort((a, b) => b.voteScore > a.voteScore);
    case 'ORDER_BY_DATE_CREATED':
      return items.sort((a, b) => b.timestamp > a.timestamp);
    default:
      return items;
  }
}

export function filterPostsByCategory(posts, category) {
  return posts.filter(p => p.category === category);
}
