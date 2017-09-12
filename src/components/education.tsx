import * as React from 'react';
import Carousel from './carousel/carousel';
import Pagination from './pagination/pagination';

interface EducationState {
    educationItems: Array<object>;
    currentIndex: number;
    speed: number;
}

class Education extends React.Component<object, EducationState> {

    constructor(props: EducationState) {
        super(props);

        const masters = (
            <div className="masters">
                <p>
                    <span className="header-emphasized">
                        University of Newcastle – Computer Science, 2013 Sept - 2014 Sept
                    </span>
                    <br />
                    <span className="sub-header">M(Sc) Computer Science - Distinction</span>
                    <br />
                    Dissertation Crowdsourcing the (re)Design of the Built Environment
                    <br />
                    Created an Android application to track user locations, interests, feedback and ideas.
                    UI/UX focused project on engaging people to discuss the world we live in.
                </p>
                <span className="sub-header">Course Material</span>
                <ul>
                    <li>Object-oriented system development, design and implementation.</li>
                    <li>Theory of project management.</li>
                    <li>Human computing interaction.</li>
                </ul>
                <p>
                    <span className="sub-header">Languages</span>
                    <br />
                    Java, Javascript, HTML, CSS, SQL, PHP.
                </p>
            </div>
        );
    
        const bachelors = (
            <div className="bachelors">
                <p>
                    <span className="header-emphasized">
                        University of Sheffield – Architecture, 2009 Sept - 2012 Sept
                    </span>
                    <br />
                    <span className="sub-header">BA(Hons) Architecture - 2:2</span>
                    <br />
                    Dissertation What is Utopia and is the study of Utopia still a valid form of research?
                </p>
                <span className="sub-header">Course Material</span>
                <ul>
                    <li>Historical, theoretical, legal, environmental and social aspects of architectural design.</li>
                    <li>Technical drawings and structural considerations.</li>
                </ul>
                <p>
                    <span className="sub-header">Skills</span>
                    <br />
                    Photoshop, Illustrator, Sketchup, Vectorworks.
                </p>
            </div>
        );

        const school = (
            <div className="school">
                <p>
                    <span className="header-emphasized">Moira House School, Eastbourne</span>
                    <br />
                    <span className="sub-header">A Levels (2007 - 2009)</span>
                    <br />
                    Art, Maths Physics – Grade A
                </p>
                <p>
                    <span className="header-emphasized">Moira House School, Eastbourne</span>
                    <br />
                    <span className="sub-header">GCSEs (2005 - 2007)</span>
                    <br />
                    Maths, English, IT, Physics, French, Art – Grade A*
                    Religious Education, Latin, Biology, Chemistry, English Lit - Grade A
                </p>
            </div>
        );

        this.state = {
            educationItems: [masters, bachelors, school],
            currentIndex: 0,
            speed: 2.5
        };
    }

    changeCurrentIndex = (index: number) => {
        this.setState({ currentIndex: index });
    }

    render() {
        return (
            <div id="education" className="area-block">
                <div className="container">
                    <div className="row">
                        <div id="education-carousel" className="col carousel">
                            <Carousel 
                                items={this.state.educationItems}
                                currentIndex={this.state.currentIndex}
                                speed={this.state.speed}
                                onChangeCurrentIndex={this.changeCurrentIndex} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Pagination
                                items={this.state.educationItems}
                                currentIndex={this.state.currentIndex}
                                onChangeCurrentIndex={this.changeCurrentIndex} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;