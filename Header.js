import React from 'react';
import './Header.css';
import ProfileImage from './images/me.jpg'; // Adjust the filename as needed

function Header() {
  return (
    <header className="header">
      <div className="header-content">  
        <h1 className="header-title">Marquel Gibson</h1>
        <p className="header-socials">
          <a href="https://x.com/Quelz_Eth">QQuelz</a> <br />
          <a href="https://warpcast.com/quelz.eth">Warpcast</a> <br />
          <a href="https://github.com/QQuelz">Github</a>
        </p>
        <p className="header-subtitle">Blockchain Specialist</p>
      </div>
      <img src={ProfileImage} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />

      <nav className="nav">
        <ul> 
          <li><a href="#education">Education</a></li>
          <li><a href="#Skills">Skills</a></li> 
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#games">Fun Games</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;