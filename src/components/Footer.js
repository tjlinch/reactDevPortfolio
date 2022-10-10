import React from 'react'

const styles = {
  logos: {
    width: '40px',
    height: '40px',
    margin: 8,
  },
  logosHover: {
    backgroundColor: 'white',
  }
}

export default function Footer() {
  return (
    <div>
      <a href='https://github.com/tjlinch' target='_blank' rel='noreferrer'>
        <img src='https://img.icons8.com/ios-glyphs/344/github.png' alt='GitHub logo' style={styles.logos}></img>
      </a>
      <a href='https://www.linkedin.com/in/tjlinch47/' target='_blank' rel='noreferrer'>
        <img src='https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png' alt='LinkedIn logo' style={styles.logos}></img>
      </a>
    </div>
  );
}
