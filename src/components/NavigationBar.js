// components/NavigationBar.js
import React from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css'; 


const NavigationBar = ({ links, logo }) => {
  return (
    <nav className="navigation-bar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,
};

export default NavigationBar;
