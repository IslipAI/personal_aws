import React, { Component } from 'react';
import './Skills.css'


class Skills extends Component{

    render(){
        return(
            <div className="skills">
                <div className="skillsContainer">
                <div className="myskills">
                    <h1 className="skillsTitle">Skills</h1>
                    <h5 className="skillsSubtitleLanguages">Languages</h5>
                    <h6 className="skillsContent">HTML/CSS, JavaScript, PHP, Java, C#, Python, Dart, SQL, NoSQL</h6>
                    <h5 className="skillsSubtitleFrameworks">Libraries/Frameworks</h5>
                    <h6 className="skillsContent">React, Express, Three, Howler, Flutter</h6>
                    <h5 className="skillsSubtitleTools">Tools</h5>
                    <h6 className="skillsContent">Firebase, Git, Moqup, Selenium, Postman</h6>
                </div>
                </div>
            </div>
        )
    }
}

export default Skills;