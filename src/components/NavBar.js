import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navLi: {
    textDecoration: 'none',
    display: 'inline',
    margin: 10,
  },
}

export default function NavBar() {
  return (
    <ul>
      <Link to={{ pathname: '/'}}>
        <li style={styles.navLi}>Home</li>
      </Link>
      <Link to={{ pathname: '/projects'}}>
        <li style={styles.navLi}>Portfolio</li>
      </Link>
      <Link to={{ pathname: '/contact'}}>
        <li style={styles.navLi}>Contact</li>
      </Link>
      <Link to={{ pathname: '/resume'}}>
        <li style={styles.navLi}>Resume</li>
      </Link>
    </ul>
  );
}
