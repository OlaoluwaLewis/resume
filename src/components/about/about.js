import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="four columns">
                            <img className="profile-pic" src="images/profilepic.jpeg" alt="" />
                        </div>
                        <div className="eight columns main-col">
                            <h2>About Me</h2>
                            <p>I am a full stack web developer currently based in Essen, Germany. I am passionate about web development, designing and building applications that could help grow a business or solve problems. I am very much open to new ideas and opportunity. Please feel free to contact me at any time.
                </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Olaoluwa Lewis</span><br />
                                        <span>Essen, Germany
                   </span><br />
                                        <span>+49 1709359770</span><br />
                                        <span>olipompin@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}