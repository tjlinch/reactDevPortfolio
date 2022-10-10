import React from 'react'
import projects from '../projects.json';

const styles = {
  image: {
    height: '150px',
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cards: {
    backgroundColor: 'darkGrey',
    width: '250px',
    margin: 10,
    textAlign: 'center',
    borderRadius: '10px',
  },
  cardHeader: {
    fontSize: '25px',
    height: '11%'
  },
  cardLinks: {
    backgroundColor: 'red',
    margin: 5,
    width: '50%',
    height: '8%',
    borderRadius: '15px',
  }
}

export default function Project() {
  return (
    <div>
      <h3>Portfolio</h3>
      <div style={styles.cardContainer}>
        {projects.map((project) => (
          <div style={styles.cards}>
            <h4 style={styles.cardHeader}>{project.name}</h4>
            <img src={project.image} alt='app screenshot' style={styles.image}></img>
            <a href={project.github} target='_blank' rel='noreferrer'>
              <button style={styles.cardLinks}>GitHub</button>
            </a>
            <a href={project.deployed} target='_blank' rel='noreferrer'>
              <button style={styles.cardLinks}>Deployed App</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
