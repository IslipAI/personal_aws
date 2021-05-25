import React, { Component } from 'react';
import './About.css'


class About extends Component{

    render(){
        return(
            <div className="about">
                <div className="aboutContainer">
                    <div className="aboutme">
                        <h1 className="aboutTitle">About me</h1>
                        <h6 className="aboutContent">Currently 22 years old.
                        <br/>Full name is Alexander Christopher Islip.
                        <br/>A young professional who is trying to futher his career. 
                        <br/> Has a strong passion for computer science and software development.</h6>
                        <h5 className="resume">Here's my <a href="https://github.com/IslipAI/resume/blob/master/Resume%20-%20Alexander%20Islip.pdf">resume</a></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;