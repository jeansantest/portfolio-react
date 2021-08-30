import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useTheme } from '../Context/ThemeContext';
import './Style/Header.scss';

function Header() {
  const { theme } = useTheme();
  return (
    <div className={theme ? 'light' : 'dark'}>
      <header className="header column center">
        <IconContext.Provider
          value={{ color: 'red', className: 'global-class-name' }}
        >
          <h1>
            Hey there! I'm Jean Esteves <span className="wave">👋</span>
          </h1>
          <h2>
            and I <FaHeart /> web development
          </h2>
        </IconContext.Provider>
      </header>
    </div>
  );
}

export default Header;
