import React from 'react';

const styles = {
    h1: {
        margin: 15,
    }
}

export default function Header() {
    return (
        <header>
            <h1 style={styles.h1}>Tyler Linch</h1>
        </header>
    );
}