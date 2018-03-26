import React from 'react';
import TopBar from '../../../../../../../../components/TopBar';
import Footer from '../../../../../../../../components/Footer';
import CreateForm from './components/Form';
import './index.css';

const Create = () => (
  <div>
    <TopBar />
    <section className="create__comment">
      <h1>CREATE COMMENT</h1>
      <CreateForm />
    </section>
    <Footer />
  </div>
);

export default Create;
