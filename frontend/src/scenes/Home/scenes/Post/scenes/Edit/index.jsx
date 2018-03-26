import React from 'react';
import TopBar from '../../../../../../components/TopBar';
import Footer from '../../../../../../components/Footer';
import CreateForm from './components/Form';
import './index.css';

const Edit = () => (
  <div>
    <TopBar />
    <section className="edit__post">
      <h1>EDIT POST</h1>
      <CreateForm />
    </section>
    <Footer />
  </div>
);

export default Edit;
