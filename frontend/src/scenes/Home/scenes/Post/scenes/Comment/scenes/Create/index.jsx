import React from 'react';
import CreateForm from './components/Form';
import './index.css';

const Create = props => (
  <section className="create__comment">
    <h3>Reply</h3>
    <CreateForm {...props} />
  </section>
);

export default Create;
