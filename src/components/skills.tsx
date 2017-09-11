import * as React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="area-block">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>
                            <span className="header-emphasized">Technical skills</span>
                            <br />
                            React, Angular, Redux, HTML, CSS, Java, C#, SQL, SaaS, CI.
                        </p>
                        <p>
                            <span className="header-emphasized">Soft skills</span>
                            <br />
                            Keen eye for detail, excellent communication skills.
                        </p>
                        <p>
                            <span className="header-emphasized">Other</span>
                            <br />
                            Webstorm, Sketch, Photoshop, SourceTree, CAD, JIRA, TFS.
                        </p>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default Skills;