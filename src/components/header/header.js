import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm Olaoluwa Lewis.</h1>
                            <h3>I'm a German based <span>Full Stack Web Developer</span> creating awesome and
                      effective visual identities for companies of all sizes around the globe. Let's start scrolling
                                  and learn more about me.</h3>
                            <hr />
                            <ul className="social">
                                
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/JLewis444" target="blank"><i className="fa fa-github" /></a></li>
                                <li><a href="#"><i className="fa fa-skype" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}