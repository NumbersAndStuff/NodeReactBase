import logo from './logo.svg';
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        About
                    </p>
                </header>
            </div>
        );
    }
}

export default About;