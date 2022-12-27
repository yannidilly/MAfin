import React from 'react';
import Logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-div">
      <img className="logo-image-header" src={ Logo } alt="MAfin logo" />
      <nav>
        <a href="/">Sobre mim</a>
        <a href="/">Trabalhos</a>
        <a href="/">Entrar em contato</a>
      </nav>
    </header>
  );
}

export default Header;
