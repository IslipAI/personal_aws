import React, { Component } from 'react';
import '../mainscroller/Mainscroller.css';

//Components
import Footer from '../footer/Footer'; 

//Pages 
import Home from 'C:/code/webprojects/personal_aws/src/pages/home/Home';
import About from 'C:/code/webprojects/personal_aws/src/pages/about/About'
import Contact from 'C:/code/webprojects/personal_aws/src/pages/contact/Contact';
import Skills from 'C:/code/webprojects/personal_aws/src/pages/skills/Skills';

export default class MainScroller extends Component {
    render() {
        return (
            <div className="mainScroller">
                    <Home/>
                    <About/>
                    <Skills/>
                    <Contact/>
                    <Footer/>
            </div>
        )
    }
}