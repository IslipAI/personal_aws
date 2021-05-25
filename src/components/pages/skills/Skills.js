import React, { Component } from 'react';
import './Skills.css'


class Skills extends Component{

    render(){
        return(
            <div className="skills">
                <div className="skillsContent">
                <div className="myskills">
                    <h1>Skills</h1>
                    <h6>Languages</h6>
                    <p>HTML/CSS, JavaScript, PHP, Java, C#, Python, Dart, SQL, NoSQL</p>
                    <h6>Libraries/Frameworks</h6>
                    <p>React, Express, Three, Howler, Flutter</p>
                    <h6>Tools</h6>
                    <p>Firebase, Git, Moqup, Selenium, Postman</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Skills;