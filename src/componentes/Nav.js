import React from 'react';
import Image from 'next/image';
import funguito from './img/funguito.svg';
import github from './img/github.png';

const Nav = () => {
  return (
    <div>
      {/* NAVEGACION */}
      <nav className="pink">
        <div className="container">
          <a
            href="/"
            className="brand-logo center"
          >
            Mi Evento
          </a>
          <a
            href="https://github.com/fungirak"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-logo right"
          >
            <Image
              src={github}
              alt="GitHub Logo"
              className="logo-nav sombra-logo"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.fungirak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-logo left"
          >
            <Image
              src={funguito}
              alt="Funguito Logo"
              className="logo-nav"
              width={32}
              height={32}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
