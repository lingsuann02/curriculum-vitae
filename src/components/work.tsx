import * as React from 'react';
import Carousel from './carousel/carousel';
import Pagination from './pagination/pagination';

interface WorkState {
    workItems: Array<object>;
    currentIndex: number;
    speed: number;
}

class Work extends React.Component<object, WorkState> {

    constructor(props: object) {
        super(props);

        const cxense = (
            <div className="cxense">
                <p>
                    <span className="header-emphasized">
                        Fronted Javascript Engineer, Cxense ASA, Oslo – 2017 April - current
                    </span>
                    <br />
                    <span className="sub-header">Day-to-Day Responsibilities</span>
                </p>
                <ul>
                    <li>
                        Developing complex, interactive user interfaces for Cxense's personalised advertising offering.
                    </li>
                    <li>
                        Solving challenging front end problems to improve performance, maintainability and readability.
                    </li>
                    <li>
                        Working with the Russia-based development team.</li>
                </ul>
                <p>
                    <span className="sub-header">Libraries and Frameworks</span>
                    <br />
                    React, Redux, Webpack, Sass, WebdriverIO, Mocha, Chai, Custom proprietary APIs.
                </p>
                <p>
                    <span className="sub-header">Patterns</span>
                    <br />
                    Functional Programming, Immutable.
                </p>
            </div>
        );
    
        const viewpoint = (
            <div className="viewpoint">
                <p>
                    <span className="header-emphasized">
                        Software Engineer, Viewpoint Construction Software, Newcastle – 2015 June - 2017 April
                    </span>
                    <br />
                    <span className="sub-header">Day-to-Day Responsibilities</span>
                </p>
                <ul>
                    <li>
                        Working with the America-based development and product team.
                    </li>
                    <li>
                        Responsible for developing file storage offering client side and maintaining front end
                        implementation of merging/updating of two COBie spreadsheets.
                    </li>
                </ul>
                <p>
                    <span className="sub-header">Libraries and Frameworks</span>
                    <br />
                    AngularJS, AngularJs 2, Typescript, JQuery, C#, .Net MVC, oData API.
                    Grunt, Node, Slickgrid, Less, Bootstrap, xBIM, Git, d3, SQL Server.
                </p>
                <p>
                    <span className="sub-header">Patterns</span>
                    <br />
                    Adapter, Observer, Pub/Sub.
                </p>
            </div>
        );
    
        const zeco = (
            <div className="zeco">
                <p>
                    <span className="header-emphasized">
                        Junior Software Developer, Zeco Energy, Newcastle – 2014 Sept - 2015 May
                    </span>
                    <br />
                    <span className="sub-header">Day-to-Day Responsibilities</span>
                </p>
                <ul>
                    <li>Worked as part of a team to build and develop bespoke software for the Energy industry.</li>
                    <li>Responsible for day to day bug fixing.</li>
                    <li>Working with large financial and energy datasets and maintaining data integrity.</li>
                    <li>Analysing use cases to develop algorithms for bespoke reports.</li>
                    <li>Writing specifications and creating visual mock-ups and presentations.</li>
                    <li>Working with Highcharts API to create visual reports from data.</li>
                </ul>
                <p>
                    <span className="sub-header">Libraries and Frameworks</span>
                    <br />
                    PHP Laravel, Coldfusion, Railo, JQuery, MySQL Databases, MVC Framework, HighCharts API, AngularJS,
                    Git, CSS Less, HTML, AWS, Foundation.
                </p>
                <p>
                    <span className="sub-header">Patterns</span>
                    <br />
                    Sublime, Notepad++.
                </p>
            </div>
        );

        this.state = {
            workItems: [cxense, viewpoint, zeco],
            currentIndex: 0,
            speed: 2.5
        };
    }

    changeCurrentIndex = (index: number) => {
        this.setState({ currentIndex: index });
    }

    render() {
        return (
            <div id="work" className="area-block">
                <div className="container">
                    <div className="row">
                        <div id="work-carousel" className="col carousel">
                            <Carousel 
                                items={this.state.workItems}
                                currentIndex={this.state.currentIndex}
                                speed={this.state.speed}
                                onChangeCurrentIndex={this.changeCurrentIndex} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Pagination
                                items={this.state.workItems}
                                currentIndex={this.state.currentIndex}
                                onChangeCurrentIndex={this.changeCurrentIndex} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;