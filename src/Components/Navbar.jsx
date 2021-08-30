import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useTheme } from '../Context/ThemeContext';
import './Style/Navbar.scss';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme ? 'light' : 'dark'}>
      <nav className="nav-bar row">
        <div className="row">
          <img
            className="border-image"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQH2NFV8cBUJyA/profile-displayphoto-shrink_200_200/0/1621282814093?e=1635379200&v=beta&t=lZ1PE2AdrtsDKRRL2FE_kWkMvD2poLktmfabjv83uOU"
            alt="selfie"
          />
          <h1 className="animated">Jean Esteves</h1>
        </div>
        <div className="row bar">
          <IconContext.Provider
            value={{
              color: '#d0c63b',
              className: 'global-class-name',
            }}
          >
            {theme ? (
              <FaSun onClick={() => setTheme(!theme)} />
            ) : (
              <FaMoon onClick={() => setTheme(!theme)} />
            )}
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </IconContext.Provider>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
