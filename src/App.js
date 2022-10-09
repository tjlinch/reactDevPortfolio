import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <div>
               <Header />
               <NavBar />
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
               <Footer />
            </div>
        </Router>
    );
}