import React from 'react';
import Logo from
  '../images/visual-identity/yellow-and-pink-logo-transparent-background.png';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header-div">
      <a href="/"><img className="logo-image-header" src={ Logo } alt="MAfin logo" /></a>
      <nav className="nav-header">
        <a href="/">Sobre mim</a>
        <a href="/">Trabalhos</a>
        <a href="https://api.whatsapp.com/send?phone=553299593739&text=Ei%2C%20vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sobre%20de%20seus%20servi%C3%A7os.">Entrar em contato</a>
      </nav>
    </header>
  );
}

export default Header;
