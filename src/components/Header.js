import React from 'react';
import Logo from '../images/logo.png';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header-div">
      <a href="/"><img className="logo-image-header" src={ Logo } alt="MAfin logo" /></a>
      <nav className="nav-header">
        <a href="/">Sobre mim</a>
        <a href="/">Trabalhos</a>
        <a href="/">Entrar em contato</a>
      </nav>
    </header>
  );
}

export default Header;
