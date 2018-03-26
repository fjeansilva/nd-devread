import React from 'react';
import TopBar from '../../../../../../../../components/TopBar';
import Footer from '../../../../../../../../components/Footer';
import EditForm from './components/Form';
import './index.css';

const Edit = () => (
  <div>
    <TopBar />
    <section className="edit__comment">
      <h1>EDIT COMMENT</h1>
      <EditForm />
    </section>
    <Footer />
  </div>
);

export default Edit;
