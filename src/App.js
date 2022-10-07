import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <NavBar />
            <Project />
            <Footer />
        </div>
    );
}