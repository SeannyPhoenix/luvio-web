import React from 'react';
import logo from './assets/luvio.svg';
import './App.css';
import { Container, Image } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <header className="splash-screen">
        <Image src={logo} className="logo-name" alt="logo" />
        <span>
          Service created by <a href="https://seannyphoenix.com" target="_blank" rel="noopener noreferrer">Seanny Drakon Phoenix</a>
        </span>
      </header>
    </Container>
  );
}

export default App;
