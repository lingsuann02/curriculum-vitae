import * as React from 'react';
import './home.css';

const Home = () => {
    return (
        <div id="home" className="area-block">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>
                            Hi! 
                        </p>
                        <p>
                            My name is <a href="#about" id="goto-about">Su Ann Ling</a>.
                        </p>
                        <p>
                            I'm a UK <a href="#education" id="goto-education">educated </a>
                            front end<a href="#work" id="goto-work"> web developer</a> based in Oslo.
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Home;