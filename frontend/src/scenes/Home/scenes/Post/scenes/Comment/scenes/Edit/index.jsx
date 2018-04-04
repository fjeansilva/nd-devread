import React from 'react';
import EditForm from './components/Form';
import './index.css';

const Edit = props => (
  <section className="edit__comment">
    <h3>Edit comment</h3>
    <EditForm {...props} />
  </section>
);

export default Edit;
