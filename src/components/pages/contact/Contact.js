import React, { Component } from 'react';
import './Contact.css'
import {SocialIcon} from 'react-social-icons';


class Contact extends Component{


    render(){
        return(
            <div className="contact">
                <div className="contactContent">
                    <div className="contactme">
                        <h1 className="contactTitle">Contact me!</h1>
                        <div className="sociallinks">
                            <p><SocialIcon url="https://twitter.com/AlexanderIslip"/></p>
                            <p><SocialIcon url="https://www.instagram.com/chrisislip/"/></p>
                            <p><SocialIcon url="https://www.linkedin.com/in/alexander-islip-577607182/"/></p>
                            <p><SocialIcon url="https://github.com/IslipAI"/></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;