import React from 'react';
import TopBar from '../../../../../../components/TopBar';
import Footer from '../../../../../../components/Footer';
import CreateForm from './components/Form';
import './index.css';

const Create = () => (
  <div>
    <TopBar />
    <section className="create__post">
      <h1>CREATE POST</h1>
      <CreateForm />
    </section>
    <Footer />
  </div>
);

export default Create;
