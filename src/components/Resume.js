import React from 'react';
import technologies from '../technologies.json';


const styles = {
    container: {
        display: 'flex',
    },
    asides: {
        margin: 15,
    },
    logos: {
        height: '40px',
        width: '40px',
        margin: 8,
    },
    techContainer: {
        display: 'flex',
    }
}

export default function Resume() {
  return (
    <div>
        <h3>Resume</h3>
        <div style={styles.container}>
            <aside style={styles.asides}>
                <h4>Download My Resume</h4>
            </aside>
            <aside style={styles.asides}>
                <h4>Technologies</h4>
                <div>
                    {technologies.map((technology) => (
                        <div style={styles.techContainer}>
                            <p>{technology.name}</p>
                            <img src={technology.image} alt={technology.name} style={styles.logos}></img>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    </div>
  );
}
