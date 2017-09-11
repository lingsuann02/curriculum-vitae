import * as React from 'react';
import './navigation.css';

interface NavigationProps {
    isCollapsed: boolean;
}

interface NavigationState {
    isCollapsed: boolean;
}

class Navigation extends React.Component<NavigationProps, NavigationState> {

    constructor(props: NavigationProps) {
        super(props);
        this.state = {
            isCollapsed: props.isCollapsed
        };
    }

    toggleCollapse = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    render() {
        return (
            <div className="fixed-top">
                <div id="navigation-component"
                    className={`container-fluid ${(this.state.isCollapsed) ? 'collapsed' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav className="nav nav-pills flex-column flex-sm-row">
                                    <a className="" href="#home">Home</a>
                                    <a className="" href="#work">Work</a>
                                    <a className="" href="#skills">Skills</a>
                                    <a className="" href="#education">Education</a>
                                    <a className="" href="#about">About</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <span className="logo">
                    <a href="#home">Curriculum Vitae</a>
                </span>
                    <span className="nav-menu-button" onClick={() => this.toggleCollapse()}>
                    SL
                    <br />
                    <i className={`fa fa-angle-${this.state.isCollapsed ? 'down' : 'up'}`} aria-hidden="true"/>
                </span>
                </div>
            </div>
        );
    }
}

export default Navigation;
