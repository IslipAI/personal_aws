import React, { Component } from 'react';
import './About.css'


class About extends Component{

    render(){
        return(
            <div className="about">
                <div className="aboutContent">
                    <div className="aboutme">
                        <h1>About me</h1>
                        
                        <p>Currently 22 years old.
                        <br/>Full name is Alexander Christopher Islip.
                        <br/>A young professional who is trying to futher his career. 
                        <br/> Has a strong passion for computer science and software development.</p>

                        <h6>Here's my <a href="https://github.com/IslipAI/resume/blob/master/Resume%20-%20Alexander%20Islip.pdf">resume</a></h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;