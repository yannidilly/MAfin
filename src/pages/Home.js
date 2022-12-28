import React from 'react';
import PhotoSmiling from '../images/personal-pictures/photo-smiling.png';
import Header from '../components/Header';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home-div">
      <Header />
      <section className="intro-section-home">
        <div className="intro-text">
          <h1>
            Te ajudo a colocar suas finanças
            {' '}
            <spam className="text-highlight">pessoais e empresariais</spam>
            {' '}
            em ordem...
          </h1>
          <h2>você já vai começar a ver a diferença em menos de 30 dias</h2>
        </div>
        <img src={ PhotoSmiling } alt="foto Michelle Abritta" />
      </section>
      <section className="about-section">
        <p>próxima</p>
      </section>
    </div>
  );
}

export default Home;
