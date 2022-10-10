import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


const styles = {
    header: {
        minHeight: 80,
        backgroundColor: 'Blue',
        display: 'flex',

    },
    content: {
       minHeight: 500,
       backgroundColor: 'grey',
       display: 'flex',
       justifyContent: 'center',
    },
    footer: {
        backgroundColor: 'Green',
        display: 'flex',
        justifyContent: 'center',
    }
}

export default function App() {
    return (
        <Router>
            <div style={styles.header}>
                <Header />
                <NavBar />
            </div>
            <div style={styles.content}>
                <Routes>
                    <Route
                        path='/'
                        element={ <About /> } />
                    <Route
                        path='/projects'
                        element={ <Project /> } />
                    <Route
                        path='/contact'
                        element={ <Contact /> } />
                    <Route
                        path='/resume'
                        element={ <Resume /> } />
                </Routes>
            </div>
            <div style={styles.footer}>
                <Footer />
            </div>
        </Router>
    );
}