import React from 'react'

const styles = {
    container: {
        display: 'flex',
    },
    asides: {
        margin: 15,
    },
    image: {
        height: '300px',
        width: '300px',
        borderRadius: '10px',
    }
}

export default function About() {
  return (
    <div>
        <h3>About Me</h3>
        <div style={styles.container}>
            <aside style={styles.asides}>
                <img src='https://media-exp1.licdn.com/dms/image/C5603AQG8BqXAiDV_OQ/profile-displayphoto-shrink_800_800/0/1517229610292?e=1671062400&v=beta&t=XBeXkSlJJikmLAmAMYbFf3mpAXnZtKqaitoJ4Wub_sE' alt='LinkedIn profile' style={styles.image}></img>
            </aside>
            <aside style={styles.asides}>
                <p>Thanks for visiting my portfolio!</p>
                <p>My name is Tyler Linch, and I am a software developer based out of Denver, Colorado.</p>
                <p>I started coding in the summer of 2022, and in a few short months I have learned many front and back end technologies.</p>
                <p>In this portfolio, you can view some of my recent projects. You can also find links to my resume, as well as my GitHub and LinkedIn profiles, and a section to contact me directly.</p>
            </aside>
        </div>
    </div>
  );
}
