import * as React from 'react';
import Navigation from './components/navigation/navigation';
import TicTacToeApp from './components/tic-tac-toe/app';
import Home from './components/home';
import Work from './components/work';
import Skills from './components/skills';
import Education from './components/education';
import About from './components/about';
import './app.css';

const App = () => {
    return (
        <div id="app">
            <Navigation isCollapsed={true} />
            <div id="content">
                <Home />
                <Work />
                <Skills />
                <Education />
                <About />
                <TicTacToeApp />
            </div>
        </div>
    );
};

export default App;