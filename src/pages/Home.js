import React from 'react';
import Header from '../components/Header';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home-div">
      <Header />
      <section className="intro-section-home">
        <h1>
          Te ajudo a colocar suas finanças
          {' '}
          <spam className="text-highlight">pessoais e empresariais</spam>
          {' '}
          em ordem...
        </h1>
        <h2>você já vai começar a ver a diferença em menos de 30 dias</h2>
      </section>
    </div>
  );
}

export default Home;
